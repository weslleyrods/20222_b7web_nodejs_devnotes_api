const noteService = require('../services/noteService');

module.exports = {
    ping: (req, res)=>{
        res.json({pong: true});
    },
    all: async (req, res)=>{
        let json = {err:'', res:[]};
        let notes = await noteService.getAll();
        
        for(let i in notes){
            json.res.push({
                id: notes[i].id,
                title: notes[i].title
            });
        }

        res.json(json)
    },
    one: ()=>{

    },
    new: ()=>{

    },
    edit: ()=>{

    },
    delete: ()=>{

    }
};

