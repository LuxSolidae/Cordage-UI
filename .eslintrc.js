require('@babel/register');

module.exports = {
  "root": true,
  "plugins": [
    "react-app",
    "flowtype",
    "react-hooks",
    "import"
  ],
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended",
  ],
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "mocha": true
  },
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": false,
    "codeFrame": false
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    },
    "import/resolver": {
      "webpack": {
        "config": "./config/webpack.config.js"
      }
    },
  },
  "rules": {
    "class-methods-use-this": [0, {
      "exceptMethods": []
    }],
    "import/prefer-default-export": [0],
    "jsx-quotes": [1, "prefer-single"],
    "jsx-a11y/label-has-for": [1, {
      "components": ["Label"],
      "required": {
        "every": ["nesting", "id"]
      },
      "allowChildren": true,
    }],
    "jsx-a11y/no-static-element-interactions": [0],
    "linebreak-style": [0, "unix"],
    "no-nested-ternary": [0],
    "react/jsx-one-expression-per-line": [0],
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
    "react/jsx-max-props-per-line": [1, {
      "maximum": 2,
      "when": "multiline"
    }],
    "react/no-array-index-key": [0],
    "react/prefer-stateless-function": [0, {}],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "require-jsdoc": ["error", {
      "require": {
        "FunctionDeclaration": false,
        "MethodDefinition": false,
        "ClassDeclaration": false
      }
    }],
    "valid-jsdoc": ["error", {
      "requireReturn": true,
      "requireReturnType": true,
      "requireParamDescription": true,
      "requireReturnDescription": true
    }]
  }
}
