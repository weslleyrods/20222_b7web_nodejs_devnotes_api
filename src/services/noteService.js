//DAO

const db = require('../db');


module.exports = {
    
    getAll: ()=>{
        return new Promise((resolve, reject)=>{
            db.query('SELECT * FROM notes', (err, res)=>{
                if(err){
                    reject(err); 
                    return;
                }
                (resolve);
            });
        });
    }, 
    findById: (id)=>{
        return new Promise((resolve, reject)=>{
            db.query(`SELECT * FROM notes WHERE id = ${id}`, (err, res)=>{
                if(err){
                    reject(err); 
                    return;
                }
                resolve(res);  
            })
        })
    }

    

};