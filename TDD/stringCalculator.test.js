
const { add } = require('./stringCalculator');

describe('String Calculator', () => {
  test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('returns the number itself if only one number is given', () => {
    expect(add('1')).toBe(1);
    expect(add('5')).toBe(5);
  });

  test('returns the sum of two numbers', () => {
    expect(add('1,2')).toBe(3);
  });

  test('handles new lines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  test('supports custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  test('throws error on negative numbers', () => {
    expect(() => add('1,-2,3')).toThrow('Negative numbers not allowed: -2');
  });
});
