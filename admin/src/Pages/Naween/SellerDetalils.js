import React from "react";
import "../../css/Thivanka/to_be_shipped.css";
import "../../css/common.css";
import NavBar from "../../Components/Thivanka/nav_bar";

import{ useHistory } from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

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
 
   

    const [sellerSups, setSellerSups] = useState([]);
    const [message , setMessage] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8070/sellerSup/").then((res) =>{
            setSellerSups(res.data);
            console.log(res.data);
        }).catch((err) =>{
            console.log(err);
        })
    
      }, []);



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
             
             

        </center>

          
        </div>
      </div>
    );
  }
  
  export default SellerDetalils;