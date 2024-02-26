import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // Indicates which environment to use for running tests
  testEnvironment: 'node',
  // An array of file extensions your modules use
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // A list of paths to directories that Jest should use to search for files in
  roots: ['<rootDir>/src'],
  // A list of paths to directories that Jest should use to search for test files in
  testMatch: ['<rootDir>/src/**/*.test.ts'],
  // Transform files before running them
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  extensionsToTreatAsEsm: ['.ts'],
  
};

export default config;