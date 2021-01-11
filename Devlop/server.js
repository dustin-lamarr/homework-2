const express = require('express');
const routes = require('./controllers');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

var dir = path.join(__dirname, 'public');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(dir));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => 
    console.log(`Now listening on port ${PORT}`));
});