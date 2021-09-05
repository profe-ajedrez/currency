import { DecimalChanta } from "../../lib/b2c6/mathematics/DecimalChanta";

test('Testing Instantiating of DecimalChanta', () => {
  let a = new DecimalChanta(11.5);
  console.log(`decimal chanta: ${a.toString()}`);
  
  a = new DecimalChanta("11.5346141710991074111232578901231234387777733339904343464574908070735623435479797897857434567625943");
  console.log(`decimal chanta: ${a.toString()}`);
  return;
});


test('Testing adding of DecimalChanta', () => {
  const a = new DecimalChanta(11.5);
  const b = new DecimalChanta(1.18);
  const c = a.add(b);

  console.log(`a + b = c`);
  console.log(`${a.toString()} + ${b.toString()} = ${c.toString()}`);
});

test('Testing substracting of DecimalChanta', () => {
  const a = new DecimalChanta(11.5);
  const b = new DecimalChanta(1.18);
  const c = a.substract(b);

  console.log(`a - b = c`);
  console.log(`${a.toString()} - ${b.toString()} = ${c.toString()}`);
});

test('Testing multiplying of DecimalChanta', () => {
  const a = new DecimalChanta(11.5);
  const b = new DecimalChanta(1.18);
  const c = a.multiply(b);

  console.log(`a * b = c`);
  console.log(`${a.toString()} * ${b.toString()} = ${c.toString()}`);
});

test('Testing division of DecimalChanta', () => {
  const a = new DecimalChanta(11.5);
  const b = new DecimalChanta(1.18);
  const c = a.divide(b);

  console.log(`a / b = c`);
  console.log(`${a.toString()} / ${b.toString()} = ${c.toString()}`);
});



test('Testing result of arithmetic operations in DecimalChanta', () => {
  const a = new DecimalChanta(11.5);
  const b = new DecimalChanta(1.18);
  const c = a.divide(b);
  const aAgain = c.multiply(b);

  console.log(`a / b = c`);
  console.log(`${a.toString()} / ${b.toString()} = ${c.toString()}`);
  console.log(`a = ${a.toString()} = aAgain = ${aAgain.toString()}`);

  expect(a.toString()).toBe(aAgain.toString());

  // const expected = "9.745762711864406779661016949152542372881355932203389830508474576";
  const expected = "9.74576271186440677966101694915254";
  expect(c.toString()).toBe(expected);
});
