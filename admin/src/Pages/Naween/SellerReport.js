import React from "react";
import "../../css/Thivanka/to_be_shipped.css";
import "../../css/common.css";
import NavBar from "../../Components/Naween/nav_barRepo";

import{ useHistory, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';
//import { useEffect } from "react/cjs/react.development";
import axios from 'axios';

import { ReactSession } from "react-client-session";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";

import styles from "../../css/Naween/report.module.css"

import {
    Label,
    Input,
    
    
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    FormGroup,
    Alert,
    Container,
    Row, Col, Card 
  } from "reactstrap";
import { requirePropFactory } from "@mui/material";



function SellerReport() {
  
  const[users, setUsers]=useState([]);
  const[unregUser, setUnreg]=useState([]);
  const [selectedDate , filteredDate] = useState("01"); 
    const [selectedYear , filteredYear] = useState("2021");
    const [date, setdate] = useState();
   


 let history= useNavigate();

 var number = 1;
 let doc;

   useEffect(()=> {
    let today= new Date().toISOString().slice(0, 10);
    setdate(today);
    function getUsers(){
      axios.get("http://localhost:8070/users").then((res) =>{
        setUsers(res.data);
        console.log(res);
      }).catch((err) =>{
       // alert("Something went wrong :(");
        alert(err.message);
      });
    };
    getUsers();
   }, []);

   useEffect(()=> {
    let today= new Date().toISOString().slice(0, 10);
    setdate(today);
    function getunregUsers(){
      axios.get("http://localhost:8070/unregUser/unreg").then((res)=>{
        setUnreg(res.data);
        console.log(res);
      }).catch((err) =>{
        alert(err.message);
      });
    }
    getunregUsers();
   }, []);

   const downloadPDF = () => {
 
    doc = new jsPDF({
      orientation : "portrait",
      unit :"pt",
      format : [1700,1000]
    })
    doc.html(document.getElementById("report-cont"), {
      callback: function (pdf) {
        pdf.save("MonthlySellersReport.pdf");
      },
    });
  };

    return (
      <div className="main-container">
        <NavBar />
        <div className="body-container">
          <div className="shipped-section-one-container ">
            <div className="shipped-section-one-left ">
              <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
                Seller's Details Report
              </h3>
                           
            </div>
            <div className="shipped-section-one-right">
              <input type="search" placeholder="Search" className="search-box" />
            </div>

          </div>

        <center>
          <br/><br/>
             
             <Container className={styles.DetailsDiv2}>
               <div style={{marginLeft : "40px" , marginRight : "40px"}}>
               <div style = {{display : "flex" , flexDirection : "row" }}>
               
               <div style = {{width : "30%" }}>
                  
                  <h5>Select Month</h5>
                  <Input className={styles.field}    type="select" name="FilteringDate"
                  onChange={(e) =>{
                    filteredDate(e.target.value);
                  }}>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </Input>
                   </div>
                  
                   
                  
                  <div style={{width : "30%" , marginLeft : "350px"}}>
                    <h5>Select Year</h5>
                    <Input className={styles.field}  type="select" name="FilteringYear"
                    onChange={(e) =>{
                      filteredYear(e.target.value);
                    }}>
                      <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    </Input>
                  </div>
                  </div>

                  <hr></hr>

                  <div id ="report-cont">
                    <Card className="" id="report" style={{padding: "20px"}}>
                      <Row>
                        <Col>
                        <img style={{width : "30%" , marginLeft : "35%"}}
                        src={ require("../../img/logo1000.png").default
                      }
                      className="report-logo" />
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                        <br></br>
                        <p ><h5> 
                        Singer Mega building, 16/6A New Kandy Rd, {" "}
                          <br></br>Baththaramulla, Malabe 10640<br></br>
                          Tel No. : +94 71 852 4562
                           </h5>
                        </p> 
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                        <label style={{ float: "right", fontSize : "14px" }}>
                          <i>Date : {date}</i>
                        </label> <br/>

                        <hr></hr>
                        </Col>
                      </Row>

                      <br/><br/>
                      <div>
                        <h5 >This report Generates the amount of sellers who registered in a month</h5>
                      </div>

                      <div className={styles.DetailsDiv}>
                        <table width="100%" border="2px" className={styles.tbldata}>
                          <thead>
                            <th className={styles.tbldata} scope="col">Registered Seller Name</th>
                            <th className={styles.tbldata} scope="col">Email</th>
                            <th className={styles.tbldata} scope="col">NIC</th>
                            <th className={styles.tbldata} scope="col">Mobile No:</th>
                            <th className={styles.tbldata} scope="col">Registered Date:</th> 
                          </thead>

                           <tbody>
                            

                           
                           {users.filter((val) =>{
                            if(selectedYear ==='' && selectedDate ===''){
                              return val;
                            }
                            else if(val.date.substring(5, 7).includes(selectedDate) && val.date.substring(0,4).includes(selectedYear)){
                              return val;
                            }
                            else if(val.date.substring(5,7).includes(selectedDate) && selectedYear === ''){
                              return val;
                            }
                            else if(val.date.substring(0,4).includes(selectedYear) && selectedDate === ''){
                              return val;
                            }

                           }).map((user)=>(
                            <tr className={styles.tbldata}>
                              
                              <td >{user.fullName}</td>
                              <td>{user.email}</td>
                              <td>{user.nic}</td>
                              <td>{user.mobileNo}</td>
                              <td>{user.date}</td>
                            </tr>
                           ))}
                           </tbody>

                        </table>
                      </div>
                      </Card>
                      </div>
                      <div className="report-download">
                      {/*  <Row>
                          <Col>
                          <button className={styles.btnDownload}
                          onClick={downloadPDF}> Downloard
                            
                          </button>
                          </Col>
                        </Row> */}
                      </div>
                      </div>
   {/* ********************************************************************************* */}
                    <br/>  <hr></hr>   

                    <div style={{marginLeft : "40px" , marginRight : "40px"}}>
                    <div style = {{display : "flex" , flexDirection : "row" }}>

                    <div style = {{width : "30%" }}>
                    <h5>Select Month</h5>
                    <Input className={styles.field}    type="select" name="FilteringDate"
                  onChange={(e) =>{
                    filteredDate(e.target.value);
                  }}>
                    <option>01</option>
                    <option>02</option>
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </Input>
                  </div>

                  <div style={{width : "30%" , marginLeft : "350px"}}>
                  <h5>Select Year</h5>
                  <Input className={styles.field}  type="select" name="FilteringYear"
                    onChange={(e) =>{
                      filteredYear(e.target.value);
                    }}>
                      <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    </Input>
                  </div>
                  </div>
                 
                    
                  <div id ="report-cont">
                  <Card className="" id="report" style={{padding: "20px"}}>
                    <Row>
                      <Col>
                      <img style={{width : "30%" , marginLeft : "35%"}}
                        src={ require("../../img/logo1000.png").default
                      }
                      className="report-logo" />
                      
                      </Col>
                    </Row>

                    <Row>
                        <Col>
                        <label style={{ float: "right", fontSize : "14px" }}>
                          <i>Date : {date}</i>
                        </label> <br/>

                        <hr></hr>
                        </Col>
                        </Row>
                        <br/><br/>
                        <div>
                        <h5 >This report Generates the amount of sellers who unregistered in a month</h5>
                      </div>

                      <div className={styles.DetailsDiv}>
                      <table width="100%" border="2px" className={styles.tbldata}>
                      <thead>
                      <th className={styles.tbldata} scope="col">Unregistered Seller Name</th>
                            <th className={styles.tbldata} scope="col">Reason</th>
                            <th className={styles.tbldata} scope="col">Unregistered Date</th>
                            
                      </thead>
                      <tbody>
                      {unregUser.filter((val) =>{
                        if(selectedYear ==='' && selectedDate ===''){
                          return val;
                        }
                        else if(val.unregisteredDate.substring(5, 7).includes(selectedDate) && val.unregisteredDate.substring(0,4).includes(selectedYear)){
                          return val;
                        }
                        else if(val.unregisteredDate.substring(5,7).includes(selectedDate) && selectedYear === ''){
                          return val;
                        }
                        else if(val.unregisteredDate.substring(0,4).includes(selectedYear) && selectedDate === ''){
                          return val;
                        }
                      }).map((unregUser)=>{
                        <tr className={styles.tbldata}>
                          <td >{unregUser.fullName}</td>
                              <td>{unregUser.reason}</td>
                              <td>{unregUser.unregisteredDate}</td>
                        </tr>
                      })}
                      </tbody>

                      </table>

                      </div>

                  </Card>

                  </div>
                  <div className="report-download">
                  <Row>
                          <Col>
                          <button className={styles.btnDownload}
                          onClick={downloadPDF}> Downloard
                            
                          </button>
                          </Col>
                        </Row>
                  </div>
                  </div>

                    
                    

                  


               
             

               

               

             </Container>

        </center>

          
        </div>
      </div>
    );
  }
  
  export default SellerReport;