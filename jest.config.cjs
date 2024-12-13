module.exports = {
  rootDir: './',

  clearMocks: true,

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },

  // collectCoverage: true, don't collect coverage by default
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.{js,jsx,ts,tsx}',
  ],

  watchPathIgnorePatterns: [
    '/node_modules/',
    '/lib/',
    '/dist/',
    '/public/',
    '/coverage/',
    '/webpack/',
  ],

  testPathIgnorePatterns: [
    '/node_modules/',
    '/lib/',
    '/dist/',
    '/public/',
    '/coverage/',
    '/webpack/',
  ],

  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],

  testEnvironment: 'jsdom',

  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],

  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', // Use babel-jest for JS and TS files
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@mohantalachutla/*))',
    '\\.pnp\\.[^\\\/]+$',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
};