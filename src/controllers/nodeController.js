const nodeService = require('../services/nodeService');

module.exports = {
    ping: (req, res)=>{
        res.json({pong: true});
    }
};

