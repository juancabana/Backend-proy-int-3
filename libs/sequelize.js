import { Sequelize } from 'sequelize';
import config from '../config/config.js';
import { setupModels } from './../db/models/index.js';

const DBUSER = encodeURIComponent(config.dbUser);
const DBPASSWORD = encodeURIComponent(config.dbPassword);
const DBHOST = encodeURIComponent(config.dbHost);
const DBPORT = encodeURIComponent(config.dbPort);
const DBNAME = encodeURIComponent(config.dbName);
const URI = `mysql://${DBUSER}:${DBPASSWORD}@${DBHOST}:${DBPORT}/${DBNAME}`;

// Pool and sequelize (ORM)
const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: true,
});
setupModels(sequelize);
sequelize.sync();

// module.exports = sequelize;
export default sequelize;
