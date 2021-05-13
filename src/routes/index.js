const { Router } = require('express')

const UserController = require('../controllers/UserController')

const routes = Router()

routes.get('/' ,(req, res) => {
    res.send('Olá Mundo')
})

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUsers)

routes.get('/user/:id')

routes.post ('/login')

routes.post('/products/:user_id')
routes.get('/products/user_id')
routes.patch('/products/:user_id/:product_id')
routes.delete('/products/:user_id/:product_id')

routes.get('products/')
routes.delete('/products/:product_id')

routes.post('/cart/:user_id')
routes.get('/cart/:user_id')

routes.get('/cart/:cart_id')

module.exports = routes
