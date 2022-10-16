import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom"
import {v4 as uuid} from "uuid";

import {
  Label,
  Input,
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

export default class ViewItems extends Component{
    constructor(props){
        super(props);
    
         this.state={
          itemNo:"",
          itemName:"",
          quantity:"",
          status:"",
          price:"",
          reviews:"",
          category:"",
          description:"",
          sellerID:"",
          sellerName:"",
          ratings:{Name: "", Date: "", Review: "", Comment: ""}
        }
    
        this.state={
          items:[]
        }
      }
    
      componentDidMount(){
          this.retrieveItemDetails();
      }
    
      retrieveItemDetails(){
        axios.get(`http://localhost:8070/items/getItemDetails`).then(res=>{
          if(res.data.success){
            this.setState({
              items:res.data.existingItems
            });
          }
        });
      }
    
      render(){
        return(
            <>
                <div className="site-filter-wrapper clearfix">
                <center>
                    <Input
                    type="search"
                    placeholder="Search by name..."
                    className="site-filter-inputs first"
                    />
                    <Input
                    type="search"
                    placeholder="Search by category..."
                    className="site-filter-inputs"
                    />
                </center>
                </div>
                <div>
                <center>
                <div>
                    <table>
                    <thead>
                    <tr>
                      <th>Item Number</th>
                      <th>Item Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Category</th>
                      <th>Description</th>
                      <th>Seller ID</th>
                      <th>Seller Name</th>
                    </tr>
                  </thead>
                  <tbody>
                  {this.state.items.map((items, index) => (
                        <tr key={index}>
                        <td>{items.itemNo}</td>
                        <td>{items.itemName}</td>
                        <td>{items.quantity}</td>
                        <td>{items.price}</td>
                        <td>{items.category}</td>
                        <td>{items.description}</td>
                        <td>{items.sellerID}</td>
                        <td>{items.sellerName}</td>
                        <button style = {{textDecoration:'none',color:'white', backgroundColor:'blue'}} href={`/EditItem/${items.itemNo}`}>Edit</button>
                        <button style = {{textDecoration:'none',color:'white', backgroundColor:'blue'}} href="/" onClick={() => this.onDelete(items.itemNo)}>Delete</button>
                      </tr>
                       ))}
                  </tbody>
                            <br></br>
                    </table>
                    </div>
                    </center>
                </div>
            </>
        )
    }
}