import express from 'express';
import router from './routes/index.router.js';

const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.listen(port, () => {
  console.log(`Aplicación corriendo en el puerto ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/', router);
app.use((req, res) => res.status(404).send('Not found'));
