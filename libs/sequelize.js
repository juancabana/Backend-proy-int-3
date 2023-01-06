import { Sequelize } from 'sequelize';
import config from '../config/config.js';
import { setupModels } from './../db/models/index.js';

const DBUSER = encodeURIComponent(config.user);
const DBPASSWORD = encodeURIComponent(config.password);
const DBHOST = encodeURIComponent(config.dbHost);
const DBPORT = encodeURIComponent(config.port);
const DBNAME = encodeURIComponent(config.database);
const URI = `mysql://${DBUSER}:${DBPASSWORD}@${DBHOST}:${DBPORT}/${DBNAME}`;

// Pool and sequelize (ORM)
const sequelize = new Sequelize(URI, {
  dialect: 'mysql',
  logging: true,
});
setupModels(sequelize);
sequelize.sync({force: true});


// module.exports = sequelize;
export default sequelize;
