import type {Config} from 'jest';
const COVERAGE_THRESHOLD = 80;

const config: Config = {
  verbose: true,
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/constants/**",
    '!src/**/*.d.ts'
  ],
  coverageDirectory: "coverage",
  coverageThreshold: {
    global: {
      branches: COVERAGE_THRESHOLD, 
      functions: COVERAGE_THRESHOLD, 
      lines: COVERAGE_THRESHOLD, 
      statements: COVERAGE_THRESHOLD 
    }
  }
};

export default config;
