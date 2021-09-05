import { InstanciatingAbstractClassError, InvokingAbstractClassMethod } from "../errors/Errors";

/**
 * AbstracStorer
 * 
 * Provides an abstract interface to implement custom storers.
 * 
 * An storer is a component responsible of handle the arithmetical
 * operation over an object.
 * 
 */
export class AbstractStorer {
  constructor() {
    if (this.constructor === AbstractStorer) {
      throw new InstanciatingAbstractClassError();
    }
  }

  add() {
    throw new InvokingAbstractClassMethod("AbstractStorer::add");
  }

  substract() {
    throw new InvokingAbstractClassMethod("AbstractStorer::substract");
  }

  multiply() {
    throw new InvokingAbstractClassMethod("AbstractStorer::multiply");
  }

  divide() {
    throw new InvokingAbstractClassMethod("AbstractStorer::denominator");
  }

  toString() {
    throw new InvokingAbstractClassMethod("AbstractStorer::toString");
  }
}
