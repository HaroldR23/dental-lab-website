import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "babel-jest",
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],

};

export default config;
