const stringLength = require('./task1');

  test.skip('string "hoy" should return 3', () => {
    expect(stringLength('hoy')).toBe(3);
  });
  
  test.skip('empty string should return "ERROR', () => {
    expect(stringLength('')).toBe('ERROR');
  });
  
  test.skip('string length greater than 10 should return "ERROR', () => {
      expect(stringLength('moorethan10')).toBe('ERROR');
  });



