module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**',
    '!src/infra',
    '!src/app/docs/**',
    '!src/app/schema/**',
    '!src/app/routes/**',
    '!src/app/index.js',
    '!src/app/server.js'
  ],
  coverageProvider: 'babel',
  coverageDirectory: '__tests__/coverage',
};
