import React, { useState } from "react";
import NavBar from "../../Components/Thivanka/nav_bar";
import HomeHeader from "../../Components/Thivanka/home_header";
import Footter from "../../Components/Thivanka/footter";
import "../../Css/Janani/registration.css";
import axios from "axios";
import LoginImage from "../../Assets/login.png";

function Regitstration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setContry] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    if (name.trim().length === 0) {
      alert("All the feilds required!");
    } else if (email.trim().length === 0) {
      alert("All the feilds required!");
    } else if (country.trim().length === 0) {
      alert("All the feilds required!");
    } else if (password.trim().length === 0) {
      alert("All the feilds required!");
    } else {
      const data = { name, email, country, password };
      axios
        .post("http://localhost:8000/user/data/save", data)
        .then((res) => {
          alert(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
          <div className="reg-container">
            <div className="reg-container-left-wrapper">
              <img src={LoginImage} width="390px" alt="Login" />
            </div>
            <div className="reg-container-right-wrapper">
              <h3>Create Your Account!!!</h3>
              <br />

              <input
                type="text"
                placeholder="Please Enter Your Name..."
                className="input-fields"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <br />
              <input
                type="email"
                placeholder="Please Enter Your Email..."
                className="input-fields"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <br />
              <select
                className="input-fields"
                onChange={(e) => {
                  setContry(e.target.value);
                }}
              >
                <option value="none">Select Your Country...</option>
                <option value="IN">INDIA</option>
                <option value="US">USA</option>
                <option value="SL">Sri-Lanka</option>
              </select>
              <br />
              <input
                type="password"
                placeholder="Please Enter Your Password..."
                className="input-fields"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <br />
              <br />
              <button className="reg-btn" onClick={submitHandler}>
                SIGN-UP
              </button>
            </div>
          </div>

          {/* body end */}
        </div>
        <Footter />
      </div>
    </div>
  );
}

export default Regitstration;
