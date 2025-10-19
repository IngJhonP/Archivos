/**
 * Example demonstrating async/await and Promise handling in JavaScript
 */

/**
 * Simulate an API call with a delay
 * @param {number} ms - Milliseconds to wait
 * @returns {Promise} - Promise that resolves after delay
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Fetch user data (simulated)
 * @param {number} userId - User ID to fetch
 * @returns {Promise<Object>} - User data
 */
async function fetchUser(userId) {
    console.log(`Fetching user ${userId}...`);
    await delay(1000);
    
    return {
        id: userId,
        name: `User ${userId}`,
        email: `user${userId}@example.com`
    };
}

/**
 * Fetch multiple users in parallel
 * @param {Array<number>} userIds - Array of user IDs
 * @returns {Promise<Array>} - Array of user data
 */
async function fetchMultipleUsers(userIds) {
    const promises = userIds.map(id => fetchUser(id));
    return Promise.all(promises);
}

/**
 * Fetch users with error handling
 * @param {number} userId - User ID to fetch
 * @returns {Promise<Object>} - User data or error
 */
async function fetchUserSafe(userId) {
    try {
        const user = await fetchUser(userId);
        return { success: true, data: user };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

/**
 * Process data sequentially
 */
async function processSequentially() {
    console.log('Processing sequentially...');
    const user1 = await fetchUser(1);
    const user2 = await fetchUser(2);
    const user3 = await fetchUser(3);
    
    console.log('Users fetched sequentially:', [user1, user2, user3]);
}

/**
 * Process data in parallel
 */
async function processInParallel() {
    console.log('Processing in parallel...');
    const users = await fetchMultipleUsers([1, 2, 3]);
    console.log('Users fetched in parallel:', users);
}

// Example usage
async function main() {
    console.log('=== Async/Await Example ===\n');
    
    await processSequentially();
    console.log('\n');
    await processInParallel();
}

// Run if this is the main module
if (require.main === module) {
    main().catch(console.error);
}

module.exports = {
    fetchUser,
    fetchMultipleUsers,
    fetchUserSafe
};
