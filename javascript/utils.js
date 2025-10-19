/**
 * Utility functions for common JavaScript operations
 */

/**
 * Capitalize the first letter of a string
 * @param {string} str - The input string
 * @returns {string} - The capitalized string
 */
function capitalizeFirst(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Check if a string is a palindrome
 * @param {string} str - The input string
 * @returns {boolean} - True if palindrome, false otherwise
 */
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}

/**
 * Reverse a string
 * @param {string} str - The input string
 * @returns {string} - The reversed string
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * Count the occurrences of each character in a string
 * @param {string} str - The input string
 * @returns {Object} - Object with character counts
 */
function countCharacters(str) {
    const counts = {};
    for (const char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }
    return counts;
}

/**
 * Generate a random integer between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} - Random integer
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Debounce a function
 * @param {Function} func - The function to debounce
 * @param {number} delay - The delay in milliseconds
 * @returns {Function} - The debounced function
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

module.exports = {
    capitalizeFirst,
    isPalindrome,
    reverseString,
    countCharacters,
    randomInt,
    debounce
};
