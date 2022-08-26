const express = require('express');
const router = express.Router();

const nodeController = require('./controllers/nodeController')
router.get('/ping', nodeController.ping);

router.get('/notes', nodeController.all);
router.get('/note/:id', nodeController.one);
router.post('/node', nodeController.new);
router.put('/note/:id', nodeController.edit);
router.delete('/note/:id', nodeController.delete);

// GET api/notes -> pega todas as notas (id, title)
// POST api/notes/123 -> pega informações de uma nota
// POST api/note -> adiciona uma nova nota
// PUT api/note/123 -> altera uma nota
// DELETE api/note/123 -> deleta uma nota







module.exports = router;