import React, { useEffect, useState } from "react";
import NavBar from "../../../Components/Thivanka/nav_bar";
import HomeHeader from "../../../Components/Thivanka/home_header";
import Footter from "../../../Components/Thivanka/footter";
import "../../../Css/Janani/user_profile_home.css";
import Image from "../../../Assets/Profile data.png";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function UserProfileAddAddress() {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [country, setContry] = useState(localStorage.getItem("con"));
  const [mobile, setMobile] = useState(localStorage.getItem("mobile"));
  const [personalInformation, setPersonalInformation] = useState("");
  const [address, setAddress] = useState("");
  const userName = localStorage.getItem("userName");

  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  useEffect(() => {
    if (state) getShippingDetails(state);
  }, [state]);

  const getShippingDetails = (state) => {
    const id = state;
    axios
      .get(`http://localhost:8000/user/address/getbyid/${id}`)
      .then((res) => {
        console.log(res);
        setPersonalInformation(res.data.personalInfo);
        setContry(res.data.country);
        setAddress(res.data.address);
        setMobile(res.data.mobile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateHandler = () => {
    const id = state;
    const data = {
      personalInformation,
      email,
      country,
      mobile,
      address,
    };
    axios
      .put(`http://localhost:8000/user/address/update/${id}`, data)
      .then((res) => {
        if (res.data.status === true) {
          alert("Address Updated !!");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addHandler = () => {
    if (personalInformation == "") {
      alert("Please provide the personal informations");
      return;
    } else if (address == "") {
      alert("Please provide the address");
      return;
    } else if (address.length < 10) {
      alert("Address must be more than 10 characters");
      return;
    } else if (mobile.length != 10) {
      alert("Mobile number is invalid");
      return;
    }
    const data = {
      personalInformation,
      email,
      country,
      mobile,
      address,
    };
    axios
      .post(`http://localhost:8000/user/address/add`, data)
      .then((res) => {
        if (res.data.status === true) {
          alert("Address Updated !!");
          navigate("/profile/address-book");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="site-main-container">
      <div>
        <NavBar />
      </div>
      <div className="site-body-container">
        <div>
          <HomeHeader />
        </div>
        <div className="site-details-wrapper clearfix">
          {/* body start */}
          <div className="profile-home-container">
            <div className="profile-home-container-left-wrapper">
              <h4>Hi,Janani Hansika</h4>
              <h5 style={{ marginTop: "8px", color: "#CC8B86" }}>My Account</h5>
              <div className="profile-home-nav-bar">
                <p
                  style={{ marginBottom: "30px" }}
                  onClick={() => navigate("/profile")}
                >
                  My Profile
                </p>
                <p
                  style={{ marginBottom: "30px" }}
                  onClick={() => navigate("/profile/address-book")}
                >
                  Address Book
                </p>
                <p
                  style={{ marginBottom: "30px" }}
                  onClick={() => navigate("/profile/payment")}
                >
                  Payment
                </p>
                <p
                  style={{ marginBottom: "30px" }}
                  onClick={() => navigate("/order")}
                >
                  Orders
                </p>
                <p
                  style={{ marginBottom: "30px" }}
                  onClick={() => navigate("/review")}
                >
                  Reviews
                </p>
              </div>
            </div>
            <div className="profile-home-container-right-wrapper">
              <div className="input-wrapper">
                <h4 style={{ marginBottom: "10px" }}>Add Shipping Address</h4>
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    marginTop: "20px",
                  }}
                >
                  Country
                </label>
                <br />
                <select
                  className="profile-input-fields"
                  style={{ width: "78%" }}
                  onChange={(e) => {
                    setContry(e.target.value);
                  }}
                >
                  <option value={country}>{country}</option>
                  <option value="IN">INDIA</option>
                  <option value="US">USA</option>
                  <option value="SL">Sri-Lanka</option>
                </select>
                <br />
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    marginTop: "20px",
                  }}
                >
                  Personal Information
                </label>
                <br />
                <input
                  type="text"
                  className="profile-input-fields"
                  value={personalInformation}
                  onChange={(e) => {
                    setPersonalInformation(e.target.value);
                  }}
                />

                <br />
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    marginTop: "20px",
                  }}
                >
                  Mobile
                </label>
                <br />
                <input
                  type="number"
                  className="profile-input-fields"
                  value={mobile}
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                />
                <br />

                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    marginTop: "20px",
                  }}
                >
                  Address
                </label>
                <br />
                <textarea
                  type="text"
                  className="profile-input-fields"
                  placeholder="address"
                  style={{ height: "100px" }}
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />

                <div
                  style={{ display: "flex", gap: "10px", marginTop: "25px" }}
                >
                  {!state ? (
                    <button className="profile-btn" onClick={addHandler}>
                      Add Address
                    </button>
                  ) : (
                    <button className="profile-btn" onClick={updateHandler}>
                      Update
                    </button>
                  )}
                </div>
              </div>
              <div className="image-wrapper">
                <img
                  src={Image}
                  width="320px"
                  style={{ marginTop: "50px" }}
                  alt="Profile"
                />
              </div>
            </div>
          </div>
          {/* body end */}
        </div>
        <Footter />
      </div>
    </div>
  );
}

export default UserProfileAddAddress;
