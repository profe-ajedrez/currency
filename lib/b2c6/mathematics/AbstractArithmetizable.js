import { InstanciatingAbstractClassError, InvokingAbstractClassMethod } from "../errors/Errors";

export class AbstractArithmetizable {
  constructor() {
    if (this.constructor === AbstractArithmetizable) {
      throw new InstanciatingAbstractClassError();
    }
  }

  add() {
    throw new InvokingAbstractClassMethod("AbstractArithmetizable::add");
  }

  substract() {
    throw new InvokingAbstractClassMethod("AbstractArithmetizable::substract");
  }

  multiply() {
    throw new InvokingAbstractClassMethod("AbstractArithmetizable::multiply");
  }

  divide() {
    throw new InvokingAbstractClassMethod("AbstractArithmetizable::denominator");
  }
}
