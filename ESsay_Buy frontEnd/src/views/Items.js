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
          image:"",
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
          ratings:{name: "", date: "", reviews: "", comments: ""}
        }
    
        this.state={
          items:[]
        }
      }
    
      componentDidMount(){
          this.retrieveItemDetails();
      }
    
      retrieveItemDetails(){
        axios.get('http://localhost:8080/items/getItemDetails').then(res=>{
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
                <div className="site-details-wrapper clearfix">
                <center>
                <div>
                    <table>
                    <thead></thead>
                    <tbody>
                        {this.state.items.map((items, index) => (
                        <tr key={index}>
                            <td><img src={items.Image} style={{width: '30%', height: '20%'}}/></td>
                            <td>{items.ItemName}</td>
                            <td>{items.ItemNo}</td>
                            <td>{items.Category}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                    </div>
                </center>
                </div>
            </>
        )
    }
}