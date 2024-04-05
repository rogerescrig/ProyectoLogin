var express = require('express');
const { post, getTareas, getId, update, deleteId } = require ('../Controllers/TareasController');
var router = express.Router();

router.post('/post', post);
router.get('/get', getTareas);
router.get('/:id', getId);

router.put('/:id', update);
router.delete('/:id', deleteId);





module.exports = router;