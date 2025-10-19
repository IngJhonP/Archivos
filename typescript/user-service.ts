/**
 * User service for managing user operations
 */

import { User, ApiResponse, UserRole } from './types';

export class UserService {
    private users: Map<number, User> = new Map();
    private nextId: number = 1;

    /**
     * Create a new user
     */
    createUser(
        username: string, 
        email: string, 
        firstName?: string, 
        lastName?: string
    ): ApiResponse<User> {
        // Validate email
        if (!this.isValidEmail(email)) {
            return {
                success: false,
                error: 'Invalid email format'
            };
        }

        // Check if username already exists
        if (this.findByUsername(username)) {
            return {
                success: false,
                error: 'Username already exists'
            };
        }

        const user: User = {
            id: this.nextId++,
            username,
            email,
            firstName,
            lastName,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        this.users.set(user.id, user);

        return {
            success: true,
            data: user,
            message: 'User created successfully'
        };
    }

    /**
     * Get a user by ID
     */
    getUserById(id: number): ApiResponse<User> {
        const user = this.users.get(id);
        
        if (!user) {
            return {
                success: false,
                error: 'User not found'
            };
        }

        return {
            success: true,
            data: user
        };
    }

    /**
     * Update user information
     */
    updateUser(id: number, updates: Partial<User>): ApiResponse<User> {
        const user = this.users.get(id);

        if (!user) {
            return {
                success: false,
                error: 'User not found'
            };
        }

        const updatedUser = {
            ...user,
            ...updates,
            id: user.id, // Prevent ID changes
            createdAt: user.createdAt, // Prevent createdAt changes
            updatedAt: new Date()
        };

        this.users.set(id, updatedUser);

        return {
            success: true,
            data: updatedUser,
            message: 'User updated successfully'
        };
    }

    /**
     * Delete a user
     */
    deleteUser(id: number): ApiResponse<void> {
        if (!this.users.has(id)) {
            return {
                success: false,
                error: 'User not found'
            };
        }

        this.users.delete(id);

        return {
            success: true,
            message: 'User deleted successfully'
        };
    }

    /**
     * Get all users
     */
    getAllUsers(): ApiResponse<User[]> {
        return {
            success: true,
            data: Array.from(this.users.values())
        };
    }

    /**
     * Find user by username
     */
    private findByUsername(username: string): User | undefined {
        return Array.from(this.users.values()).find(
            user => user.username === username
        );
    }

    /**
     * Validate email format
     */
    private isValidEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}
