"""
Simple calculator module with basic arithmetic operations.
Useful for demonstrating GitHub Copilot autocomplete features.
"""

class Calculator:
    """A simple calculator class with basic operations."""
    
    def add(self, a, b):
        """Add two numbers."""
        return a + b
    
    def subtract(self, a, b):
        """Subtract b from a."""
        return a - b
    
    def multiply(self, a, b):
        """Multiply two numbers."""
        return a * b
    
    def divide(self, a, b):
        """Divide a by b."""
        if b == 0:
            raise ValueError("Cannot divide by zero")
        return a / b
    
    def power(self, base, exponent):
        """Calculate base raised to the power of exponent."""
        return base ** exponent
    
    def square_root(self, n):
        """Calculate the square root of n."""
        if n < 0:
            raise ValueError("Cannot calculate square root of negative number")
        return n ** 0.5


def main():
    """Example usage of the Calculator class."""
    calc = Calculator()
    
    print(f"5 + 3 = {calc.add(5, 3)}")
    print(f"10 - 4 = {calc.subtract(10, 4)}")
    print(f"6 * 7 = {calc.multiply(6, 7)}")
    print(f"20 / 4 = {calc.divide(20, 4)}")
    print(f"2 ^ 8 = {calc.power(2, 8)}")
    print(f"√16 = {calc.square_root(16)}")


if __name__ == "__main__":
    main()
