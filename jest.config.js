module.exports = {
  verbose: true,
  rootDir: '.',
  roots: ["<rootDir>/app"],
  projects: ['app/**/*'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'ts-jest',
  injectGlobals: true,
  testEnvironment: 'node',
  errorOnDeprecated: true,
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: '<rootDir>/__coverage__',
  collectCoverageFrom: ['**/*.{ts,tsx,js,jsx}'],
  coveragePathIgnorePatterns: [
    'jest.config.js',
    '*.stories.{js,ts}',
    '/node_modules/',
    '/dist/',
  ],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 55,
      functions: 62,
      lines: 60,
    },
  },
  // moduleNameMapper: {
  //   '^@v/(.*)$': '<rootDir>/packages/$1/'
  // },
  testPathIgnorePatterns: [
    '/node_modules/',
    '*.stories.{js,jsx,ts,tsx}',
  ],

  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  // globals: {
  //   "ts-jest": {
  //     isolatedModules: true,
  //   },
  // },
  setupFilesAfterEnv: [
    // "@testing-library/react/cleanup-after-each",
    "@testing-library/jest-dom/extend-expect"
  ],
};
