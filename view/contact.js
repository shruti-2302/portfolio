const express = require ("express");
const Router = express.Router();
const bodyParser = require('body-parser');
const contact= require('../controller/contact');
const app = express();


// Middleware to parse JSON requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//signup api

Router.post('/contact',contact.contact);

module.exports = Router;
