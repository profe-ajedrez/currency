import { InstantiatingAbstractClassError, InvokingAbstractClassMethodError } from "../errors/Errors";

/**
 * AbstracStorer
 * 
 * Provides an abstract interface to implement custom storers.
 * 
 * An storer is a component responsible of handling arithmetical
 * operations over an object.
 * 
 */
export class AbstractStorer {
  constructor() {
    if (this.constructor === AbstractStorer) {
      throw new InstantiatingAbstractClassError();
    }
  }

  add() {
    throw new InvokingAbstractClassMethodError("AbstractStorer::add");
  }

  substract() {
    throw new InvokingAbstractClassMethodError("AbstractStorer::substract");
  }

  multiply() {
    throw new InvokingAbstractClassMethodError("AbstractStorer::multiply");
  }

  divide() {
    throw new InvokingAbstractClassMethodError("AbstractStorer::denominator");
  }

  toString() {
    throw new InvokingAbstractClassMethodError("AbstractStorer::toString");
  }
}
