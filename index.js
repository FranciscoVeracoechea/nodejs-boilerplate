// dependencies
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import session from 'express-session';
import connectMongo from 'connect-mongo';
// middlewares
import errorHandler from './middlewares/erroHandler';
// database connection
import mongooseConnection from './db/connection';

// settings
dotenv.config();
const MongoStore = connectMongo(session);
const isDev = process.env.NODE_ENV === 'development';
const app = express();
app.set('isDev', isDev);

app.use(helmet());
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));
app.use(session({
  secret: process.env.SECRET,
  // cookie: { secure: true },
  saveUninitialized: false,
  resave: true,
  store: new MongoStore({ mongooseConnection }),
}));

// error handler
app.use(errorHandler({ isDev }));

app.listen(process.env.NODE_PORT, (err) => {
  if (!err) {
    /* eslint-disable */
    console.log(`Server listening on ${process.env.APP_URL}`);
    /* eslint-enable */
  }
});
