import { DecimalChantaStorer } from "../../lib/b2c6/storers/DecimalChantaStorer";
import { DecimalChanta } from "../../lib/b2c6/mathematics/DecimalChanta";

test('Testing Instantiating of DecimalChantaStorer', () => {
  let a = new DecimalChantaStorer(11.5);
  expect(a.toString()).toBe('11.5');
  
  DecimalChanta.precision = 97;  
  a = new DecimalChantaStorer("11.5346141710991074111232578901231234387777733339904343464574908070735623435479797897857434567625943");
  expect(a.toString()).toBe('11.5346141710991074111232578901231234387777733339904343464574908070735623435479797897857434567625943');
  DecimalChanta.precision = 32;
  return;
});

