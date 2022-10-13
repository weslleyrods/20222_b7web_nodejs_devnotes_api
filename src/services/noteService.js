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
                resolve(res); 
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
    },
    add: (title, body)=>{
        return new Promise((resolve, reject)=>{
            db.query('INSERT INTO notes (title, body) VALUES (?, ?)', [title, body], 
                (err, result)=>{
                    if(err){
                        reject(err);
                        return;
                    }
                //console.log(result)
                resolve(result.insertId);
            })
        })
    },
    update:(id, title, body)=>{
        return new Promise((resolve, reject)=>{
            db.query('UPDATE notes SET title = ?, body = ? WHERE id = ?',[title, body, id],
                (err, result)=>{
                    if(err){
                        reject(err);
                        return;
                    }
                    resolve(result)
                }
            )
        })
    },
    delete: (id)=>{
        return new Promise((resolve, reject)=>{
            db.query('DELETE FROM notes WHERE id = ?',[id],
            (err, result)=>{
                if(err){
                    reject(err);
                    return
                }
                resolve(result)
            })
        })
    }
};