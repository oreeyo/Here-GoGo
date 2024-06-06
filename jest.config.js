module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    transform: {
      '^.+\\.(ts|tsx)$': 'babel-jest',
    },
    testMatch: [
      '**/?(*.)+(spec|test).(ts|tsx|js)',
    ],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  };
  