const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const cors = require('cors');

const port = 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

MongoClient.connect(db.url, { useUnifiedTopology: true }, (err, database) => {
    if (err) return console.log(err)
    require('./app/routes')(app, database.db('Cluster0'));
    app.listen(port, () => {
      console.log('We are live on ' + port);
    });               
  })