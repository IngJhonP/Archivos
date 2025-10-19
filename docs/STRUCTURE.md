# Project Structure

This repository contains sample files organized by language and purpose, designed to work well with GitHub Copilot.

## Directory Structure

```
Archivos/
├── python/              # Python example files
│   ├── calculator.py    # Basic calculator class
│   └── data_processor.py # Data processing utilities
├── javascript/          # JavaScript example files
│   ├── utils.js         # String and general utilities
│   └── array-helpers.js # Array manipulation functions
├── typescript/          # TypeScript example files
│   ├── types.ts         # Type definitions and interfaces
│   └── user-service.ts  # User service class
├── html/                # HTML example files
│   └── index.html       # Sample web page
├── css/                 # CSS example files
│   └── styles.css       # Stylesheet for HTML page
├── config/              # Configuration files
│   ├── package.json     # NPM package configuration
│   ├── tsconfig.json    # TypeScript configuration
│   ├── workflow.yml     # GitHub Actions workflow
│   └── .env.example     # Environment variables template
├── docs/                # Documentation
│   ├── PYTHON_GUIDE.md  # Python guide
│   ├── JAVASCRIPT_GUIDE.md # JavaScript guide
│   └── TYPESCRIPT_GUIDE.md # TypeScript guide
└── examples/            # Additional examples
    ├── animals.py       # OOP example in Python
    └── async-example.js # Async/await example
```

## Usage

Each directory contains working code examples that can be executed or imported:

### Python
```bash
python python/calculator.py
python python/data_processor.py
python examples/animals.py
```

### JavaScript/Node.js
```bash
node javascript/utils.js
node javascript/array-helpers.js
node examples/async-example.js
```

### TypeScript
```bash
# Install TypeScript first
npm install -g typescript

# Compile TypeScript files
tsc --project config/tsconfig.json
```

### HTML/CSS
Open `html/index.html` in a web browser to view the sample web page.

## Features

- **Multiple Languages**: Examples in Python, JavaScript, TypeScript, HTML, and CSS
- **Well-documented**: Clear comments and docstrings throughout
- **Practical Examples**: Real-world utility functions and patterns
- **Configuration Files**: Sample configs for various tools
- **Comprehensive Documentation**: Detailed guides for each language

## GitHub Copilot Tips

These files are designed to demonstrate GitHub Copilot's capabilities:

1. **Autocomplete**: Start typing function names and let Copilot suggest completions
2. **Documentation**: Add comments and Copilot will suggest docstrings
3. **Test Generation**: Copilot can help write tests for these functions
4. **Similar Patterns**: Use these as templates for similar functionality
5. **Code Translation**: Ask Copilot to convert between languages

## Contributing

Feel free to add more examples or improve existing ones. Keep the code:
- Well-documented
- Simple and educational
- Following best practices
- Compatible with GitHub Copilot

## License

MIT
