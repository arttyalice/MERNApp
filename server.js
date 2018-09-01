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

//Serve Static assets if in production
if(process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server start on port ' + port));