const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

var log4js = require('log4js');
var config = require('config');
var config = require('config').get('App');

var dbHost = config.get('dbConfig.URI');

log4js.configure({
  appenders: {
    console: { type: 'console' },
    file: { type: 'file', filename: 'app.log' }
  },
  categories: {
    app: { appenders: ['file'], level: 'info' },
    default: { appenders: ['console'], level: 'info' }
  }
 });

var logger = log4js.getLogger('app');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(dbHost, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  logger.info("MongoDB database connection established successfully");

})

const usersRouter = require('./routes/users');

app.use('/users', usersRouter);

app.listen(port, () => {
    logger.info(`Server is running on port: ${port}`);

});