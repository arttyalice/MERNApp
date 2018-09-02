const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const items = require('./routes/api/items');

const app = express();

//Body-Parser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoUri;

//Connect to mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDb Connect..."))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/items', items);

const port = 5000 || process.env.PORT;

app.listen(port, () => console.log('Server start on port ' + port));