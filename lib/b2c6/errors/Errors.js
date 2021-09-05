class InstanciatingAbstractClassError extends Error {
  constructor(message = "You are trying to instantiate an abstract class, asshole!") {
    super(message);
    this.name = "InstanciatingAbstractClassError";
  }
}

class UndefinedMethod extends Error {
  constructor (message = "You are trying to invoke an undefined method, asshole") {
      super(message);
      this.name = 'UndefinedMethod';
  }
}

/**
 * InvokingAbstractClassMethod
 * 
 * Exception throwed when invoking a method from an abstract class
 */
 class InvokingAbstractClassMethod extends UndefinedMethod {
  constructor (message = "You are trying to invoke a method of an abstract class, asshole!  (May be you have not implement this method in the concrete class yet? moron!)") {
      super(message);
      this.name = 'InvokingAbstractClassMethod';
  }
}


module.exports = {
  InstanciatingAbstractClassError,
  UndefinedMethod,
  InvokingAbstractClassMethod
};