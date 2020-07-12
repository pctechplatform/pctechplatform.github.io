module.exports = {
  transform: {
    '^.+\\.(js|ts|tsx)?$': '<rootDir>/jest-preprocess.js',
  },
  testPathIgnorePatterns: ['node_modules', '\\.cache', '<rootDir>.*/public'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  setupFilesAfterEnv: ['<rootDir>/setup-test-env.js'],
};