# JavaScript Guide

This directory contains JavaScript examples with utility functions and array helpers.

## Files

### utils.js
Common JavaScript utility functions:
- `capitalizeFirst(str)` - Capitalize first letter of a string
- `isPalindrome(str)` - Check if a string is a palindrome
- `reverseString(str)` - Reverse a string
- `countCharacters(str)` - Count character occurrences
- `randomInt(min, max)` - Generate random integer
- `debounce(func, delay)` - Debounce a function

**Usage:**
```javascript
const { capitalizeFirst, isPalindrome } = require('./utils');

console.log(capitalizeFirst('hello'));  // Output: "Hello"
console.log(isPalindrome('racecar'));   // Output: true
```

### array-helpers.js
Array manipulation functions:
- `chunk(array, size)` - Split array into chunks
- `flatten(array)` - Flatten nested arrays
- `unique(array)` - Get unique values
- `shuffle(array)` - Shuffle array randomly
- `sortBy(array, property)` - Sort objects by property

**Usage:**
```javascript
const { chunk, unique } = require('./array-helpers');

const numbers = [1, 2, 3, 4, 5, 6];
console.log(chunk(numbers, 2));  // Output: [[1,2], [3,4], [5,6]]

const items = [1, 2, 2, 3, 3, 3];
console.log(unique(items));  // Output: [1, 2, 3]
```

## Running the Examples

You can use Node.js to run these files:

```bash
node utils.js
node array-helpers.js
```

Or import them in your own JavaScript files using `require()` or ES6 imports.
