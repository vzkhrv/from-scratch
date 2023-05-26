module.exports = {
    // preset: "ts-jest",
    // testEnvironment: "jsdom",
    preset: './preset.js',
    roots: [ 'spec' ],
    transform: {
      "^.+\\.(ts|tsx|js|jsx)$": "ts-jest"
    },
    transformIgnorePatterns: ["node_modules"],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
      '\\.(css|less|png)$': '<rootDir>/spec/__mocks__/styleMock.js',
      'src(.*)$': '<rootDir>/src$1'
    }
};