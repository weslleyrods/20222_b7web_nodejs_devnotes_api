const express = require('express');
const router = express.Router();

const noteController = require('./controllers/noteController')
router.get('/ping', noteController.ping);

router.get('/notes', noteController.all);
router.get('/note/:id', noteController.one);
router.post('/note', noteController.new);
router.put('/note/:id', noteController.edit);
router.delete('/note/:id', noteController.delete);

// GET api/notes -> pega todas as notas (id, title)
// POST api/notes/123 -> pega informações de uma nota
// POST api/note -> adiciona uma nova nota
// PUT api/note/123 -> altera uma nota
// DELETE api/note/123 -> deleta uma nota







module.exports = router;