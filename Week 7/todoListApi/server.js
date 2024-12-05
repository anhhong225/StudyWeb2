const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Task = require('./api/models/todoListModel'),//created model loading here
    bodyParse = require('body-parser');

//mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:gemini2205@cluster0.fchh3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());

const routes = require('./api/routes/tpdoListRoutes'); //importing route
routes(app);//register the route

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);