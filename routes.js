const express = require('express');
const { User } = require('./app/models/MainModels');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send('Welcome to the API of project AutoSafe!');
});

routes.post('/register', async (req, res) => {
    const user = await User.create(req.body);
    
    res.json(user);
});

routes.post('/login', async (req, res) => {
    const userFind = await User.findAll({
        attributes: ['name', 'password'],
        where: {
            name: req.body.name,
            password: req.body.password
        }
    });

    res.json(userFind);
});

routes.get('/users', (req, res) => {}); //Listar todos
routes.post('/users', (req, res) => {}); // Criar
routes.get('/users/:id', (req, res) => {}); //Buscar
routes.put('/users/:id', (req, res) => {}); //Editar
routes.delete('/users/:id', (req, res) => {}); //Deletar

module.exports = routes;