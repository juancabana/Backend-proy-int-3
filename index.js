import express from 'express';
import router from './routes/index.router.js';
import {
  errorHandler,
  logErrors,
  boomErrorHandler,
} from './middlewares/error.handler.js';
import { checkAPIKey } from './middlewares/auth.handler.js';

const app = express();
const port = 3005;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.listen(port, () => {
  console.log(`Aplicación corriendo en el puerto ${port}`);
});

app.get('/', checkAPIKey, (req, res) => {
  res.send('Hello world');
});
import './utils/auth/index.js';
app.use('/', router);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
// app.use((req, res) => res.status(404).send('Not found'));
