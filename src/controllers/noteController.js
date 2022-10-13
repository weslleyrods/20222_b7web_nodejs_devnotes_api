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
    new: async(req, res)=>{
        let json = {err:'', result:{}}

        let title = req.body.title;
        let body = req.body.body;

        if(title && body){
            let noteId = await noteService.add(title, body);

            json.result ={
                id: noteId,
                title,
                body
            };
        }else{
            json.err ='Campos não enviados';
        }
        res.json(json)

    },
    edit: async()=>{

    },
    delete: async()=>{

    }
};

