# eslint-config

default config for my ts-projects

## Installation
1. Install dependencies
    ```shell
    yarn add --dev eslint prettier typescript @rweich/eslint-config
    ```

1. Configure
    1. either add the config to your `.eslintrc.js`:
        ```javascript
        module.exports = {
          extends: "@rweich",
          rules: {
            // Additional, per-project rules...
          }
        };
        ```
    1. or add it to your `package.json`:
        ```json
        {
          "eslintConfig": {
            "extends": "@rweich"
          }
        }
        ```

1. (optional) add the two following scripts to your `package.json` to run the linter manually:
    ```json
    {
      "scripts": {
        "lint": "eslint ./src/**/*.ts",
        "lint-tests": "eslint test/**/*.ts"
      }
    }
    ```
