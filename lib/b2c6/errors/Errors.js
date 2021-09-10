
/**
 * InstantiatingAbstractClassError
 * 
 * Error arrojado cuando se trate de instanciar una clase abstracta, si esta
 * lo arroja.
 */
class InstantiatingAbstractClassError extends Error {
  constructor(message = "You are trying to instantiate an abstract class, asshole!") {
    super(message);
    this.name = "InstantiatingAbstractClassError";
  }
}

/**
 * Error genérico para cuando se invoquen métodos no definidos
 * Usada como punto de partida para otras clases de errores
 * para autodocumentar con su jerarquía
 */
class UndefinedMethodError extends Error {
  constructor (message = "You are trying to invoke an undefined method, asshole") {
      super(message);
      this.name = 'UndefinedMethodError';
  }
}

/**
 * InvokingAbstractClassMethodError
 * 
 * Exception throwed when invoking a method from an abstract class
 */
 class InvokingAbstractClassMethodError extends UndefinedMethodError {
  constructor (message = "You are trying to invoke a method of an abstract class, asshole!  (May be you have not implement this method in the concrete class yet? moron!)") {
      super(message);
      this.name = 'InvokingAbstractClassMethodError';
  }
}


module.exports = {
  InstantiatingAbstractClassError,
  UndefinedMethodError,
  InvokingAbstractClassMethodError
};