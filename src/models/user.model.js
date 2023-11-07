const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobileNumber: { type: Number, required: true },
    vechileType: {
      type: String,
      enum: ["seater", "cargoVehicle"],
      required: true,
    },
    vechileFuelType: {
      type: String,
      enum: ["petrol", "diesel"],
      required: true,
    },
    fare: { type: String, required: true },
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
    vechileAc: { type: String,enum:["ac","nonAc"], required: true  },
    photos: [
      {
        documentType: { type: String, required: true },
      },
    ],
    extraInfo: { type: String ,required: true },
  },
  {
    timestamps: true,
  }
);

const userData = mongoose.model("userData", userSchema);

module.exports = userData;
