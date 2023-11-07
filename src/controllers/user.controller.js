const userModel = require("../models/user.model")


const createUser = async function(req, res){
    try {
        let data = req.body;
        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, error: "Please enter details" });

        let {firstName,lastName,mobileNumber,vechileType,vechileFuelType,fare,vechileSeater,vechileAc,photos,extraInfo}=data

        if(!firstName || firstName=="")return res.status(400).send({status:false,error:"firstName is required"})

        if(!lastName || lastName=="")return res.status(400).send({status:false,error:"lastName is required"})

        if(!mobileNumber || mobileNumber=="")return res.status(400).send({status:false,error:"mobileNumber is required"})

        if(!fare || fare=="")return res.status(400).send({status:false,error:"fare is required"})

        if(!extraInfo || extraInfo=="")return res.status(400).send({status:false,error:"extraInfo is required"})

        if(!vechileType ||vechileType=="")return res.Status(400).send({status:false, error:"provide vechileType"})

        if(!["seater", "cargoVehicle"].includes(vechileType))return res.status(400).send({status:false, error:"vechileType should be from [seater,cargoVehicle]"})
        
        if(!vechileFuelType ||vechileFuelType=="")return res.Status(400).send({status:false, error:"provide vechileFuelType"})
        if(!["petrol", "diesel"].includes(vechileFuelType))return res.status(400).send({status:false, error:"vechileFuelType should be from [petrol,diesel]"})
        
        if(!vechileSeater ||vechileSeater=="")return res.Status(400).send({status:false, error:"provide vechileSeater"})
        if(!["swift","ertiga","toyataInnova","bolero","traxCruiser","forceTempoTraveller",].includes(vechileSeater))return res.status(400).send({status:false, error:"vechileSeater should be from [Mr,Mrs,Miss]"})

        if(!vechileAc ||vechileAc=="")return res.Status(400).send({status:false, error:"provide vechileAc"})
        if(!["ac","nonAc"].includes(vechileAc))return res.status(400).send({status:false, error:"vechileAc should be from [ac,nonAc]"})

        if(!photos ||photos=="")return res.Status(400).send({status:false, error:"provide photos"})

        // if(photos){

        // }

        let savedData = await userModel.create(data);
        res.status(201).send({ status: true, data: savedData });
    
      } catch (error) {
        console.log(error);
        res.status(500).send({status:false, error: error.message});
      }
}

const getUser = async function(req,res){
  try{
    let findData = await userModel.find()
    
    if (findData.length==0) {
      return res.status(404).send({status:false, error: "no data found" })
    }
    return res.status(200).send({status:true, data: findData })

  }catch(error){
    res.status(500).send({status:false, error: error.message})
  }
}



module.exports.createUser = createUser
module.exports.getUser= getUser