var mysql = require('mysql')

let connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"tiger",
  
})
// let  sqldatabase = function (){
//      conn = mysql.createConnection(
//         {
//             host:"localhost",
//             user:"root",
//             password:"tiger",
          
//         }
//     );
    
//     conn.connect((err)=>{
//         if(err) throw err;
//         console.log(" database connected succefully")
//         conn.query("CREATE DATABASE newghk" ,(err)=>{
//             if(err) throw err;
//             console.log(" sql database generated")
//         })
//     })
// }


module.exports = {connection}