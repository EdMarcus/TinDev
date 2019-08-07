const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const server = express();

mongoose.connect('mongodb+srv://edmarcus:Ed159mDB@tindev-9oc8a.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true}
);
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(6666);
