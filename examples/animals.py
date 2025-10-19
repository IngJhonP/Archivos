"""
Example demonstrating class inheritance and object-oriented programming.
"""

class Animal:
    """Base class for all animals."""
    
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def make_sound(self):
        """Make a generic animal sound."""
        return "Some sound"
    
    def info(self):
        """Return information about the animal."""
        return f"{self.name} is a {self.species}"


class Dog(Animal):
    """Dog class inheriting from Animal."""
    
    def __init__(self, name, breed):
        super().__init__(name, "Dog")
        self.breed = breed
    
    def make_sound(self):
        """Dogs bark."""
        return "Woof! Woof!"
    
    def fetch(self):
        """Dogs can fetch."""
        return f"{self.name} is fetching the ball!"


class Cat(Animal):
    """Cat class inheriting from Animal."""
    
    def __init__(self, name, color):
        super().__init__(name, "Cat")
        self.color = color
    
    def make_sound(self):
        """Cats meow."""
        return "Meow!"
    
    def scratch(self):
        """Cats can scratch."""
        return f"{self.name} is scratching the furniture!"


# Example usage
if __name__ == "__main__":
    dog = Dog("Buddy", "Golden Retriever")
    cat = Cat("Whiskers", "Orange")
    
    print(dog.info())
    print(dog.make_sound())
    print(dog.fetch())
    print()
    print(cat.info())
    print(cat.make_sound())
    print(cat.scratch())
