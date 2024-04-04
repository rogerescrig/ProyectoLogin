var express =  require('express');
const { register, login, getUsers, update } = require('../Controllers/UserController');
const Usuario = require('../Models/UserModel');
var router = express.Router();


router.post('/register', register);

router.post('/login', login);

router.get('/usuarios', getUsers);

router.put('/:id',update);


module.exports = router;
