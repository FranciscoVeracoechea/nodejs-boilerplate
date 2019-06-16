// dependencies
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';


// settings
dotenv.config();
const isDev = process.env.NODE_ENV === 'development';
const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

// error handler
// app.use(errorHandler({ isDev }));

app.listen(process.env.NODE_PORT, (err) => {
  if (!err) {
    /* eslint-disable */
    console.log(`Server listening on ${process.env.APP_URL}`);
    /* eslint-enable */
  }
});
