import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
    Label,
    Input,
    FormGroup,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    
    FormText,
    Button,
    
  } from "reactstrap";

  import IndexNavbar from "components/Navbars/IndexNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

import styles from "../assets/css/seller.module.css";
import { ReactSession } from "react-client-session";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import IndexHeader from "components/Headers/IndexHeader";

toast.configure();
//SellerSup

export default class SellerSup extends Component{

    constructor(props){
        super(props);

        this.onChangeName= this.onChangeName.bind(this);
        this.onChangeSellerId= this.onChangeSellerId.bind(this);
        this.onChangeEmail= this.onChangeEmail.bind(this);
        this.onChangeInquiry= this.onChangeInquiry.bind(this);
        this.onSubmit= this.onSubmit.bind(this);

        this.state={
            name: '',
            sellerId: '',
            email: '',
            inquiry: '',

        }

    }
    
    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }
    onChangeSellerId(e){
        this.setState({
            sellerId: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }
    onChangeInquiry(e){
        this.setState({
            inquiry: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();

        const sellerSup={
            name: this.state.name,
            sellerId: this.state.sellerId,
            email: this.state.email,
            inquiry: this.state.inquiry,
        }
        console.log(sellerSup);

        axios.post('http://localhost:8070/sellerSup/add',sellerSup)
        .then(res => console.log(res.data));
        toast.success('seller suport details Added!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            console.log(sellerSup);
           
            setTimeout(()=>{
                window.location.reload();
            } , 5000)
            //window.location.reload();

    }

    render(){
        return(
            <>
            <IndexNavbar></IndexNavbar>
            <ProfilePageHeader></ProfilePageHeader>
            <div style = {{paddingTop : "50px"}} className = {styles.body}>
           
           <center><h2 style={{color: "Black"}}><b> Seller Support Center</b></h2><br/><br/></center>
            <div className = {styles.FormContainer}>
               
        

        

         <form onSubmit={this.onSubmit}>

          

        <div > 
          <label> <font color ="black"><b> Seller Name: </b> </font> </label>
          <input  type="text"
          placeholder="Enter Seller Name"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>

        

        <div className="form-group">
        <FormGroup>
          <label > <font color ="black"><b> Seller ID: </b> </font> </label>
          <input 
              placeholder="Enter Seller ID"
              pattern="[S][0-9]{3}"
              title = "Enter a valid Seller ID, EX : S123"
              type="text" 
              required
              className="form-control"
              value={this.state.sellerId}
              onChange={this.onChangeSellerId}
               />
              
           
              <FormText><label className="text-danger" >*enter valid Seller ID "SXXX"</label></FormText>
              </FormGroup>
        </div>

        

        

        
        
        {/* route  vehicle number  */}

        <div className="form-group"> 
        
          <label > <font color ="black"><b> Email: </b> </font> </label>
          <input  type="text"
          placeholder="Enter Email"
              
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>


        <div className="form-group"> 
        
          <label > <font color ="black"><b> Inquiry: </b> </font> </label>
          <input  type="text"
          placeholder=" your inquiry"
              
              required
              className="form-control"
              value={this.state.inquiry}
              onChange={this.onChangeInquiry}
              />
        </div>
        
        
        
       

         <br></br>
                
                <Button color = "primary" type = "submit" style = {{float:'right' , margin : "5px" }}
                onClick = {() =>{
                  ;
                }}
                >submit</Button>
                <div>
            <label className="text-danger" style = {{float:'right' , margin : "2px" }}> please fill this form only for important purpose</label>
        </div>
              
        
         </form>
         </div>
         </div> 
            
            
         <DemoFooter />
            


           



            </>
        )
    }








}



