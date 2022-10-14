import React from "react";
import "../../css/Thivanka/to_be_shipped.css";
import "../../css/common.css";
import NavBar from "../../Components/Thivanka/nav_bar";

import{ useHistory } from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import { ReactSession } from "react-client-session";
import { Link } from "react-router-dom";


import ComplStyles from "../../css/Naween/compl.module.css";

import {
    Label,
    Input,
    Row,
    Col,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormGroup,
    Alert,
    Container,
  } from "reactstrap";


function SellerDetalils() {
  const [users, setusers]= useState([]);

  useEffect(() => {
    axios
    .get("http://localhost:8070/users")
    .then((res) =>{
      setusers(res.data);
    })
    .catch((err)=>{
      alert("something went wrong :(");
      console.log(err);
    });
    return() =>{

    };
  }, []);

 // let history = useHistory();
 

    return (
      <div className="main-container">
        <NavBar />
        <div className="body-container">
          <div className="shipped-section-one-container ">
            <div className="shipped-section-one-left ">
              <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
                Seller's Details
              </h3>
                           
            </div>
            <div className="shipped-section-one-right">
              <input type="search" placeholder="Search" className="search-box" />
            </div>

          </div>

        <center>
          <br/>
          <br/>
          <br/>
             <div>
              
              <div className={ComplStyles.DetailsDiv}>
                <table width="100%" border="2px" className={ComplStyles.tbldata}>
                  <tr>
                    <th className={ComplStyles.tbldata}>Full Name</th>
                    <th className={ComplStyles.tbldata}>Email</th>
                    <th className={ComplStyles.tbldata}>Country</th>
                    <th className={ComplStyles.tbldata}>Mobile Number</th>
                    <th className={ComplStyles.tbldata}>User Name</th>
                    <th className={ComplStyles.tbldata}>NIC</th>
                    <th className={ComplStyles.tbldata}>Date Of Birth</th>
                  </tr>
                  {users
                  .map((user) =>(
                    <tr className={ComplStyles.tbldata}>
                      <td className={ComplStyles.tbldata}>{user.fullName}</td>
                      <td className={ComplStyles.tbldata}>{user.email}</td>
                      <td className={ComplStyles.tbldata}>{user.country}</td>
                      <td className={ComplStyles.tbldata}>{user.mobileNo}</td>
                      <td className={ComplStyles.tbldata}>{user.username}</td>
                      <td className={ComplStyles.tbldata}>{user.nic}</td>
                      <td className={ComplStyles.tbldata}>{user.dateOfBirth}</td>
                     {/* <td className={ComplStyles.tbldata}>

                  </td> */}
                    </tr>
                  ))
                  
                  }
                </table>
              </div>


             </div>
             

        </center>

          
        </div>
      </div>
    );
  }
  
  export default SellerDetalils;