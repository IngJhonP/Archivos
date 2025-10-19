# Python Guide

This directory contains Python examples that demonstrate various programming concepts and utilities.

## Files

### calculator.py
A simple calculator class with basic arithmetic operations:
- Addition
- Subtraction
- Multiplication
- Division
- Power
- Square root

**Usage:**
```python
from calculator import Calculator

calc = Calculator()
result = calc.add(5, 3)
print(result)  # Output: 8
```

### data_processor.py
Utility functions for data processing:
- `filter_even_numbers()` - Filter even numbers from a list
- `sum_list()` - Calculate sum of numbers
- `average()` - Calculate average
- `find_max()` - Find maximum value
- `find_min()` - Find minimum value
- `remove_duplicates()` - Remove duplicate items
- `group_by_key()` - Group items by a key

**Usage:**
```python
from data_processor import filter_even_numbers, average

numbers = [1, 2, 3, 4, 5, 6]
even = filter_even_numbers(numbers)
avg = average(numbers)
```

## Running the Examples

You can run any Python file directly:

```bash
python calculator.py
python data_processor.py
```

## Requirements

- Python 3.6 or higher
- No external dependencies required
