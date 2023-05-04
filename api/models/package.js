const mongoose=require("mongoose")

// var Schema = mongoose.Schema,
//     ObjectId = Schema.ObjectId;
    
const packageSchema=new mongoose.Schema({
    //package_id:ObjectId,
    packageName:{
        type:String,
        required:true
    },
	destination:{
        type:String,
        required:true
    },
    specialty:{
        type:String,
        required:true
    },
	duration:{
        type:Number,
        required:true
    },
	numTravelers:{
        type:Number,
        required:true
    },
	departure_destination:{
        type:String,
        required:true
    },
	departure_time:{
        type:String,
        required:true
    },
	arrival_destination:{
        type:String,
        required:true
    },
	arrival_time:{
        type:String,
        required:true
    },
	airline:{
        type:String,
        required:true
    },
	flight_duration:{
        type:String,
        required:true
    },
	transit_state:{
        type:String,
        required:true
    },
	hotel_name:{
        type:String,
        required:true
    },
	rating:{
        type:Number,
        required:true
    },
	hotel_address:{
        type:String,
        required:true
    },
	facilities:{
        type:String,
        required:true
    },
	saving_price:{
        type:String,
        required:true
    },
	final_price:{
        type:Number,
        required:true
    }
}

,{ collection: 'PackageData' })

module.exports=mongoose.model('Package', packageSchema)