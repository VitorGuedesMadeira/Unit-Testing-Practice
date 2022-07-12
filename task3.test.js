const Calculator = require('./task3');

describe.skip('Calculator.add', () => {
    test('2+2 should return 4', () => {
        expect(Calculator.add(2, 2)).toBe(4);
      });

    test('4+4 should return 8', () => {
        expect(Calculator.add(4, 4)).toBe(8);
    }); 

    test('-4+2 should return -2', () => {
        expect(Calculator.add(-4, 2)).toBe(-2);
      });
})

describe.skip('Calculator.subtract', () => {
    test('2-2 should return 0', () => {
        expect(Calculator.subtract(2, 2)).toBe(0);
      });

    test('8+4 should return 4', () => {
        expect(Calculator.subtract(8, 4)).toBe(4);
    }); 

    test('-4-2 should return -6', () => {
        expect(Calculator.subtract(-4, 2)).toBe(-6);
      });
})

describe.skip('Calculator.divide', () => {
    test('2/2 should return 1', () => {
        expect(Calculator.divide(2, 2)).toBe(1);
      });

    test('8/4 should return 2', () => {
        expect(Calculator.divide(8, 4)).toBe(2);
    }); 

    test('100/2 should return 50', () => {
        expect(Calculator.divide(100, 2)).toBe(50);
      });
})

describe.skip('Calculator', () => {
    test('2*2 should return 4', () => {
        expect(Calculator.multiply(2, 2)).toBe(4);
      });

    test('4*4 should return 16', () => {
        expect(Calculator.multiply(4, 4)).toBe(16);
    }); 

    test('-4*2 should return -8', () => {
        expect(Calculator.multiply(-4, 2)).toBe(-8);
      });
})
