module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "rules": {
    "func-names": ["error", "never"],
    "spaced-comment": ["error", "always"],
    "indent": ["error", 2],
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "no-unused-expressions": ["error", { "allowTernary": true }],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-tabs": 0,
    "react/prefer-stateless-function": "off",
  }
};
