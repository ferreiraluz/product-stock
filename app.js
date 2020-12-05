const express = require("express");
const app = express();
const port =  8082;


// routes

    const routes = require("./src/routes/router");
    app.use(routes);
    
// database

// const models = require("./src/database/models");
    
// template engine 

    const handlebars = require("express-handlebars");
    app.engine("handlebars", handlebars({defaultLayout: 'main'}));
    app.set("view engine", "handlebars");


app.listen(port,  () => {
    console.log(`this server's running in the port ${port}`);
});


