import { AbstractArithmetizable } from "../../lib/b2c6/mathematics/AbstractArithmetizable";
import { InstanciatingAbstractClassError } from "../../lib/b2c6/errors/Errors";

test('Testing no instantiating of AbstractArithmetizable', () => {
  try {
    const abstractInstance = new AbstractArithmetizable();
  } catch (e) {
    if (e instanceof InstanciatingAbstractClassError) {
      console.info("%cSuccess! Coudnt instanciate AbstractArithmetizable", "color:blue;");
      return;
    }
    throw e;
  }
});