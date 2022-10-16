import React from "react";
import "../../css/Thivanka/to_be_shipped.css";
import "../../css/common.css";
import NavBar from "../../Components/Thivanka/nav_bar";

import{ useHistory, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import TablePagination from "@material-ui/core/TablePagination";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
    Button
  } from "reactstrap";

 // toast.configure();

function Complaints() {
 const [SellerSups, setSellerSups]= useState([]);

 useEffect(() => {
  axios
  .get("http://localhost:8070/sellerSup")
  .then((res) =>{
    setSellerSups(res.data);
  })
  .catch((err)=>{
    alert("something went wrong :(");
    console.log(err);
  });
  return() =>{

  };
}, []);
   
function onDelete(SellerSup){
  if( 
    window.confirm(
      "Seller Complain will be removed from the database"
    )
  )
  console.log(SellerSup._id)
  axios.delete(`http://localhost:8070/sellerSup/delete/${SellerSup._id}`).then((res)=>{
    console.log(res);
    

  }).catch((err) =>{
            console.log(err);
            alert("Error!");
        })
       // window.location.reload();
        setTimeout(()=>{
          window.location.reload();
      } , 1000) 
} 

const navigate= useNavigate();



 //let history = useNavigate();



    return (
      <div className="main-container">
        <NavBar />
        <div className="body-container">
          <div className="shipped-section-one-container ">
            <div className="shipped-section-one-left ">
              <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
                Seller's Complaints
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
                    <th className={ComplStyles.tbldata}>Seller Name</th>
                    <th className={ComplStyles.tbldata}>Seller ID</th>
                    <th className={ComplStyles.tbldata}>Email</th>
                    <th className={ComplStyles.tbldata}>Inquiry</th>
                    
                  </tr>
                  {SellerSups
                  .map((SellerSup) =>(   //SellerSup
                    <tr className={ComplStyles.tbldata}>
                      <td className={ComplStyles.tbldata}>{SellerSup.name}</td>
                      <td className={ComplStyles.tbldata}>{SellerSup.sellerId}</td>
                      <td className={ComplStyles.tbldata}>{SellerSup.email}</td>
                      <td className={ComplStyles.tbldata}>{SellerSup.inquiry}</td>
                      <td className={ComplStyles.tbldata}>
                          <button className={ComplStyles.btnDelete2}
                          onClick={() => {
                            onDelete(SellerSup);
                          }}>
                            <center>
                            delete </center>
                          </button>

                        
                      </td>
                      
                     {/* <td className={ComplStyles.tbldata}>

                  </td> */}
                    </tr>
                  ))
                  
                  }
                </table>
                <Button    //href="/SellerReply"
                className={ComplStyles.btnBut}  style = {{float:'right' , margin : "30px" }}
                type="submit"
                onClick={()=>{
                  navigate("/SellerReply")
                }}
                >Reply to sellers</Button>
              </div>


             </div>
             

        </center>
             

        

          
        </div>
      </div>
    );
  }
  
  export default Complaints;