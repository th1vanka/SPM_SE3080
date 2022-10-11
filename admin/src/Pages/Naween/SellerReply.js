import React from "react";
import "../../css/Thivanka/to_be_shipped.css";
import "../../css/common.css";
import NavBar from "../../Components/Thivanka/nav_bar";

import{ useHistory } from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import emailjs from 'emailjs-com';

import ComplStyles from "../../css/Naween/compl.module.css";
import styles from "../../css/Naween/seller.module.css";

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
    Button,
    FormText
  } from "reactstrap";


function SellerReply() {
 
   

    

    
      function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm("service_yka1l24","template_h4k90bs",e.target, "user_tFsjf2dJTs0g6ZYzrwN51").then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
      }



    return (
      <div className="main-container">
        <NavBar />
        <div className="body-container">
          <div className="shipped-section-one-container ">
            <div className="shipped-section-one-left ">
              <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
              Reply to Sellers
              </h3>
                           
            </div>
            <div className="shipped-section-one-right">
              <input type="search" placeholder="Search" className="search-box" />
            </div>
            

          </div>

        
             
        <div>
            
            <center>
            <form onSubmit={sendEmail}>
                <label>Seller's Nname</label>
                <input type="text" name="name"/>
                <br/>

                <label>Email</label>
                <input type="email" name="user_email"/>
                <br/>

                <label>
response</label>
                <textarea name='message' rows='4'/>
                <br/>

                <Button color = "primary" type = "submit" 
                onClick = {() =>{
                  ;
                }}
                >submit</Button>

            </form>
            </center>
        </div>
    
    

  

          
        </div>
      </div>
    );
  }
  
  export default SellerReply;