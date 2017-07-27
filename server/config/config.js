// get the current environment
const env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  // get the envirnment's key-values
  const config = require('./config.json');

  const envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    // store value in process.env.value
    process.env[key] = envConfig[key];
  });
}
