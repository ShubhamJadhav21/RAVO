import React, { useState, useEffect } from "react";
import style from "./VehicleComponent.module.css";
import { Link } from "react-router-dom";

export default function VehicleComponent() {
  const [vehicleData, setVehicleData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setVehicleData(result.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={style.wrapper}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        vehicleData.map((vehicle) => (
          <Link
            to={`/vehicle/${vehicle._id}`}
            className={style.vehicleData_wrapper}
            key={vehicle._id}
          >
            <img
              src={vehicle.selectedImages[0]}
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
              <span>{vehicle.town_taluka},</span>
              <span>{vehicle.district}</span>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}