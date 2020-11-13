const express = require('express')

const routes = express.Router()

const userController = require('./controllers/userController')

routes.get('/users', userController.list)
routes.post('/user', userController.create)
routes.get('/user', userController.view)
routes.post('/user_auth', userController.authenticate)

module.exports = routes
