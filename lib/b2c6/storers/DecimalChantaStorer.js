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

  add(value) {
    return this.#ammount.add(value);
  }

  substract(value) {
    return this.#ammount.substract(value);
  }

  multiply(value) {
    return this.#ammount.multiply(value);
  }

  divide() {
    return this.#ammount.divide(value);
  }

  toString() {
    return this.ammount.toString();
  }
}
