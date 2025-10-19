/**
 * Simple REST API mock server example using Express.js concepts
 * This file demonstrates API routing patterns for GitHub Copilot
 */

/**
 * Mock database of users
 */
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'user' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'user' }
];

/**
 * Mock database of products
 */
const products = [
    { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics', stock: 15 },
    { id: 2, name: 'Mouse', price: 29.99, category: 'Electronics', stock: 50 },
    { id: 3, name: 'Keyboard', price: 79.99, category: 'Electronics', stock: 30 },
    { id: 4, name: 'Monitor', price: 299.99, category: 'Electronics', stock: 20 }
];

/**
 * API Response helper
 */
class ApiResponse {
    static success(data, message = 'Success') {
        return {
            success: true,
            message,
            data,
            timestamp: new Date().toISOString()
        };
    }

    static error(message, statusCode = 400) {
        return {
            success: false,
            error: message,
            statusCode,
            timestamp: new Date().toISOString()
        };
    }
}

/**
 * User API endpoints
 */
class UserAPI {
    // GET /api/users - Get all users
    static getAllUsers() {
        return ApiResponse.success(users, 'Users retrieved successfully');
    }

    // GET /api/users/:id - Get user by ID
    static getUserById(id) {
        const user = users.find(u => u.id === parseInt(id));
        if (!user) {
            return ApiResponse.error('User not found', 404);
        }
        return ApiResponse.success(user, 'User found');
    }

    // POST /api/users - Create new user
    static createUser(userData) {
        // Validate required fields
        if (!userData.name || !userData.email) {
            return ApiResponse.error('Name and email are required', 400);
        }

        const newUser = {
            id: users.length + 1,
            name: userData.name,
            email: userData.email,
            role: userData.role || 'user'
        };

        users.push(newUser);
        return ApiResponse.success(newUser, 'User created successfully');
    }

    // PUT /api/users/:id - Update user
    static updateUser(id, updates) {
        const userIndex = users.findIndex(u => u.id === parseInt(id));
        if (userIndex === -1) {
            return ApiResponse.error('User not found', 404);
        }

        users[userIndex] = { ...users[userIndex], ...updates };
        return ApiResponse.success(users[userIndex], 'User updated successfully');
    }

    // DELETE /api/users/:id - Delete user
    static deleteUser(id) {
        const userIndex = users.findIndex(u => u.id === parseInt(id));
        if (userIndex === -1) {
            return ApiResponse.error('User not found', 404);
        }

        users.splice(userIndex, 1);
        return ApiResponse.success(null, 'User deleted successfully');
    }
}

/**
 * Product API endpoints
 */
class ProductAPI {
    // GET /api/products - Get all products
    static getAllProducts(filters = {}) {
        let filteredProducts = [...products];

        // Filter by category if provided
        if (filters.category) {
            filteredProducts = filteredProducts.filter(
                p => p.category.toLowerCase() === filters.category.toLowerCase()
            );
        }

        // Filter by price range
        if (filters.minPrice) {
            filteredProducts = filteredProducts.filter(
                p => p.price >= parseFloat(filters.minPrice)
            );
        }
        if (filters.maxPrice) {
            filteredProducts = filteredProducts.filter(
                p => p.price <= parseFloat(filters.maxPrice)
            );
        }

        return ApiResponse.success(filteredProducts, 'Products retrieved successfully');
    }

    // GET /api/products/:id - Get product by ID
    static getProductById(id) {
        const product = products.find(p => p.id === parseInt(id));
        if (!product) {
            return ApiResponse.error('Product not found', 404);
        }
        return ApiResponse.success(product, 'Product found');
    }

    // POST /api/products - Create new product
    static createProduct(productData) {
        // Validate required fields
        if (!productData.name || !productData.price) {
            return ApiResponse.error('Name and price are required', 400);
        }

        const newProduct = {
            id: products.length + 1,
            name: productData.name,
            price: parseFloat(productData.price),
            category: productData.category || 'Uncategorized',
            stock: productData.stock || 0
        };

        products.push(newProduct);
        return ApiResponse.success(newProduct, 'Product created successfully');
    }

    // PUT /api/products/:id/stock - Update product stock
    static updateStock(id, quantity) {
        const productIndex = products.findIndex(p => p.id === parseInt(id));
        if (productIndex === -1) {
            return ApiResponse.error('Product not found', 404);
        }

        products[productIndex].stock += quantity;
        return ApiResponse.success(
            products[productIndex],
            'Stock updated successfully'
        );
    }
}

/**
 * Example usage and testing
 */
function demonstrateAPI() {
    console.log('=== REST API Mock Demo ===\n');

    // User operations
    console.log('1. Get all users:');
    console.log(UserAPI.getAllUsers());
    console.log('\n');

    console.log('2. Get user by ID (1):');
    console.log(UserAPI.getUserById(1));
    console.log('\n');

    console.log('3. Create new user:');
    console.log(UserAPI.createUser({ name: 'Alice Brown', email: 'alice@example.com' }));
    console.log('\n');

    // Product operations
    console.log('4. Get all products:');
    console.log(ProductAPI.getAllProducts());
    console.log('\n');

    console.log('5. Get products in price range $20-$100:');
    console.log(ProductAPI.getAllProducts({ minPrice: 20, maxPrice: 100 }));
    console.log('\n');

    console.log('6. Update product stock:');
    console.log(ProductAPI.updateStock(1, 10));
    console.log('\n');
}

// Run demo if this is the main module
if (require.main === module) {
    demonstrateAPI();
}

module.exports = {
    UserAPI,
    ProductAPI,
    ApiResponse
};
