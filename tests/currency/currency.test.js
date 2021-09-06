import { Currency } from "../../lib/b2c6/currency/Currency";
import { DecimalChantaStorer } from "../../lib/b2c6/storers/DecimalChantaStorer";
import { BigStorer } from "../../lib/b2c6/storers/BigStorer";

const defaultStorerStrategy = DecimalChantaStorer;

test('Testing Instantiating of Currency', () => {
  let chileanPeso = new Currency({
    isoName: "CLP",
    ammount: 575,
    numberStorerFabric: defaultStorerStrategy
  });

  expect(chileanPeso.toString()).toBe("575");  
});


test('Testing Currency addition', () => {
  const chileanPesoPrice = new Currency({
    isoName: "CLP",
    ammount: 1575,
    numberStorerFabric: defaultStorerStrategy
  });

  const otherChileanPesoPrice = new Currency({
    isoName: "CLP",
    ammount: 425,
    numberStorerFabric: defaultStorerStrategy
  });

  const ammount = 1229;

  const currencyAddition = chileanPesoPrice.add(otherChileanPesoPrice);
  const currencyIntegerAddition = chileanPesoPrice.add(ammount);

  expect(currencyAddition.toString()).toBe("2000");
  expect(currencyIntegerAddition.toString()).toBe("2804");  
});
