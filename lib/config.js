'use strict';

const fs     = require('fs');
const yaml   = require('js-yaml');

const assign = Object.assign;

const config = () => {
  const env = process.env.NODE_ENV || 'local';

  const global    = yaml.safeLoad(fs.readFileSync('./config/config.yml', 'utf8'));
  const envConfig = yaml.safeLoad(fs.readFileSync(`./config/config_${env}.yml`, 'utf8'));

 const db='abc';
  return assign(global, envConfig,db);
};

module.exports = config;
