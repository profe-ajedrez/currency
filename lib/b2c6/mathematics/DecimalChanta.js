import { AbstractArithmetizable }  from "./AbstractArithmetizable";

const DEFAULT_PRECISION = 32;
const ROUND_TO_NEAREST = true;

export class DecimalChanta extends AbstractArithmetizable {
  static precision = DEFAULT_PRECISION;
  static round = ROUND_TO_NEAREST;
  static poweredFactor = BigInt("1" + "0".repeat(DecimalChanta.precision));


  static createFromBigInt(bigInt) {
    const pojo = { _daBigValue: bigInt };
    return Object.assign( Object.create(DecimalChanta.prototype), pojo);
  }

  static roundedDivision(numerator, denominator) {
    const correction = (DecimalChanta.round ? numerator * 2n / denominator % 2n : 0n);
    return DecimalChanta.createFromBigInt(numerator / denominator + correction);
  }



  constructor(value) {
    super();
    if (value instanceof DecimalChanta) {
      return value;
    }

    let [ integerPart, decimalPart ] = String(value).split(".").map( (e, i) => {
      if (typeof e != "undefined" && !!e) {
        return e;
      }
    });

    decimalPart = decimalPart ?? "0";

    this._daBigValue = BigInt(integerPart + decimalPart.padEnd(DecimalChanta.precision, "0")
      .slice(0, DecimalChanta.precision)) 
      + BigInt(DecimalChanta.round && decimalPart[DecimalChanta.precision] >= "5");    
  }

  add(value) {
    return DecimalChanta.createFromBigInt(this._daBigValue + new DecimalChanta(value)._daBigValue);
  }

  substract(value) {
    return DecimalChanta.createFromBigInt(this._daBigValue - new DecimalChanta(value)._daBigValue);
  }

  multiply(value) {
    return DecimalChanta.roundedDivision(this._daBigValue * new DecimalChanta(value)._daBigValue, DecimalChanta.poweredFactor);
  }

  divide(value) {
    return DecimalChanta.roundedDivision(this._daBigValue * DecimalChanta.poweredFactor, new DecimalChanta(value)._daBigValue);
  }


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

const proxy = new Proxy(
  DecimalChanta,
  {
    set: function(obj, prop) {
      DecimalChanta.poweredFactor = BigInt("1" + "0".repeat(DecimalChanta.precision))
    }
  }
);