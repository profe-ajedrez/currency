import { DecimalChanta } from "../../lib/b2c6/mathematics/DecimalChanta";

test('Testing Instantiating of DecimalChanta', () => {
  let a = new DecimalChanta(11.5);
  expect(a.toString()).toBe("11.5");  
  
  DecimalChanta.precision = 97;
  a = new DecimalChanta("11.5346141710991074111232578901231234387777733339904343464574908070735623435479797897857434567625943");
  
  expect(a.toString()).toBe("11.5346141710991074111232578901231234387777733339904343464574908070735623435479797897857434567625943");
  DecimalChanta.precision = 32;
  return;
});


test('Testing adding of DecimalChanta', () => {
  DecimalChanta.precision = 32;
  const a = new DecimalChanta(11.5);
  const b = new DecimalChanta(1.18);
  const c = a.add(b);

  expect(c.toString()).toBe("12.68");
});

test('Testing substracting of DecimalChanta', () => {
  DecimalChanta.precision = 32;
  const a = new DecimalChanta(11.5);
  const b = new DecimalChanta(1.18);
  const c = a.substract(b);

  expect(c.toString()).toBe("10.32");
});

test('Testing multiplying of DecimalChanta', () => {
  DecimalChanta.precision = 32;
  const a = new DecimalChanta(11.5);
  const b = new DecimalChanta(1.18);
  const c = a.multiply(b);

  expect(c.toString()).toBe("13.57");
});

test('Testing division of DecimalChanta', () => {
  DecimalChanta.precision = 32;
  const a = new DecimalChanta(11.5);
  const b = new DecimalChanta(1.18);
  const c = a.divide(b);

  expect(c.toString()).toBe("9.74576271186440677966101694915254");
});



test('Testing result of arithmetic operations in DecimalChanta', () => {
  DecimalChanta.precision = 32;
  const a = new DecimalChanta(11.5);
  const b = new DecimalChanta(1.18);
  const c = a.divide(b);
  const aAgain = c.multiply(b);

  expect(a.toString()).toBe(aAgain.toString());
  const expected = "9.74576271186440677966101694915254";
  expect(c.toString()).toBe(expected);
});
