// Content package main entry point
const content = require('./data/content.json');

module.exports = {
  getContent: (language = 'en') => {
    return content[language] || content.en;
  },
  getAllContent: () => content,
  getSupportedLanguages: () => Object.keys(content),
  version: require('./package.json').version
};