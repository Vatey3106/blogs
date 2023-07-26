const con = require('../config/db');

const getAll = (req, res) => {
    con.query('SELECT * FROM `user`',(err,result) =>{
         if(err){
            console.log(err);
         }else{
            res.render('user/index', {result});
            // api res.json({result})
         }
    })
    
}

module.exports = {
    getAll
}