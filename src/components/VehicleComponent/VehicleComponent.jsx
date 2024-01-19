import React, { useState, useEffect } from "react";
import style from "./VehicleComponent.module.css";
import { Link } from "react-router-dom";
import Loader from "../loader/Loader";
import Footer from "../Footer/Footer";
import AdSkeleton from "../AdSkeleton/AdSkeleton";

export default function VehicleComponent() {
  const [vehicleData, setVehicleData] = useState([]);
  const [loading, setLoading] = useState(true);

  function shuffleArray(array) {
    // Fisher-Yates shuffle algorithm
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://ravoai.onrender.com/users");
        const result = await response.json();

        // Shuffle the data array randomly
        const shuffledData = shuffleArray(result.data);
           console.log(shuffledData);
        setVehicleData(shuffledData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // The empty dependency array ensures the effect runs only once on mount
  const skeletonCount = 40;

  return (
    <>
      <div className={style.wrapper}>
        {loading ? (
          <div className={style.skeleton}>
             {Array.from({ length: skeletonCount }).map((_, index) => (
              <AdSkeleton key={index} />
            ))}
          </div>
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

      {/* <Footer/> */}
    </>
  );
}
