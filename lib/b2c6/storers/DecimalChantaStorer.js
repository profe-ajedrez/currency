import { AbstractStorer } from "./AbstractStorer";
import { DecimalChanta } from "../mathematics/DecimalChanta";

/**
 * DecimalChantaStorer
 * 
 * Implements a DecimaChanta based storer.
 * 
 * Encapsulates DecimalChanta services.
 * 
 */
export class DecimalChantaStorer extends AbstractStorer {

  #ammount;

  /**
   * constructor
   * 
   * @param {Mixed} rawAmmount  The value to be stored as a DecimalChanta value
   */
  constructor(rawAmmount) {
    super();
    this.#ammount = new DecimalChanta(rawAmmount);
  }

  get ammount() {
    return this.#ammount;
  }

  /**
   * add
   * 
   * Punto de acceso al método add del componente responsable de almacenar el valor
   * 
   * @param {*} value 
   * @returns 
   */
  add(value) {
    return this.#ammount.add(value);
  }

  /**
   * substract
   * 
   * Punto de acceso al método substract del componente responsable de almacenar el valor
   * 
   * @param {*} value 
   * @returns 
   */
  substract(value) {
    return this.#ammount.substract(value);
  }

  /**
   * add
   * 
   * Punto de acceso al método multiply del componente responsable de almacenar el valor
   * 
   * @param {*} value 
   * @returns 
   */
  multiply(value) {
    return this.#ammount.multiply(value);
  }

  /**
   * add
   * 
   * Punto de acceso al método divide del componente responsable de almacenar el valor
   * 
   * @param {*} value 
   * @returns 
   */
  divide() {
    return this.#ammount.divide(value);
  }

  toString() {
    return this.ammount.toString();
  }
}
