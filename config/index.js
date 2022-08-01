const express = require('express')
const app = express()
const router = express.Router()
const {engine} = require('express-handlebars')
const {Schema,connect,model} = require('mongoose')
require('dotenv').config()


// let urlencoded = function(data){
//     express.urlencoded({extended:data})
// }

let listen = function(port){
    app.listen(port,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(` user is working on port ${process.env.PORT}`);
        }
    })
}




module.exports = {app,listen,engine,router,express ,Schema,connect,model}