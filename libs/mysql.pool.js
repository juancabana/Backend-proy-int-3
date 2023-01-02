import mysql from 'mysql';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: 3306,
  database: 'cosco',
  password: 'Password123#@!',

});

// conection.connect();

pool.query('SELECT * FROM cosco.User;', (err, rows, fields) => {
  if (err) throw err;
  console.log(rows);
})


// conection.end();


export default pool;
