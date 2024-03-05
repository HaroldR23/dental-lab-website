import type {Config} from 'jest';
// import {defaults} from 'jest-config';

const config: Config = {
  verbose: true,
  // moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    //
  },
  preset: "ts-jest",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],

};

export default config;

// export default {
//   preset: "ts-jest",
//   testEnvironment: "jest-environment-jsdom",
//   verbose: true,
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//     // process `*.tsx` files with `ts-jest`
//   },
//   moduleNameMapper: {
//     "\\.(gif|ttf|eot|svg|png)$": "jest-transform-stub",
//   },
//   setupFilesAfterEnv: ["@testing-library/jest-dom"],
// };
