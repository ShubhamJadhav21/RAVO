import React, { useState, useEffect } from "react";
import style from "./VehicleComponent.module.css";

export default function VehicleComponent() {
  const [vehicleData, setVehicleData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setVehicleData(result.data); // Update the state directly with the result
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  return (
    <div className={style.wrapper}>
      {vehicleData.map((vehicle) => (
        <div className={style.vehicleData_wrapper} key={vehicle._id}>
          <img
            src={vehicle.selectedImages[0]} // Assuming the first image is used
            alt="vehicleImage"
            className={style.vehicle_img}
          />
          <span className={style.owner}>Owner - {vehicle.firstName}</span>
          <span className={style.vehicle_name}>
            {vehicle.selectedSeaterVehicle ||
              vehicle.selectedCargoVehicle ||
              vehicle.notName}
          </span>
          <div className={style.location}>
            <span>{vehicle.town_taluka}</span>,<span>{vehicle.district}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
