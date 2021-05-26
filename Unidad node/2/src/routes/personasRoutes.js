const express = require('express');

const routes = express.Router();

const {listar, obtenerPersona, crear, editar, eliminar} = require('../controllers/personasController');

routes.get('/', listar);

routes.get('/:id', obtenerPersona)

routes.post('/', crear )

routes.put('/:id', editar)

routes.delete('/:id', eliminar)

module.exports = routes;