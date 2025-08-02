# Russian Translator Content

Content management repository for Russian Translation Services website.

## Structure

```
russian-translator-content/
├── package.json
├── index.js
├── README.md
└── data/
    └── content.json
```

## Usage

```javascript
const content = require('russian-translator-content');

// Get content for specific language
const englishContent = content.getContent('en');
const russianContent = content.getContent('ru');

// Get all content
const allContent = content.getAllContent();

// Get supported languages
const languages = content.getSupportedLanguages();
```

## Updating Content

1. Edit `data/content.json`
2. Commit changes: `git add . && git commit -m "Update content"`
3. Push to GitHub: `git push origin main`
4. Update version: `npm version patch`

## Installation

```bash
npm install git+https://github.com/yourusername/russian-translator-content.git
```