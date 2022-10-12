import React, { useEffect, useState } from "react";
import NavBar from "../../Components/Thivanka/nav_bar";
import HomeHeader from "../../Components/Thivanka/home_header";
import Footter from "../../Components/Thivanka/footter";
import "../../Css/Janani/user_profile_home.css";
import Image from "../../Assets/Profile data.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserProfileHome() {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [country, setContry] = useState(localStorage.getItem("con"));
  const [mobile, setMobile] = useState(localStorage.getItem("mobile"));
  const [bdate, setBDate] = useState(localStorage.getItem("bdate"));
  const userName = localStorage.getItem("userName");

  const navigate = useNavigate();
  useEffect(() => {
    getUserDetails();
  }, [email]);

  const getUserDetails = () => {
    axios
      .get(`http://localhost:8000/user/details/get/${email}`)
      .then((res) => {
        setName(res.data?.name);
        setBDate(res.data?.bdate);
        setMobile(res.data?.mobile);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateHandler = () => {
    const data = {
      name,
      email,
      country,
      mobile,
      bdate,
    };
    axios
      .put(`http://localhost:8000/user/details/update/${data.email}`, data)
      .then((res) => {
        if (res.data.status === true) {
          getUserDetails();
          alert("User Updated !!");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteHandler = () => {
    axios
      .get(`http://localhost:8000/user/details/remove/${email}`)
      .then((res) => {
        if (res.data) {
          localStorage.clear();
          alert("Done");
          nav("/");
        } else {
          alert("Faild");
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
              <h5 style={{ marginTop: "8px" }}>My Account</h5>
              <div className="profile-home-nav-bar">
                <p
                  style={{ marginBottom: "30px", color: "#CC8B86" }}
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
                <h4 style={{ marginBottom: "10px" }}>Edit Profile</h4>
                <label
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    marginTop: "20px",
                  }}
                >
                  Full Name
                </label>
                <br />
                <input
                  type="text"
                  className="profile-input-fields"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
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
                  Email Address
                </label>
                <br />
                <input
                  type="text"
                  className="profile-input-fields"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
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
                  Birthday
                </label>
                <br />
                <input
                  type="date"
                  className="profile-input-fields"
                  value={bdate}
                  onChange={(e) => {
                    setBDate(e.target.value);
                  }}
                />
                <br />
                <div
                  style={{ display: "flex", gap: "10px", marginTop: "25px" }}
                >
                  <button className="profile-btn" onClick={updateHandler}>
                    Edit Profile
                  </button>
                  <button
                    className="profile-btn"
                    onClick={() => navigate("/profile/change-password")}
                  >
                    Edit Password
                  </button>
                  <button
                    className="profile-btn"
                    style={{ backgroundColor: "red" }}
                    onClick={deleteHandler}
                  >
                    Deactivate
                  </button>
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

export default UserProfileHome;
