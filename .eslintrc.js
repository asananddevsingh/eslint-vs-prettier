module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // quotes: ['error', 'double'], //This will take the preference over extends rules.
    'dot-notation': ['error', { allowKeywords: true }],
    // "react/react-in-jsx-scope": 1
  },
  overrides: [
    {
      files: ['*.jsx', '*.js', '*.json', '*.yaml'],
    },
  ],
};
