module.exports = {
  preset: 'ts-jest',
  globals: {},
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest",
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  transformIgnorePatterns: ["<rootDir>/node_modules/(?!lodash-es)"],
  setupFilesAfterEnv: ["<rootDir>/test/unit/jestSetup.ts"]
}
