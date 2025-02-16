module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "ENV": true
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        // "indent": [
        //   "error",
        //   4
        // ],
        "linebreak-style": [
            0,
          "error",
          "unix"
        ],
				"quotes":0
        // "quotes": [
        //   "error",
        //   "single"
        // ],
        // "semi": [
        //   "error",
        //   "always"
        // ]
    }
};