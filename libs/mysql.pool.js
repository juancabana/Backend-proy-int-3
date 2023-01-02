import mysql from 'mysql';

const conection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'Password123#@!',

});

conection.connect();

conection.query('SELECT * FROM cosco.Post;', (err, rows, fields) => {
  if (err) throw err;
  console.log(rows);
})


conection.end


export default conection;
