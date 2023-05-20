const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const PORT = 3001;
const app = express();

app.use(routes);

//connect to the database & then run the server
sequelize.sync({}).then(() => {
    app.listen(PORT, () => {
        console.log("GoodBye");
})

})