const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: { type: String,},
    lastName: { type: String,},
    mobileNumber: { type: Number,},
    state:{type: String,},
    district:{type: String,},
    taluka:{type: String,},
    vechileType: {
      type: String,
      enum: ["seater", "cargoVehicle"],
      required: true,
    },
    notInList:{
      type:String,
    },
    vechileFuelType: {
      type: String,
      enum: ["petrol", "diesel"],
      required: true,
    },
    fare: { type: String,},
    vechileSeater: {
      type: String,
      enum: [
        "swift",
        "ertiga",
        "toyataInnova",
        "bolero",
        "traxCruiser",
        "forceTempoTraveller",
      ],
      required: true,
    },
    vechileAcStatus: { type: String,enum:["ac","nonAc"], },
    photos: [
      {
        url: { type: String,},
      },
    ],
    vechileExtraInfo: { type: String },
  },
  {
    timestamps: true,
  }
);

const userData = mongoose.model("userData", userSchema);

module.exports = userData;
