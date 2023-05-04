const express=require("express");
const bodyParser=require("body-parser")
const router=express.Router();

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({extended:false}))

const Package=require('../models/package')

//get all packages
router.get('/search/:destination/:travellers/:specialty', async(req, res)=>{
    console.log("inside node")
    console.log("req.body: "+req.params.destination+" req.body: "+req.params.specialty)
    const destinationInput=req.params.destination
    //const durationInput=req.params.duration
    const travellersInput=req.params.travellers
    const specialtyInput=req.params.specialty
    var query1 = { destination: destinationInput ,numTravelers:{$gte:travellersInput}}
    var query2 = { destination: destinationInput ,numTravelers:{$gte:travellersInput},specialty:specialtyInput};
    var query;
    if(specialtyInput==='undefined'){
        query=query1
    }
    else{
        query=query2
    }
    console.log("query", query);

   try{
        const packages=await Package.find(query)
        res.status(200).json({status:200, data:packages})
        console.log(packages)
   }catch(error){
        res.send("error occured: "+ error)
        console.log(error)
   }
})

//update records
// router.put('/update', async(req, res)=>{
    
//         // const id=req.query.id
//         // const destination=req.query.destination
//         const {id, destination}=req.query
//         console.log(id,destination)

//     try{
//         const response=await Package.findByIdAndUpdate(id,{destination:destination})
//         res.status(200).json({status:200, data:response})
//     }catch(error){
//         res.send("error occured: "+error)
//     }
// })

module.exports=router;








