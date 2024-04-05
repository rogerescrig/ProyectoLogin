var express =  require('express');
const { register, login, getUsers, update } = require('../Controllers/UserController');
const {token} = require('../middleware/tokenMiddleware')
var router = express.Router();


router.post('/register', register);

router.post('/login', login);

router.get('/usuarios', token,getUsers);

router.put('/:id',update);


module.exports = router;
