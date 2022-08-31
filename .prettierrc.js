module.exports = {
  arrowParens: "always",
  bracketSpacing: true,
  embeddedLanguageFormatting: "off",
  endOfLine: "auto",
  jsxSingleQuote: true,
  printWidth: 120,
  quoteProps: "preserve",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,

  overrides: [
    {
      files: ["**/*.css", "**/*.scss", "**/*.html"],
      options: {
        singleQuote: false
      }
    }
  ]
}
