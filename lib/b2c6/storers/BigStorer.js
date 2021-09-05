import { AbstractStorer } from './AbstractStorer';
import Big from 'big.js';


/**
 * BigStorer
 * 
 * NumberStorer para la librería Big.js
 * @link https://github.com/MikeMcl/big.js/
 */
export class BigStorer extends AbstractStorer {

  static #fromDecimalChanta(decimal) {
    return new Big(decimal.toString());
  }

  #ammount;

  constructor(rawAmmount) {
    super();

    Big.PE = 32;
    Big.NE = -32;
    this.#ammount = new Big(rawAmmount);
  }

  get ammount() {
    return this.#ammount;
  }

  add(value) {
    return this.#ammount.plus(value);
  }

  substract(value) {
    return this.#ammount.minus(value);
  }

  multiply(value) {
    return this.#ammount.times(value);
  }

  divide(value) {
    return this.#ammount.div(value);
  }

  toString() {
    return this.ammount.toString();
  }

}