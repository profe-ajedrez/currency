import { InstantiatingAbstractClassError, InvokingAbstractClassMethodError } from "../errors/Errors";

/**
 * AbstractArithmetizable
 * 
 * Clase abstracta que funge como interfaz para clases que necesiten
 * implementar métodos aritmeticos
 */
export class AbstractArithmetizable {
  constructor() {
    if (this.constructor === AbstractArithmetizable) {
      throw new InstantiatingAbstractClassError();
    }
  }

  add() {
    throw new InvokingAbstractClassMethodError("AbstractArithmetizable::add");
  }

  substract() {
    throw new InvokingAbstractClassMethodError("AbstractArithmetizable::substract");
  }

  multiply() {
    throw new InvokingAbstractClassMethodError("AbstractArithmetizable::multiply");
  }

  divide() {
    throw new InvokingAbstractClassMethodError("AbstractArithmetizable::denominator");
  }
}
