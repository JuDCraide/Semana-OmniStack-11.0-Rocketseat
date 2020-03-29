const express = require('express');

const {celebrate, Segments, Joi} = require('celebrate');

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

routes.post('/session', SessionController.create)


routes.get('/ongs', OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.number().required().min(1000000000).max(99999999999),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);


routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);


routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    })
}), IncidentController.index);
routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentController.delete);

module.exports = routes;