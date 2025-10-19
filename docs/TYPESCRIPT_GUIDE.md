# TypeScript Guide

This directory contains TypeScript examples with type definitions and service classes.

## Files

### types.ts
Common TypeScript type definitions and interfaces:
- `User` - User interface with id, username, email, etc.
- `Product` - Product interface
- `ApiResponse<T>` - Generic API response wrapper
- `Pagination` - Pagination interface
- `UserRole` - User role enum
- `OrderStatus` - Order status enum
- Type aliases and utility types

**Usage:**
```typescript
import { User, ApiResponse } from './types';

const user: User = {
    id: 1,
    username: 'johndoe',
    email: 'john@example.com',
    createdAt: new Date(),
    updatedAt: new Date()
};

const response: ApiResponse<User> = {
    success: true,
    data: user
};
```

### user-service.ts
A service class for managing user operations:
- `createUser()` - Create a new user with validation
- `getUserById()` - Retrieve user by ID
- `updateUser()` - Update user information
- `deleteUser()` - Delete a user
- `getAllUsers()` - Get all users

**Usage:**
```typescript
import { UserService } from './user-service';

const service = new UserService();

// Create a user
const result = service.createUser('johndoe', 'john@example.com', 'John', 'Doe');

if (result.success) {
    console.log('User created:', result.data);
} else {
    console.error('Error:', result.error);
}
```

## Compiling TypeScript

To compile the TypeScript files, you need TypeScript installed:

```bash
npm install -g typescript
```

Then compile using the config file:

```bash
tsc --project ../config/tsconfig.json
```

Or compile individual files:

```bash
tsc types.ts
tsc user-service.ts
```

## Type Checking

TypeScript provides excellent type checking. Try modifying the code and running the compiler to see type errors:

```bash
tsc --noEmit user-service.ts
```
