const express = require('express');
const router = express.Router();

const nodeController = require('./controllers/nodeController')
router.get('/ping', nodeController.ping);

module.exports = router;