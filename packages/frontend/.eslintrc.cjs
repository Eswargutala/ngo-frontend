module.exports = {
  extends: ['next/core-web-vitals', '../../.eslintrc.js'],
  rules: {
    // Figma-generated code may have unused vars - downgrade to warn
    '@typescript-eslint/no-unused-vars': 'warn',
    // Figma-generated JSX may contain raw quotes/apostrophes in text content
    'react/no-unescaped-entities': 'off',
    // Figma-generated components use <img> directly
    '@next/next/no-img-element': 'warn',
  },
};
