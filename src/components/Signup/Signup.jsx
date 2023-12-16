import React, { useState } from "react";
import { TbCameraPlus } from "react-icons/tb";
import { BiArrowBack } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import style from "./Signup.module.css";
import { useNavigate } from "react-router";
import { seaterVehicleNames, cargoVehicleNames } from "../../Data/Data";
import axios from "axios";
export default function Signup() {
  const [selectedImages, setSelectedImages] = useState(
    Array.from({ length: 10 }, () => null)
  );
  const [selectedVehicleType, setSelectedVehicleType] = useState("");
  const [notName, setNotName] = useState("");
  const [selectedSeaterVehicle, setSelectedSeaterVehicle] = useState("");
  const [selectedCargoVehicle, setSelectedCargoVehicle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mob, setMob] = useState("");
  const [town_taluka, setTownTaluka] = useState("");
  const [district, setDistrict] = useState("");
  const [seat, setSeat] = useState("");
  const [load, setLoad] = useState("");
  const [state, setState] = useState("");
  const [desc, setDesc] = useState("");
  const [fuel, setFuel] = useState("");
  const [fare, setFare] = useState("");
  const [acStatus, setAcStatus] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const getNotInListVehicleName = (e) => {
    const getVehicleName = e.target.value;
    setNotName(getVehicleName);
  };
  function fName(e) {
    let fstName = e.target.value;
    setFirstName(fstName);
  }

  function lName(e) {
    let lstName = e.target.value;
    setLastName(lstName);
  }

  function phone(e) {
    let mobile = e.target.value;
    setMob(mobile);
  }
  function getTownTaluka(e) {
    let townTaluka = e.target.value;
    setTownTaluka(townTaluka);
  }
  function getDistrict(e) {
    let District = e.target.value;
    setDistrict(District);
  }
  function getState(e) {
    let State = e.target.value;
    setState(State);
  }
  function getVehicleNo(e) {
    let No = e.target.value;
    No = No.replace(/\s/g, "");
    No = No.toUpperCase(); // Corrected line
    setVehicleNo(No);
  }
  

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedImages = [...selectedImages];
      updatedImages[index] = file;
      setSelectedImages(updatedImages);
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages[index] = null;
    setSelectedImages(updatedImages);
  };
  const getDesc = (e) => {
    const desc = e.target.value;
    setDesc(desc);
  };
  const getFuelType = (e) => {
    const fuel = e.target.value;
    setFuel(fuel);
  };
  const getFare = (e) => {
    const fare = e.target.value;
    setFare(fare);
  };
  const getAcStatus = (e) => {
    const statusAc = e.target.value;
    setAcStatus(statusAc);
  };
  const getSeatCapacity = (e) => {
    const seatCap = e.target.value;
    setSeat(seatCap);
    console.log(seatCap);
  };
  const getLoadCapacity = (e) => {
    const LoadCap = e.target.value;
    setLoad(LoadCap);
  };

  function gotoHome() {
    navigate("/");
  }

  function submit(e) {
    e.preventDefault();
    const pattern = /^([A-Za-z]{2}\d{2}[A-Za-z]{2}\d{4})$/;
    const newErrors = {};

    if (firstName === "" || firstName.length < 2 || firstName.length > 10) {
      newErrors.firstName = "Please enter a valid first name";
    } else {
      newErrors.firstName = ""; // Clear the error
    }

    if (lastName === "" || lastName.length < 2 || lastName.length > 10) {
      newErrors.lastName = "Please enter a valid last name";
    } else {
      newErrors.lastName = ""; // Clear the error
    }

    if (mob.length !== 10 || mob === "") {
      newErrors.mob = "Mobile number should be 10 digits";
    } else {
      newErrors.mob = ""; // Clear the error
    }
    if (
      town_taluka === "" ||
      town_taluka.length < 2 ||
      town_taluka.length > 20
    ) {
      newErrors.town_taluka = "Please enter a valid town/taluka";
    } else {
      newErrors.town_taluka = "";
    }
    if (district === "" || district.length < 2 || district.length > 30) {
      newErrors.district = "Please enter a valid district";
    } else {
      newErrors.district = "";
    }
    if (state === "" || state.length < 2 || state.length > 25) {
      newErrors.state = "Please enter a valid state";
    } else {
      newErrors.state = "";
    }
    // Validate "Choose Vehicle Type"
    if (selectedVehicleType === "") {
      newErrors.selectedVehicleType = "Please choose a vehicle type";
    } else {
      newErrors.selectedVehicleType = ""; // Clear the error
    }
    if (selectedVehicleType === "") {
      newErrors.selectedVehicleType = "Please choose a vehicle type";
    } else {
      newErrors.selectedVehicleType = "";
    }

    if (selectedVehicleType === "Seater") {
      if (selectedSeaterVehicle === "") {
        newErrors.selectedSeaterVehicle = "Please choose a seater vehicle";
      } else {
        newErrors.selectedSeaterVehicle = "";
      }
    }

    if (selectedVehicleType === "CargoVehicle") {
      if (selectedCargoVehicle === "") {
        newErrors.selectedCargoVehicle = "Please choose a cargo vehicle";
      } else {
        newErrors.selectedCargoVehicle = "";
      }
    }
    if (
      selectedVehicleType === "CargoVehicle" ||
      selectedVehicleType === "Seater"
    ) {
      if (
        (selectedSeaterVehicle === "Not in List" ||
          selectedSeaterVehicle === "" ||
          selectedSeaterVehicle === "Select") &&
        (selectedCargoVehicle === "Not in List" ||
          selectedCargoVehicle === "" ||
          selectedCargoVehicle === "Select")
      ) {
        if (notName === "") {
          newErrors.notName = "Please enter a vehicle name if not in the list";
        } else if (!/^[A-Za-z ]+$/.test(notName)) {
          newErrors.notName = "Only letters and spaces are allowed";
        } else if (notName.length < 2) {
          newErrors.notName = "Name should be at least 2 characters";
        } else if (notName.length > 10) {
          newErrors.notName = "Name should not be greater than 10 characters";
        } else {
          newErrors.notName = "";
        }
      } else {
        newErrors.notName = "";
      }
    }
    if (selectedVehicleType === "Seater") {
      // Only perform seat capacity validation for Seater Vehicles
      if (!seat.trim()) {
        newErrors.seat = "Please Enter the seat capacity";
      } else if (!/^\d{1,3}$/.test(seat.trim())) {
        newErrors.seat = "Please Enter a valid seat capacity (1 to 3 digits)";
      } else {
        newErrors.seat = ""; // Clear the error
      }
    } else {
      // Clear the seat capacity error for Cargo Vehicles
      newErrors.seat = "";
    }
    if (selectedVehicleType === "CargoVehicle") {
      // Only perform load capacity validation for Cargo Vehicles
      if (!load.trim()) {
        newErrors.load = "Please Enter the load capacity";
      } else if (!/^\d+(kg|quintal|ton)$/.test(load.trim())) {
        newErrors.load = "Please enter a valid load capacity with a valid suffix (kg/quintal/ton)";
      } else {
        newErrors.load = ""; // Clear the error
      }
    } else {
      // Clear the load capacity error for Seater Vehicles
      newErrors.load = "";
    }
        
    if (fuel === "") {
      newErrors.fuel = "Please choose a fuel type";
    } else {
      newErrors.fuel = "";
    }

    // if (!/^\d{1,5}$/.test(fare)) {
    //   newErrors.fare = "Please enter a valid fare (1 to 5 digits)";
    // } else {
    //   newErrors.fare = "";
    // }

    if (acStatus === "") {
      newErrors.acStatus = "Please choose the vehicle AC status";
    } else {
      newErrors.acStatus = "";
    }

    // if (desc.trim().length < 50) {
    //   newErrors.desc =
    //     "Please provide at least 50 characters of extra information";
    // } else {
    //   newErrors.desc = "";
    // }
    if (!pattern.test(vehicleNo)) {
      newErrors.vehicleNo = "Please enter a valid vehicle number";
    } else {
      newErrors.vehicleNo = "";
    }
    if (selectedImages.every((image) => !image)) {
      newErrors.photo = "At least one photo is required";
    } else {
      newErrors.photo = "";
    }
    setErrors(newErrors); // Update the errors state

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error !== "")) {
      return; // There are errors, do not proceed
    }

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("mobile", mob);
    formData.append("town_taluka", town_taluka);
    formData.append("district", district);
    formData.append("state", state);
    formData.append("selectedVehicleType", selectedVehicleType);
    formData.append("selectedSeaterVehicle", selectedSeaterVehicle);
    formData.append("selectedCargoVehicle", selectedCargoVehicle);
    formData.append("Seat", seat);
    formData.append("Load", load);
    formData.append("VehicleNo", vehicleNo);
    formData.append("notName", notName);
    formData.append("fuel", fuel);
    formData.append("fare", fare);
    formData.append("acStatus", acStatus);
    formData.append("desc", desc);
    console.log("FormData before sending:", formData);

    selectedImages.forEach((image, index) => {
      if (image) {
        formData.append(`photo${index}`, image);
      }
    });

    axios
      .post("http://localhost:3000/user", formData)
      .then((response) => {
        console.log("Response data:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    // Clear the form fields and reset state
    setFirstName("");
    setLastName("");
    setMob("");
    setTownTaluka("");
    setDistrict("");
    setState("");
    setSelectedVehicleType("");
    setSelectedSeaterVehicle("");
    setSelectedCargoVehicle("");
    setSeat("");
    setLoad("");
    setNotName("");
    setFuel("");
    setFare("");
    setAcStatus("");
    setDesc("");
    setVehicleNo("");
    setSelectedImages(Array.from({ length: 10 }, () => null));
  }
  return (
    <>
      <div className={style.backarrow_wrapper}>
        <span>
          <BiArrowBack className={style.back_arrow} onClick={gotoHome} />
        </span>
        <span className={style.title}>Post ad</span>
      </div>

      <div className={style.wrapper}>
        <form action="/user" method="post" enctype="multipart/form-data">
          <p className={style.person_info}>Personal Info</p>

          <label htmlFor="firstname">Enter First Name:</label>
          <input
            type="text"
            id="firstname"
            name="FirstName"
            value={firstName}
            className={style.first_name}
            onChange={fName}
          />
          {errors.firstName && (
            <p className={style.error}>{errors.firstName}</p>
          )}
          <label htmlFor="lastname">Enter Last Name:</label>
          <input
            type="text"
            id="lastname"
            value={lastName}
            name="LastName"
            className={style.last_name}
            onChange={lName}
          />
          {errors.lastName && <p className={style.error}>{errors.lastName}</p>}
          <label htmlFor="mobile">Enter Mobile Number:</label>
          <input
            type="text"
            id="mobile"
            className={style.phone}
            name="Mobile No"
            value={mob}
            onChange={phone}
          />
          {errors.mob && <p className={style.error}>{errors.mob}</p>}
          <div>
            <label htmlFor="Town/Taluka">Enter your Town/Taluka :</label>
            <input
              type="text"
              id="Town/Taluka"
              className={style.town_taluka}
              name="Town/Taluka"
              value={town_taluka}
              onChange={getTownTaluka}
            />
          </div>
          {errors.town_taluka && (
            <p className={style.error}>{errors.town_taluka}</p>
          )}
          <div>
            <label htmlFor="District">Enter your District :</label>
            <input
              type="text"
              id="District"
              className={style.district}
              name="District"
              value={district}
              onChange={getDistrict}
            />
          </div>
          {errors.district && <p className={style.error}>{errors.district}</p>}
          <div>
            <label htmlFor="state">Enter your State :</label>
            <input
              type="text"
              id="state"
              className={style.state}
              name="State"
              value={state}
              onChange={getState}
            />
          </div>
          {errors.state && <p className={style.error}>{errors.state}</p>}
          <p className={style.vehicle_info}>Vehicle Info</p>

          <div className={style.vehicle_type}>
            <label htmlFor="vehicletype">Choose Vehicle Type</label>
            <select
              name="VehicleType"
              id="vehicletype"
              value={selectedVehicleType}
              onChange={(e) => setSelectedVehicleType(e.target.value)}
              className={style.vehicleTypeInput}
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="Seater">Seater Vehicle</option>
              <option value="CargoVehicle">Cargo Vehicle</option>
            </select>
          </div>
          {errors.selectedVehicleType && (
            <p className={style.error}>{errors.selectedVehicleType}</p>
          )}

          {selectedVehicleType === "Seater" && (
            <div className={style.seater_vehicle}>
              <label htmlFor="seaterVehicleName">Choose Seater Vehicle :</label>
              <select
                name="seaterVehicleName"
                id="seaterVehicleName"
                value={selectedSeaterVehicle}
                onChange={(e) => setSelectedSeaterVehicle(e.target.value)}
              >
                <option value="select" disabled>
                  Select a Seater Vehicle
                </option>
                {seaterVehicleNames.map((vehicle, index) => (
                  <option key={index} value={vehicle}>
                    {vehicle}
                  </option>
                ))}
              </select>
            </div>
          )}
          {selectedVehicleType === "Seater" && (
            <div className={style.seater_capicity}>
              <label htmlFor="seatercapacity">Maximum Seat Capacity</label>
              <input
                type="text"
                id="seatercapacity"
                name="seat capacity"
                className={style.input_maxseat}
                onChange={getSeatCapacity}
              />
              {errors.seat && <p className={style.error}>{errors.seat}</p>}
            </div>
          )}
          {selectedVehicleType === "CargoVehicle" && (
            <div className={style.cargo_vehicles}>
              <label htmlFor="cargoVehicleName">Choose Cargo Vehicle :</label>
              <select
                name="cargoVehicleName"
                id="cargoVehicleName"
                value={selectedCargoVehicle}
                onChange={(e) => setSelectedCargoVehicle(e.target.value)}
              >
                <option value="select" disabled>
                  Select a Cargo Vehicle
                </option>
                {cargoVehicleNames.map((vehicle, index) => (
                  <option key={index} value={vehicle}>
                    {vehicle}
                  </option>
                ))}
              </select>
            </div>
          )}
          {selectedVehicleType === "CargoVehicle" && (
            <div>
              <label htmlFor="cargocapacity">Maximum load capacity</label>
              <input
                type="text"
                id="cargocapacity"
                className={style.cargo_capacity}
                onChange={getLoadCapacity}
              />
              <span className={style.extra_info}>
                Enter your load capacity like this, For Ex : 123kg or 123quintal
                123ton
              </span>
              {errors.load && <p className={style.error}>{errors.load}</p>}
            </div>
          )}

          <label htmlFor="not_name">
            If not in the list vehicle name, Enter here ⬇️
          </label>
          <input
            type="text"
            id="not_name"
            name="ifVehicleNameNotInList"
            placeholder="Tata Safari, Truck"
            value={notName}
            className={style.first_name}
            onChange={getNotInListVehicleName}
          />
          {errors.notName && <p className={style.error}>{errors.notName}</p>}
          <span className={style.extra_info}>
            but first choose the vehicle type.
          </span>
          <div className={style.fuel_type}>
            <p>Choose Vehicle fuel type:</p>
            <label>
              <input
                className={style.fuel_input}
                type="radio"
                name="Fuel_Type"
                value="Petrol"
                checked={fuel === "Petrol"}
                onChange={getFuelType}
              />
              <span>Petrol</span>
            </label>
            <label>
              <input
                className={style.fuel_input}
                type="radio"
                name="Fuel_Type"
                value="Diesel"
                checked={fuel === "Diesel"}
                onChange={getFuelType}
              />
              <span>Diesel</span>
            </label>
          </div>
          {errors.fuel && <p className={style.error}>{errors.fuel}</p>}
          <label htmlFor="fare" className={style.Fare}>
            Enter fare (per km):
          </label>
          <input
            type="text"
            name="Vehicle_Fare"
            id="fare"
            value={fare}
            placeholder="for ex: ₹ 12 per/km"
            className={style.fare}
            onChange={getFare}
          />
          {errors.fare && <p className={style.error}>{errors.fare}</p>}
          <div className={style.ac_status}>
            <label htmlFor="air_conditioning_status">Vehicle AC:</label>
            <select
              id="air_conditioning_status"
              name="air_Conditioning_Status"
              onChange={getAcStatus}
              value={acStatus}
            >
              <option value="select">select status</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          {errors.acStatus && <p className={style.error}>{errors.acStatus}</p>}
          <label htmlFor="description">
            Add some extra information about the vehicle:
          </label>
          <textarea
            name="Extra_Info_Vehicle"
            id="description"
            cols="40"
            rows="6"
            value={desc}
            className={style.desc}
            onChange={getDesc}
          ></textarea>
          <div>
            <label htmlFor="vehicleNum">Enter Vehicle Number</label>
            <input
              type="text"
              id="vehicleNum"
              value={vehicleNo}
              className={style.vehicle_no}
              onChange={getVehicleNo}
            />
            <span className={style.extra_info}>
              Enter your vehicle no. in this format&nbsp;-&nbsp;
              <span className={style.num}>MH11AZ1234.</span> We collect vehicle
              numbers for safety purposes.
            </span>
            {errors.vehicleNo && (
              <p className={style.error}>{errors.vehicleNo}</p>
            )}
          </div>
          <div className={style.ad_photos}>
            <span>Upload Up to 10 photos</span>
            <div className={style.photo_wrapper}>
              {selectedImages.map((image, index) => (
                <div className={style.photo} key={index}>
                  {image ? (
                    <div className={style.imageContainer}>
                      <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className={style.photo_image}
                      />
                      <span
                        className={style.closeIcon}
                        onClick={() => handleRemoveImage(index)}
                      >
                        <RxCross2 />
                      </span>
                    </div>
                  ) : (
                    <label
                      htmlFor={`photo${index}`}
                      className={style.photo_label}
                    >
                      <TbCameraPlus className={style.camera_icon} />
                      <input
                        type="file"
                        id={`photo${index}`}
                        name="vehicle_photos"
                        accept="image/*, image/jpg, image/jpeg, image/png"
                        className={style.photo_input}
                        onChange={(e) => handleImageUpload(e, index)}
                      />
                    </label>
                  )}
                </div>
              ))}
            </div>
            {errors.photo && <p className={style.error}>{errors.photo}</p>}
            <button className={style.post_now} onClick={submit}>
              Post now
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
