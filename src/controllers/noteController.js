const noteService = require('../services/noteService');

module.exports = {
    ping: (req, res)=>{
        res.json({pong: true});
    },
    all: async (req, res)=>{
        let json = {err:'', result:[]};
        let notes = await noteService.getAll();
        
        for(let i in notes){
            json.result.push({
                id: notes[i].id,
                title: notes[i].title
            });
        }

        res.json(json)
    },
    one: async(req, res)=>{
        let json = {err: '', result:{}}
        let id = req.params.id;
        let note = await noteService.findById(id);

        if(note){
            json.result = note;
        }

        res.json(json);
    },
    new: async()=>{

    },
    edit: async()=>{

    },
    delete: async()=>{

    }
};

