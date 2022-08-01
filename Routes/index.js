const {router} = require('../config')
const Movieschema = require("../Model/Movies") 
const {connection} = require("../Model/mysql")

router.get('/',(req,res)=>{
    res.render('Movies/createMovies')
    
})

router.post('/',async(req,res)=>{
    await Movieschema.create(req.body)
    console.log(req.body)
   res.end(" data fetched ")    
})

router.get("/all-movie",async (req,res)=>{
    let allMovies = await Movieschema.find({}).lean()
    res.render("Movies/allMovies" ,{allMovies})
})


router.get('/update/:id',async(req,res)=>{
    let updatedMovie = await Movieschema.findOne({_id:req.params.id}).lean()
    console.log(updatedMovie);
    res.render("Movies/updateMovie",{updatedMovie})
})




module.exports = router;