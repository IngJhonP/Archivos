"""
File operations utility class for reading and writing files.
Demonstrates file handling patterns for GitHub Copilot.
"""

import os
import json
import csv
from datetime import datetime


class FileManager:
    """Utility class for file operations."""
    
    def __init__(self, base_path="."):
        """Initialize FileManager with a base path."""
        self.base_path = base_path
    
    def read_text_file(self, filename):
        """
        Read the contents of a text file.
        
        Args:
            filename: Name of the file to read
            
        Returns:
            str: Contents of the file
        """
        filepath = os.path.join(self.base_path, filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as file:
                return file.read()
        except FileNotFoundError:
            return f"Error: File '{filename}' not found"
        except Exception as e:
            return f"Error reading file: {str(e)}"
    
    def write_text_file(self, filename, content):
        """
        Write content to a text file.
        
        Args:
            filename: Name of the file to write
            content: Content to write to the file
            
        Returns:
            bool: True if successful, False otherwise
        """
        filepath = os.path.join(self.base_path, filename)
        try:
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(content)
            return True
        except Exception as e:
            print(f"Error writing file: {str(e)}")
            return False
    
    def append_to_file(self, filename, content):
        """
        Append content to an existing file.
        
        Args:
            filename: Name of the file
            content: Content to append
            
        Returns:
            bool: True if successful, False otherwise
        """
        filepath = os.path.join(self.base_path, filename)
        try:
            with open(filepath, 'a', encoding='utf-8') as file:
                file.write(content)
            return True
        except Exception as e:
            print(f"Error appending to file: {str(e)}")
            return False
    
    def read_json_file(self, filename):
        """
        Read and parse a JSON file.
        
        Args:
            filename: Name of the JSON file
            
        Returns:
            dict/list: Parsed JSON data
        """
        filepath = os.path.join(self.base_path, filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as file:
                return json.load(file)
        except FileNotFoundError:
            return {"error": f"File '{filename}' not found"}
        except json.JSONDecodeError:
            return {"error": "Invalid JSON format"}
        except Exception as e:
            return {"error": str(e)}
    
    def write_json_file(self, filename, data, indent=2):
        """
        Write data to a JSON file.
        
        Args:
            filename: Name of the JSON file
            data: Data to write (dict or list)
            indent: Indentation for pretty printing
            
        Returns:
            bool: True if successful, False otherwise
        """
        filepath = os.path.join(self.base_path, filename)
        try:
            with open(filepath, 'w', encoding='utf-8') as file:
                json.dump(data, file, indent=indent, ensure_ascii=False)
            return True
        except Exception as e:
            print(f"Error writing JSON file: {str(e)}")
            return False
    
    def read_csv_file(self, filename):
        """
        Read a CSV file and return rows as list of dictionaries.
        
        Args:
            filename: Name of the CSV file
            
        Returns:
            list: List of dictionaries representing rows
        """
        filepath = os.path.join(self.base_path, filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as file:
                reader = csv.DictReader(file)
                return list(reader)
        except FileNotFoundError:
            return [{"error": f"File '{filename}' not found"}]
        except Exception as e:
            return [{"error": str(e)}]
    
    def write_csv_file(self, filename, data, fieldnames=None):
        """
        Write data to a CSV file.
        
        Args:
            filename: Name of the CSV file
            data: List of dictionaries to write
            fieldnames: Optional list of field names
            
        Returns:
            bool: True if successful, False otherwise
        """
        if not data:
            return False
        
        filepath = os.path.join(self.base_path, filename)
        
        if fieldnames is None:
            fieldnames = list(data[0].keys())
        
        try:
            with open(filepath, 'w', newline='', encoding='utf-8') as file:
                writer = csv.DictWriter(file, fieldnames=fieldnames)
                writer.writeheader()
                writer.writerows(data)
            return True
        except Exception as e:
            print(f"Error writing CSV file: {str(e)}")
            return False
    
    def list_files(self, extension=None):
        """
        List all files in the base directory.
        
        Args:
            extension: Optional file extension to filter (e.g., '.txt')
            
        Returns:
            list: List of filenames
        """
        try:
            files = os.listdir(self.base_path)
            if extension:
                files = [f for f in files if f.endswith(extension)]
            return files
        except Exception as e:
            print(f"Error listing files: {str(e)}")
            return []
    
    def file_exists(self, filename):
        """
        Check if a file exists.
        
        Args:
            filename: Name of the file
            
        Returns:
            bool: True if file exists, False otherwise
        """
        filepath = os.path.join(self.base_path, filename)
        return os.path.isfile(filepath)
    
    def delete_file(self, filename):
        """
        Delete a file.
        
        Args:
            filename: Name of the file to delete
            
        Returns:
            bool: True if successful, False otherwise
        """
        filepath = os.path.join(self.base_path, filename)
        try:
            if os.path.isfile(filepath):
                os.remove(filepath)
                return True
            return False
        except Exception as e:
            print(f"Error deleting file: {str(e)}")
            return False


def example_usage():
    """Demonstrate FileManager usage."""
    print("=== File Manager Example ===\n")
    
    # Create a file manager for a temporary directory
    import tempfile
    temp_dir = tempfile.mkdtemp()
    fm = FileManager(temp_dir)
    
    # Write a text file
    print("1. Writing text file...")
    fm.write_text_file("example.txt", "Hello, GitHub Copilot!")
    print(f"   Content: {fm.read_text_file('example.txt')}")
    
    # Write a JSON file
    print("\n2. Writing JSON file...")
    data = {
        "name": "Sample Project",
        "version": "1.0.0",
        "created": datetime.now().isoformat()
    }
    fm.write_json_file("data.json", data)
    print(f"   Content: {fm.read_json_file('data.json')}")
    
    # Write a CSV file
    print("\n3. Writing CSV file...")
    csv_data = [
        {"id": 1, "name": "Alice", "age": 30},
        {"id": 2, "name": "Bob", "age": 25},
        {"id": 3, "name": "Charlie", "age": 35}
    ]
    fm.write_csv_file("users.csv", csv_data)
    print(f"   Content: {fm.read_csv_file('users.csv')}")
    
    # List files
    print(f"\n4. Files in directory: {fm.list_files()}")
    
    # Clean up
    print("\n5. Cleaning up temporary files...")
    for filename in fm.list_files():
        fm.delete_file(filename)
    os.rmdir(temp_dir)
    print("   Done!")


if __name__ == "__main__":
    example_usage()
