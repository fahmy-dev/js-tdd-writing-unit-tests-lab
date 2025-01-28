// Your code here
export function isPalindrome(word) {
    if (!/^[A-Za-z]+$/.test(word)) {
        throw new Error('Input must contain only alphabetical characters');
    }
    
    if (word === '') {
        return false;
      }
    
    const lowerWord = word.toLowerCase();
    const reversedWord = lowerWord.split('').reverse().join('')
    return lowerWord === reversedWord
}