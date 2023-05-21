const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const PORT = 3001;
const app = express();

// this is needed for post request
app.use(express.json());
app.use(express.urlencoded( { extended: true }))
//const models = require("./models");
app.use(routes);

//connect to the database & then run the server
sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => {
        console.log("GoodBye");
})

})