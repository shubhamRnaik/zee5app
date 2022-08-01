// config is used to init all library 
const {app ,listen,engine,express,connect} = require('./config')// calling Router from router file 
const Router = require('./Routes')
const {sqldatabase,connection} = require('./Model/mysql')
const URL = 'mongodb://localhost:27017/ZeeApp'

connect(URL,(err)=>{
    if(err) throw err;
    console.log("mongo db server is connected successfuly");
})

// sql connection 
// connection.connect((err)=>{
//     if(err) throw err;
//     connection.query('CREATE DATABASE newtry',(err)=>{
//         if(err) throw err;
//         console.log(" successfully sqlserver created");
//     })
// })
// sqldatabase() // creating sql connection 
app.use(express.urlencoded({extended:true}))




var mysql = require('mysql')



app.engine('handlebars',engine())// register the view with server 
app.set('view engine','handlebars')
app.use("/product",Router) //register the router with server 













// used to listen to port
listen(process.env.PORT||6000)















