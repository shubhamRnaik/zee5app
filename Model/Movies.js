const {Schema,model} = require( "../config") 


const Movieschema = new Schema({
    moviename:{
        type:'string',
        required:'true'
    },
    year:{
        type:'number',
        required:'true'
    },
    rating:{
        type:'number',
        required:'true',
        
    }


},{timestamps:true})


module.exports = model("movies",Movieschema)