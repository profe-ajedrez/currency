import { AbstractArithmetizable }  from "./AbstractArithmetizable";

/**
 * @const {int} DEFAULT_PRECISION  indica la cantidad máxima de decimales por defecto con las que DecimalChanta trabajará
 */
const DEFAULT_PRECISION = 32;

/**
 * @const {int} ROUND_TO_NEAREST  Indica redondeo hacia el entero más cercano (el de toda la vida)
 */
const ROUND_TO_NEAREST = true;

/**
 * DecimalChanta
 * 
 * Responsable de manejar cantidades  en R y sus operaciones con precisión decimal arbitraria.
 * 
 * 
 */
export class DecimalChanta extends AbstractArithmetizable {
  
  /**
   * @field {int} static DecimalChanta.precision  Indica la cantida de decimales con las que las _siguientes_ instancias de 
   *                                              DecimalChanta trabajaran. Cuidado con operar sobre instancias con 
   *                                              distinta precisión decimal.
   */  
  static precision = DEFAULT_PRECISION;

  /**
   * @field {bool} DecimalChanta.round            Indica si las instancias de DecimalChanta redondearan hacia el entero mas cercano o no.
   *                                              Si su valor es false, trunca.
   */
  static round = ROUND_TO_NEAREST;


  /**
   * @field {BigInt} DecimalChanta.poweredFactor  Es el BigInt que contiene la potencia de 10 con la cual se convertiran los valores a
   *                                              enteros grandes, via multiplicandolos.
   *                                              Ej.:  3.14156, será convertido a 314156000000000000000000000000000 si se usa la precisión por defecto.
   */
  static poweredFactor = BigInt("1" + "0".repeat(DecimalChanta.precision));


  /**
   * createFromBigInt
   * 
   * Construye una instancia de DecimalChanta a partir de un BigInt
   * @param {mixed} bigInt 
   * @returns 
   */
  static createFromBigInt(bigInt) {
    const pojo = { _daBigValue: bigInt };
    return Object.assign( Object.create(DecimalChanta.prototype), pojo);
  }

  /**
   * roundedDivision
   * 
   * Determina la corrección a agregar según si DecimalChanta.round es ROUND_TO_NEAREST o no,
   * En este último caso la corrección será (BigInt)0
   * Realiza la división casteando el numerador y el denominador a BigInt's por medio de sumarlo
   * a la correción, devolviendo el resultado como una instancia de DecimalChanta
   * 
   * @param {*} numerator 
   * @param {*} denominator 
   * @returns 
   */
  static roundedDivision(numerator, denominator) {
    const correction = (DecimalChanta.round ? numerator * 2n / denominator % 2n : 0n);
    return DecimalChanta.createFromBigInt(numerator / denominator + correction);
  }



  constructor(value) {
    super();
    if (value instanceof DecimalChanta) {
      return value;
    }

    // INFO Almacena el valor flotante separando su parte entera y su parte decimal en dos strings    
    let [ integerPart, decimalPart ] = String(value).split(".").map( (e, i) => {
      if (typeof e != "undefined" && !!e) {
        return e;
      }
    });

    // INFO coerciona el valor de decimalPart a "0" pues en este punto usamos strings antes de convertir a BigInt
    decimalPart = decimalPart ?? "0";

    // INFO concatenamos las partes strings y las casteamos a un BigInt, 
    // INFO asegurandonos de hacer el corte según el tamaño de DecimalChanta.precision
    // INFO y de verificar DecimalChanta.round para ver si redondeamos al maás cercano o solo truncamos.
    this._daBigValue = BigInt(integerPart + decimalPart.padEnd(DecimalChanta.precision, "0")
      .slice(0, DecimalChanta.precision)) 
      + BigInt(DecimalChanta.round && decimalPart[DecimalChanta.precision] >= "5");    
  }

  /**
   * add
   * @param {*} value 
   * @returns DecimalChanta
   */
  add(value) {
    return DecimalChanta.createFromBigInt(this._daBigValue + new DecimalChanta(value)._daBigValue);
  }

  /**
   * substract
   * @param {*} value 
   * @returns DecimalChanta
   */
  substract(value) {
    return DecimalChanta.createFromBigInt(this._daBigValue - new DecimalChanta(value)._daBigValue);
  }

  /**
   * multiply
   * @param {*} value 
   * @returns DecimalChanta
   */
  multiply(value) {
    return DecimalChanta.roundedDivision(this._daBigValue * new DecimalChanta(value)._daBigValue, DecimalChanta.poweredFactor);
  }

  /**
   * divide
   * @param {*} value 
   * @returns DecimalChanta
   */
  divide(value) {
    return DecimalChanta.roundedDivision(this._daBigValue * DecimalChanta.poweredFactor, new DecimalChanta(value)._daBigValue);
  }


  /**
   * toString
   * @returns String
   */
  toString() {
    const s = this._daBigValue.toString().padStart(DecimalChanta.precision + 1, "0");
    const integerPart = s.slice(0, -DecimalChanta.precision);
    const decimalPart = s.slice(-DecimalChanta.precision);
    if (!!decimalPart && decimalPart.trim() != "" && decimalPart != "0".repeat(DecimalChanta.precision)) {
      return integerPart + "." + decimalPart.replace(/\.?0+$/, "");
    }

    return integerPart;
  }
}

// INFO Experimental. @see https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Proxy 
const proxy = new Proxy(
  DecimalChanta,
  {
    set: function(obj, prop) {
      DecimalChanta.poweredFactor = BigInt("1" + "0".repeat(DecimalChanta.precision))
    }
  }
);