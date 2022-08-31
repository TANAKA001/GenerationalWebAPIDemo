module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "react-app",
    "react-app/jest",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint", "prettier", "simple-import-sort"],
  settings: {
    react: {
      version: "detect", // React version. "detect" automatically picks the version you have installed.
    },
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "prettier/prettier": "warn",
    //    "react/jsx-uses-react": "error",
    //    "react/jsx-uses-vars": "error",
    "react/react-in-jsx-scope": "off",
    "no-duplicate-imports": "error",
  },
  overrides: [
    {
      files: ["**/*.stories.*"],
      rules: {
        "import/no-anonymous-default-export": "off",
      },
    },
  ],
};
