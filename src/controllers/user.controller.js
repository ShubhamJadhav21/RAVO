const userModel = require("../models/user.model")
const cloudinary = require('cloudinary').v2;

 // Configuration  of "Cloudinary" //
 cloudinary.config({
    cloud_name: "ddraawvgd",
    api_key: 994722389161267,
    api_secret: "aMWYV3cdQ0UkSqZAfM8ec98OPto"
});

const createUser = async function(req, res){
    try {
        let data = req.body;
        if (Object.keys(data).length == 0) return res.status(400).send({ status: false, error: "Please enter details" });

        let {firstName,lastName,mobileNumber,vechileType,vechileFuelType,fare,vechileSeater,vechileAcStatus,photos,vechileExtraInfo}=data

        if(!firstName || firstName=="")return res.status(400).send({status:false,error:"firstName is required"})

        if(!state || state=="")return res.status(400).send({status:false,error:"state is required"})

        if(!district || district=="")return res.status(400).send({status:false,error:"district is required"})
        
        if(!taluka || taluka=="")return res.status(400).send({status:false,error:"taluka is required"})

        if(!lastName || lastName=="")return res.status(400).send({status:false,error:"lastName is required"})

        if(!mobileNumber || mobileNumber=="")return res.status(400).send({status:false,error:"mobileNumber is required"})

        if(!fare || fare=="")return res.status(400).send({status:false,error:"fare is required"})

        if(!vechileExtraInfo || vechileExtraInfo=="")return res.status(400).send({status:false,error:"vechileExtraInfo is required"})

        if(!vechileType ||vechileType=="")return res.Status(400).send({status:false, error:"provide vechileType"})

        if(!["seater", "cargoVehicle"].includes(vechileType))return res.status(400).send({status:false, error:"vechileType should be from [seater,cargoVehicle]"})
        
        if(!vechileFuelType ||vechileFuelType=="")return res.status(400).send({status:false, error:"provide vechileFuelType"})
        if(!["petrol", "diesel"].includes(vechileFuelType))return res.status(400).send({status:false, error:"vechileFuelType should be from [petrol,diesel]"})
        
        if(!vechileSeater ||vechileSeater=="")return res.status(400).send({status:false, error:"provide vechileSeater"})
        if(!["swift","ertiga","toyataInnova","bolero","traxCruiser","forceTempoTraveller",].includes(vechileSeater))return res.status(400).send({status:false, error:"vechileSeater should be from [Mr,Mrs,Miss]"})

        if(!vechileAcStatus ||vechileAcStatus=="")return res.status(400).send({status:false, error:"provide vechileAcStatus"})
        if(!["ac","nonAc"].includes(vechileAcStatus))return res.status(400).send({status:false, error:"vechileAcStatus should be from [ac,nonAc]"})

        if(!photos ||photos=="")return res.status(400).send({status:false, error:"provide photos"})
        // let cloudUrl
        // let imageUrl =[]
        console.log("hhh",photos.length);
        // if(photos){
        //     for(let i=0;i<photos.length;i++){
        //         cloudUrl =  await cloudinary.uploader.upload(photos[i].url,{public_id: Date.now()})  
        //         const {secure_url,public_id} = cloudUrl
        //        let obj ={
        //          url :secure_url,
        //          id : public_id
        //        }
        //         imageUrl.push(obj)
        //        //  console.log(cloudUrl);
        //      } 

        //     //  photos=[...imageUrl]
        //     // ddraawvgd cloud name
        //     // 994722389161267 api
        //     // aMWYV3cdQ0UkSqZAfM8ec98OPto secret       
        // }
        // photos=[...imageUrl]
        // console.log("test,,,,photos",photos);
        // return []
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
      return res.status(404).send({status:false, error: "No data found" })
    }
    return res.status(200).send({status:true, data: findData })

  }catch(error){
    res.status(500).send({status:false, error: error.message})
  }
}



module.exports.createUser = createUser
module.exports.getUser= getUser