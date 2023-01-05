import config from './../config/config'
const DBUSER = encodeURIComponent(config.user);
const DBPASSWORD = encodeURIComponent(config.password);
const DBHOST = encodeURIComponent(config.dbHost);
const DBPORT = encodeURIComponent(config.port);
const DBNAME = encodeURIComponent(config.dbName);
const URI = `mysql://${DBUSER}:${DBPASSWORD}@${DBHOST}:${DBPORT}/${DBNAME}`;

module.exports = {
  development: {
    url: URI,
    dialect: 'mysql',
  },
  production: {
    url: URI,
    dialect: 'mysql',
  },
};
