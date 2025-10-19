"""
Data processing utilities for working with lists and dictionaries.
"""

def filter_even_numbers(numbers):
    """Filter and return only even numbers from a list."""
    return [num for num in numbers if num % 2 == 0]


def sum_list(numbers):
    """Calculate the sum of all numbers in a list."""
    return sum(numbers)


def average(numbers):
    """Calculate the average of numbers in a list."""
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)


def find_max(numbers):
    """Find the maximum value in a list."""
    if not numbers:
        return None
    return max(numbers)


def find_min(numbers):
    """Find the minimum value in a list."""
    if not numbers:
        return None
    return min(numbers)


def remove_duplicates(items):
    """Remove duplicate items from a list while preserving order."""
    seen = set()
    result = []
    for item in items:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result


def group_by_key(items, key):
    """Group a list of dictionaries by a specific key."""
    groups = {}
    for item in items:
        if key in item:
            group_key = item[key]
            if group_key not in groups:
                groups[group_key] = []
            groups[group_key].append(item)
    return groups


# Example usage
if __name__ == "__main__":
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    print(f"Even numbers: {filter_even_numbers(numbers)}")
    print(f"Sum: {sum_list(numbers)}")
    print(f"Average: {average(numbers)}")
    print(f"Max: {find_max(numbers)}")
    print(f"Min: {find_min(numbers)}")
    
    items = [1, 2, 2, 3, 3, 3, 4, 5, 5]
    print(f"Without duplicates: {remove_duplicates(items)}")
