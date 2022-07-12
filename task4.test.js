const capitalize = require('./task4');

test('string "karla" should return "Karla', () => {
    expect(capitalize('karla')).toBe('Karla');
  });

test('number 4 should return "Not a string"', () => {
    expect(capitalize(4)).toBe('Not a string');
});

test('boolean value should return "Not a string"', () => {
  expect(capitalize(true)).toBe('Not a string');
});

test('object should return "Not a string"', () => {
  expect(capitalize({})).toBe('Not a string');
});

test('functions should return "Not a string"', () => {
  expect(capitalize(capitalize())).toBe('Not a string');
});

test('Null should return "Not a string"', () => {
  expect(capitalize(null)).toBe('Not a string');
});

test('undefined should return "Not a string"', () => {
  expect(capitalize(undefined)).toBe('Not a string');
});
