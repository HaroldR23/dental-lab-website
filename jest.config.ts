import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
};

export default config;
