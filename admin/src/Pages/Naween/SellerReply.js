import React from "react";
import "../../css/Thivanka/to_be_shipped.css";
import "../../css/common.css";
import NavBar from "../../Components/Thivanka/nav_bar";

import { useNavigate } from "react-router-dom";
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
    Form,
    FormText
  } from "reactstrap";



function SellerReply() {
 
  const navigate= useNavigate();

    

    
      function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm("service_yka1l24","template_h4k90bs",e.target, "user_tFsjf2dJTs0g6ZYzrwN51").then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));

        navigate("/complaints")
        
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
              <br/> <br/> <br/>
              
              

              <div className= {styles.FormContainer}>
            <Form onSubmit={sendEmail} >


                <div className={styles.hy} >
                <FormGroup>
                  
                <label className={styles.label}>Seller's Name</label>
                
                <input className={styles.input} type="text" name="name"/>
                </FormGroup>
                </div>
                <br/>
                    
                <div className={styles.hy}>
                <FormGroup>
                <label className={styles.label} >Email </label>
                <input className={styles.input} type="email" name="user_email"/>
                </FormGroup>
                </div>
                <br/>
                

                <div className={styles.hy}>
                <FormGroup>
                <label className={styles.label}> response</label>
                <textarea className={styles.input} name='message' rows='4'/>
                </FormGroup>
                </div>
                <br/><br/><br/>
                
                <FormGroup >
                <Button  className={styles.btn_seller}  type = "submit" 
                onClick = {() =>{
                 // navigate("/complaints")
                  //;
                }}
                >submit</Button>
                </FormGroup>

              </Form> 
              </div>

             

            </center>
        </div>
    
    

  

          
        </div>
      </div>
    );
  }
  
  export default SellerReply;