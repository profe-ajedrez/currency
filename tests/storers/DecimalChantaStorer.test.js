import { DecimalChantaStorer } from "../../lib/b2c6/storers/DecimalChantaStorer";

test('Testing Instantiating of DecimalChantaStorer', () => {
    let a = new DecimalChantaStorer(11.5);

    console.log(`decimal chanta storer: ${a.toString()}`);
    
    a = new DecimalChantaStorer("11.5346141710991074111232578901231234387777733339904343464574908070735623435479797897857434567625943");
    console.log(`decimal chanta storer: ${a.toString()}`);
    return;
  });
  
