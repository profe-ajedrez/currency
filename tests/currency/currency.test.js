import { Currency } from "../../lib/b2c6/currency/Currency";
import { DecimalChantaStorer } from "../../lib/b2c6/storers/DecimalChantaStorer";
import { BigStorer } from "../../lib/b2c6/storers/BigStorer";

const defaultStorerStrategy = BigStorer;

test('Testing Instantiating of Currency', () => {
  let chileanPeso = new Currency({
    isoName: "CLP",
    ammount: 575,
    numberStorerFabric: defaultStorerStrategy
  });
  console.log(`chilean peso: ${chileanPeso.toString()}`);  
  return;
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

  console.log(`currencyAddition:        ${currencyAddition.toString()}`);
  console.log(`currencyIntegerAddition: ${currencyIntegerAddition.toString()}`); 
  return;
});
