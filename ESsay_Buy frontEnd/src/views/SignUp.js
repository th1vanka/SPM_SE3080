import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { ReactSession } from "react-client-session";

import emailjs from 'emailjs-com'

import {
  Label,
  Input,
  Nav,
  
  FormGroup,
  Row,
  Col,
  Card,
  Alert,
  Container,
  Button,
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  
} from "reactstrap";


import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import styles from "../assets/css/Style-signin.module.css";
import { toast } from "react-toastify";

toast.configure();

export default function SignUp(){
  const [country, setCountry]= useState("");
  const [email, setEmail]= useState("");
  const [fullName, setFullName]= useState("");
  const [mobileNo, setMobileNo]= useState("");
  const [username, setUsername]= useState("");
  const [nic, setNic]= useState("");
  const [dateOfBirth, setDateOfBirth]= useState("");
  const [password, setPassword]= useState("");
  const [usernameError , setError] = useState("");

  const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "The Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo, Republic of the",
    "Congo, Democratic Republic of the",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor-Leste)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "The Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City (Holy See)",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  function sendData(e){
    e.preventDefault();
    //Checking whether username already exists

    

    emailjs.sendForm("service_efono7m","template_r1861tm",e.target,"user_tFsjf2dJTs0g6ZYzrwN51")
    .then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));

    axios.get(`http://localhost:8070/users/check/${username}`).then((res) =>{
      if (res.data === true){
        setError("Please use a different username!");
        toast.error("Username already exists!", {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 10000,
          hideProgressBar: false,
        });
        setUsername("");
      }
      else{

        const user={
      
    
          fullName,
          email,
          mobileNo,
          country,
          dateOfBirth,
          nic,
          username,
          password
          
          }
          axios.post("http://localhost:8070/users/add", user).then(()=>{
                  alert("SignUp Details Added");
                  window.location.reload();
            
                }).catch((err)=>{
                  alert(err)
                })

      }
    })
    

    
  }
  
  
  return(
    
    <div style={{ width: "100vw" }}>
      <Row>
        <Col xl="8">
          <div className={styles.loginImg}></div>
        </Col>
        <Col>
          <div className={styles.loginForm}>
            <h2><b>Seller Registation</b></h2> 
            <br /><br />
           

    <Form style={{ width: "80%" }} onSubmit={sendData}  >
    <br />
      

     <Label for="fullName"><b>Full Name</b></Label>
     <Input placeholder="Enter Full Name" type="text" name="fullName"
     onChange={(e)=>{
      setFullName(e.target.value);
     }} />

      <br/>
     <Label for="email"><b>Email</b></Label>
     <Input placeholder="Enter Email" type="email" name="user_email"
     title = "Enter a valid email"
     required
     onChange={(e)=>{
      setEmail(e.target.value);
     }} />

    <br/>
     <Label for="mobileNo"><b>Mobile Number</b></Label>
     <Input placeholder="Enter Mobile Number" type="text" name="mobileNo"
     
     pattern = "[0-9]{10}"
     title = "Enter a 10 digit phone number starting with 0"  required
     onChange={(e)=>{
      setMobileNo(e.target.value);
     }} />

     <br/>
     <Label for="country"><b>Country</b></Label>
     
     
     <Input  
     type="select" name="country"
     
     onChange={(e)=>{
      setCountry(e.target.value);
     }} >
       {countryList.map((c) =>(
         <option>{c}</option>
       ))}
       
    </Input> 
     <br/>
     <Label for="dateOfBirth"><b>Date Of Birth</b></Label>
     <Input placeholder="Enter Date Of Birth" type="date" name="dob"
     onChange={(e)=>{
      setDateOfBirth(e.target.value);
     }} />
     <br/>
     <Label for="nic"><b>NIC</b></Label>
     <Input placeholder="Enter NIC Number" type="text" name="nic"
     
     
     onChange={(e)=>{
      setNic(e.target.value);
     }} />
     <br/>
     <Label for="username"><b>Username</b></Label>
     <Input placeholder="Enter username" type="text" name="userName"
     onChange={(e)=>{
      setUsername(e.target.value);
     }} />
     <span><p style = {{color : "red"}}>{usernameError}</p></span>
     <br/>
     <Label for="password"><b>Password</b></Label>
     <Input placeholder="Enter password" type="text" name="password"
     
     onChange={(e)=>{
      setPassword(e.target.value);
     }} />



     <br />
     <h9> By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy.</h9><br/>

     <center>
       
       <Button type="submit" value="send" className="btn btn-primary" >Submit </Button> { }
       
       <Button href="/login" type="submit" className="btn btn-primary">Log IN</Button>
     </center>





    </Form>
    </div>
        </Col>
      </Row>
    </div>

    
    
  )


}
