module.exports = {
  coveragePathIgnorePatterns: [
    '<rootDir>/.github/',
    '<rootDir>/.storybook/',
    '.stories.',
    '.json',
  ],
  modulePathIgnorePatterns: ['<rootDir>/cypress/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  verbose: false,
};
