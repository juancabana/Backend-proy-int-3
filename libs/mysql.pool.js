import mysql from 'mysql2';
// import config from '../config/config.js';
// // const {config} = require('./../config/config.js')

// const DBUSER = encodeURIComponent(config.dbUser);
// const DBPASWORD = encodeURIComponent(config.dbPassword);
// const DBHOST = encodeURIComponent(config.dbHost);
// const DBPORT = encodeURIComponent(config.dbPort);
// const DBNAME = encodeURIComponent(config.dbName);

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: 3306,
  database: 'cosco',
  password: 'Password123#@!',

});
// // const URI = `mysql://${USER}:${PASWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// const pool = mysql.createPool({
//   host: DBHOST,
//   user: DBUSER,
//   port: DBPORT,
//   database: DBNAME,
//   password: DBPASWORD,

// });
// conection.connect();

// pool.query('SELECT * FROM cosco.User;', (err, rows, fields) => {
//   if (err) throw err;
//   console.log(rows);
// })


// conection.end();


export default pool;



