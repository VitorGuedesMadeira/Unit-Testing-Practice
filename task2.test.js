const reverseString = require('./task2');

test.skip('string "Karla" should return "alraK"', () => {
  expect(reverseString('Karla')).toBe('alraK');
});