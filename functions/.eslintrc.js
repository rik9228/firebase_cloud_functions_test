module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  rules: {
    "object-curly-spacing": 0,
    quotes: ["error", "double"],
    "no-unused-vars": 0,
  },
  parserOptions: {
    ecmaVersion: 8,
  },
};
