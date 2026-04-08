import antfu from "@antfu/eslint-config";

export default antfu(
  {
    type: "app",
    vue: true,
    typescript: true,
    formatters: true,
    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx,vue}"],
    rules: {
      "ts/no-redeclare": "off",
      "ts/consistent-type-definitions": ["error", "type"],
      "object-curly-newline": ["error", {
        multiline: true,
        minProperties: 1,
      }],
      "style/function-paren-newline": [
        "error",
        {
          minItems: 2,
        },
      ],
      "no-console": ["warn"],
      "antfu/no-top-level-await": ["off"],
      "node/prefer-global/process": ["off"],
      "node/no-process-env": ["error"],
      "perfectionist/sort-imports": [
        "error",
      ],
      "unicorn/filename-case": ["error", {
        case: "kebabCase",
        ignore: ["README.md"],
      }],
      "vue/max-attributes-per-line": ["error", {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      }],
    },
  },
  {
    files: ["src/shared/components/ui/**/*"],
    rules: {
      "unicorn/filename-case": "off",
    },
  },
  {
    files: ["**/*.vue"],
    rules: {
      "vue/max-attributes-per-line": ["error", {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      }],
    },
  },
);
