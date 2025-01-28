// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it('returns true for "racecar"', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('returns false for "car"', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  it('returns false for empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  it('throws error for non-alphabetic characters', () => {
    expect(() => isPalindrome('race car')).toThrow();
    expect(() => isPalindrome('12321')).toThrow();
  });
});