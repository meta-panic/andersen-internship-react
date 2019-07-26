module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "jest": true
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
    "react/prop-types": 0,
    "no-unused-expressions": ["error", { "allowTernary": true }],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-tabs": 0,
    "react/prefer-stateless-function": "off",
    "jsx-a11y/img-redundant-alt": "off",
    "react/destructuring-assignment": "off",
  }
};
