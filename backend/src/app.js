const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const {errors} = require('celebrate')

const app = express();

app.use(cors(/*{
    origin: 'http://meuapp.com' //endereço que pode acessar a aplicação
}*/));
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

