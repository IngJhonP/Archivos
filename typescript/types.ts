/**
 * Common TypeScript type definitions and interfaces
 */

// User interface
export interface User {
    id: number;
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
    createdAt: Date;
    updatedAt: Date;
}

// Product interface
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    inStock: boolean;
    tags: string[];
}

// API Response wrapper
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

// Pagination interface
export interface Pagination {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
}

// Paginated response
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
    pagination: Pagination;
}

// Common enums
export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
    MODERATOR = 'moderator',
    GUEST = 'guest'
}

export enum OrderStatus {
    PENDING = 'pending',
    PROCESSING = 'processing',
    SHIPPED = 'shipped',
    DELIVERED = 'delivered',
    CANCELLED = 'cancelled'
}

// Type aliases
export type ID = string | number;
export type Timestamp = number | Date;
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;

// Utility types
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
};
