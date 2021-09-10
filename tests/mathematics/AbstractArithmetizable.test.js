import { AbstractArithmetizable } from "../../lib/b2c6/mathematics/AbstractArithmetizable";
import { InstantiatingAbstractClassError } from "../../lib/b2c6/errors/Errors";

test('Testing no instantiating of AbstractArithmetizable', () => {
  expect(
    () => { 
      const abstractInstance = new AbstractArithmetizable(); 
    }
  ).toThrow(InstantiatingAbstractClassError);
});