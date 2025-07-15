import { validateEmail } from "../helper";
import { formatPrice } from "../navigation/app/account/helper/formatPrice";

describe('checking formatPrice', () => {
  it(`returns empty string for incorrect values`, () => {
    expect(formatPrice(undefined)).toEqual('');
  });

  it(`returns empty string for incorrect values`, () => {
    expect(formatPrice('asd')).toEqual('');
  });

  it(`returns empty string for incorrect values`, () => {
    expect(formatPrice('123.32asd')).toEqual('');
  });

  it(`returns correct price format`, () => {
    expect(formatPrice(123234)).toEqual('123,234.00');
  });

  it(`returns correct price format`, () => {
    expect(formatPrice(123456789)).toEqual('123,456,789.00');
  });
});

describe('validate email', () => {
  it(`returns false on invalid email`, () => {
    expect(validateEmail('asd.@asd.zxc')).toEqual(false);
  });

  it(`returns false on invalid email`, () => {
    expect(validateEmail('asd.@asd')).toEqual(false);
  });
  
  it(`returns true on valid email`, () => {
    expect(validateEmail('asdf@asdf.asdf')).toEqual(true);
  });

  it(`returns true on valid email`, () => {
    expect(validateEmail('a@aa.aa')).toEqual(true);
  });
});