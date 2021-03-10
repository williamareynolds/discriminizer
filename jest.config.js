/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json'
    }
  }
};
