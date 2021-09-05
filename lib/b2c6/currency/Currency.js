import { AbstractArithmetizable } from "../mathematics/AbstractArithmetizable";

export class Currency extends AbstractArithmetizable {
  static defaultCurrencyIsoName = "CLP";
  static defaultDecimals = 2;

  #isoName;
  #isoDecimals;
  #storer;
  #numberStorerFabric;


  /**
   * constructor
   * 
   * @param {Object} inits   options for currency instance
   */
  constructor(inits) {
    super();
    inits = {
      ...{
        isoName: Currency.defaultCurrencyIsoName,
        decimals: Currency.defaultDecimals,
        ammount: 0,        
        numberStorerFabric: null
      },
      ...inits
    };

    this.#isoName = inits.isoName;
    this.#isoDecimals = inits.isoDecimals;
    this.#numberStorerFabric = inits.numberStorerFabric;

    this.#storer = new this.#numberStorerFabric(inits.ammount);
  }

  get isoDecimals() {
    return this.#isoDecimals
  }

  get isoName() {
    return this.#isoName
  }

  get ammount() {
    return this.#storer.toString();
  }

  add(value) {
    const pojo = this.toPojo();
    pojo.ammount = this.#storer.add(value).toString();
    return new Currency(pojo);
  }

  substract() {
    const pojo = this.toPojo();
    pojo.ammount = this.#storer.substract(value).toString();
    return new Currency(pojo);
  }

  multiply() {
    const pojo = this.toPojo();
    pojo.ammount = this.#storer.multiply(value).toString();
    return new Currency(pojo);
  }

  divide() {
    const pojo = this.toPojo();
    pojo.ammount = this.#storer.divide(value).toString();
    return new Currency(pojo);
  }

  toString() {
    return this.#storer.toString();
  }


  toPojo() {
    return {
      isoName: this.#isoName,
      decimals: this.#isoDecimals,
      ammount: this.toString(),
      numberStorerFabric: this.#numberStorerFabric
    };
  }
}