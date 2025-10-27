/**
 * Array helper functions for common operations
 */

/**
 * Chunk an array into smaller arrays of specified size
 * @param {Array} array - The input array
 * @param {number} size - The size of each chunk
 * @returns {Array} - Array of chunks
 */
function chunk(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

/**
 * Flatten a nested array
 * @param {Array} array - The nested array
 * @returns {Array} - The flattened array
 */
function flatten(array) {
    return array.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), 
        []
    );
}

/**
 * Get unique values from an array
 * @param {Array} array - The input array
 * @returns {Array} - Array with unique values
 */
function unique(array) {
    return [...new Set(array)];
}

/**
 * Shuffle an array randomly
 * @param {Array} array - The input array
 * @returns {Array} - The shuffled array
 */
function shuffle(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

/**
 * Sort an array of objects by a property
 * @param {Array} array - Array of objects
 * @param {string} property - Property name to sort by
 * @returns {Array} - Sorted array
 */
function sortBy(array, property) {
    return [...array].sort((a, b) => {
        if (a[property] < b[property]) return -1;
        if (a[property] > b[property]) return 1;
        return 0;
    });
}

module.exports = {
    chunk,
    flatten,
    unique,
    shuffle,
    sortBy
};
