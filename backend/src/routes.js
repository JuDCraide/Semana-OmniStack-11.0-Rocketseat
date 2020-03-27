const express = require('express');

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes =  express.Router();

/**
 * Revisões:
 * 
 *  Tipos de Parametros:
 *   Query Params: Parâmetros nomeados enviados na rota após o '?' Ex: .../users?id=1&nome=Diego
 *   Route Params: Parâmetros usado para identificar recursos  Ex: .../user/1
 *   Request Body: Corpo da requisição, usado criasr ou alterar recursos Ex: Body-tipo JSON {"id":"1", "nome":"Diego"}
 *   Headers: Contexto da requisição
 * 
 *  Como usar o banco: 
 *   Driver: SELECT * FROM users
 *   Query Builder: table('user').select('*').where() -> vamos usar knex, com o banco SQLite
*/

routes.post('/session',SessionController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;