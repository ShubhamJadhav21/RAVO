import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./VehiclesDetails.module.css";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { TbAirConditioning } from "react-icons/tb";

const VehiclesDetails = () => {
  const { _id } = useParams();
  const [vehicleDetails, setVehicleDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${_id}`)
      .then((response) => response.json())
      .then((result) => {
        setVehicleDetails(result.data);
        console.log(result.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching vehicle details", error);
        setLoading(false);
      });
  }, [_id]);

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % vehicleDetails.selectedImages.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + vehicleDetails.selectedImages.length) %
        vehicleDetails.selectedImages.length
    );
  };

  return (
    <div className={style.vehicledetails_wrapper}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className={style.vehicle_photos}>
            <span className={style.arrow} onClick={handlePrevImage}>
              <MdArrowBackIos />
            </span>
            <img
              src={vehicleDetails.selectedImages[currentImageIndex]}
              alt="vehicles images"
            />
            
            <span className={style.arrow} onClick={handleNextImage}>
              <MdArrowForwardIos />
            </span>
          </div>
          <div className={style.vehicle_details}>
            <div className={style.name}>
              <h1>
                {vehicleDetails.selectedSeaterVehicle ||
                  vehicleDetails.selectedCargoVehicle ||
                  vehicleDetails.notName}
              </h1>
              <div className={style.fuel}>
                <span>
                  <BsFillFuelPumpFill />
                </span>
                <span>{vehicleDetails.fuel}</span>
              </div>
            </div>
            <div className={style.overview}>
              <div className={style.overview_text}>Overview</div>
              <hr />
              <div className={style.cooling}>
                <div className={style.ac}>
                  <span className={style.ac_icon}>
                    <TbAirConditioning />
                  </span>
                  <div>
                    <div>AC Status</div>
                    <div className={style.ac_status}>
                      {vehicleDetails.acStatus}
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.vehicle_location}>
                <span className={style.location_icon}>
                  <CiLocationOn />
                </span>
                <div>
                <div className={style.location_text}>Location</div>
                <div className={style.area}>
                  {vehicleDetails.town_taluka},
                  <span>{vehicleDetails.district}</span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehiclesDetails;