import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./VehiclesDetails.module.css";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { TbAirConditioning } from "react-icons/tb";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { MdEventSeat } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import Loader from "../loader/Loader";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { GiPayMoney } from "react-icons/gi";
import PcSkeleton from '../AdSkeleton/PcSkeleton/PcSkeleton'

const VehiclesDetails = () => {
  const { _id } = useParams();
  const [vehicleDetails, setVehicleDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showButtons, setShowButtons] = useState(true);

  const navigate = useNavigate();
  const report = () => {
    navigate("/report");
  };

  useEffect(() => {
    fetch(`https://book-gadi.onrender.com/users/${_id}`)
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
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Adjust the value (e.g., 200) based on when you want the buttons to hide/show
      setShowButtons(scrollY < 320);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % vehicleDetails.selectedImages.length
    );
  };
  const handleChatInitiate = () => {
    const phoneNumber = vehicleDetails.mobile;

    // Form the WhatsApp URL with the phone number and a default message
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // Open the WhatsApp chat in a new tab or window
    window.open(whatsappUrl, "_blank");
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + vehicleDetails.selectedImages.length) %
        vehicleDetails.selectedImages.length
    );
  };
  const handleCallInitiate = () => {
    const phoneNumber = vehicleDetails.mobile;
    console.log("Calling phone number:", phoneNumber); // Log the phone number
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className={style.vehicledetails_wrapper}>
      {loading ? (
        <div>
          <PcSkeleton/>
        </div>
      ) : (
        <div>
          <div className={style.top_sec}>
            <div className={style.vehicle_photos}>
              <span className={style.arrow} onClick={handlePrevImage}>
                <MdArrowBackIos />
              </span>
              <img
                src={vehicleDetails.selectedImages[currentImageIndex]}
                alt="vehicles images"
              />

              <div className={style.progress_info}>
                {currentImageIndex + 1}/{vehicleDetails.selectedImages.length}
              </div>
              <span className={style.arrow} onClick={handleNextImage}>
                <MdArrowForwardIos />
              </span>
            </div>

            <div>
              <div className={style.pc_chat}>
                <div className={style.owner_name}>
                  <span>{vehicleDetails.firstName}</span>
                  <span>{vehicleDetails.lastName}</span>
                </div>
                <div className={style.chat} onClick={handleChatInitiate}>
                  Chat
                </div>
              </div>
            </div>
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
                    <div className={style.acs}>AC Status</div>
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
              <div className={style.vehicle_capacity}>
                {vehicleDetails.seat && (
                  <div className={style.capacity}>
                    <span className={style.seat_icon}>
                      <MdEventSeat />
                    </span>
                    <div>
                      <div className={style.seat_text}>Seat Capacity</div>
                      <span className={style.seat}>
                        {vehicleDetails.seat}
                        <span className={style.seats}>Seats</span>
                      </span>
                    </div>
                  </div>
                )}
                {vehicleDetails.fare && (
                  <div className={style.fares}>
                    <span className={style.fare_icon}>
                      <GiPayMoney />
                    </span>
                    <div>
                      <div className={style.fare_text}>Fare</div>
                      <span className={style.fare}>{vehicleDetails.fare}</span>
                    </div>
                  </div>
                )}
                {vehicleDetails.load && (
                  <div className={style.capacity}>
                    <span className={style.load_icon}>
                      <LiaTruckLoadingSolid />
                    </span>
                    <div>
                      <div className={style.load_text}> Load Capacity</div>

                      <span className={style.load}>{vehicleDetails.load}</span>
                    </div>
                  </div>
                )}
              </div>
              <hr />

              {vehicleDetails.desc && (
                <div className={style.description}>
                  <div className={style.des_heading}>Description</div>
                  <pre>{vehicleDetails.desc} </pre>
                </div>
              )}
            </div>
          </div>
          <div
            className={style.btn_sec}
            style={{ display: showButtons ? "flex" : "none" }}
          >
            <div className={style.btn} onClick={handleChatInitiate}>
              Chat
            </div>

            <div className={style.btn} onClick={handleCallInitiate}>
              <span>
                <IoCallOutline />
              </span>
              Call
            </div>
          </div>

          <div className={style.report_ad}>
            <span className={style.id}>
              <span>AD ID</span>
              {vehicleDetails._id}
            </span>
            <span className={style.report} onClick={report}>
              REPORT THIS AD
            </span>
          </div>
        </div>
      )}
      <div className={style.footer}>
      <Footer />
      </div>
      
    </div>
  );
};

export default VehiclesDetails;
