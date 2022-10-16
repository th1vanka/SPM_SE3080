import React from "react";
import{ useHistory } from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import { ReactSession } from "react-client-session";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import styles from "../assets/css/seller.module.css";


import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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


  toast.configure();

  function ProductData(){


    return(
        <>
        <IndexNavbar></IndexNavbar>
            <ProfilePageHeader></ProfilePageHeader>

            <div style = {{paddingTop : "50px"}} className = {styles.body}>
           
           <center><h2 style={{color: "Black"}}><b> Product details</b></h2><br/></center>
           <hr></hr> <br/><br/>
            
            

          
        
        </div>
        {/* <DemoFooter /> */}
        </>
    )

  };
  export default ProductData;