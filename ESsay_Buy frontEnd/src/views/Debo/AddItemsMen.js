import React, { Component } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom"
import {v4 as uuid} from "uuid";
import styles from "../../assets/css/Style-signin.module.css";

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

const unique_id = uuid();
const itemNo = unique_id.slice(0, 5);

export default function AddItemsMen() {
    const [image, setImage] = useState("");
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [ratings, setRatings] = useState("");
    const [reviews, setReviews] = useState("");
    const [description, setDescription] = useState("");
    const [sellerID, setSellerId] = useState("");
    const [sellerName, setSellerName] = useState("");
    const [status, setStatus] = useState("");
    const [fileInputState, setFileInputState] = useState("");
    const [selectedFile, setSelectedFile] = useState("");
    const [previewSource, setPreviewSource] = useState("");
    const category = "Men's Fashion";

    const handleItemName = (e) => {
        setItemName(e.target.value);
      }
    
      const handleQuantity = (e) => {
        setQuantity(e.target.value);
      }
    
      const handlePrice = (e) => {
        setPrice(e.target.value);
      }
    
      const handleDescription = (e) => {
        setDescription(e.target.value);
      }
    
      const handleSellerId = (e) => {
        setSellerId(e.target.value);
      }
    
      const handleSellerName = (e) => {
        setSellerName(e.target.value);
      }
    
      const handleFileInputChange = (e, result) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
        setImage(file.secure_url);
      }
    
      const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          setPreviewSource(reader.result);
        }
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if(itemName === '' || quantity === '' || price === '' || category === '' || description === '' || sellerID === '' || sellerName === ''){
          alert("Fill all the data");
        } else{
            const newItem = {
              itemName,
              quantity,
              price,
              reviews,
              category,
              description,
              sellerID,
              sellerName,
            }
    
          console.log(newItem);
          axios.post(`http://localhost:8070/items/items/save`, newItem)
          .then((res) => {
            console.log(res.data)
            alert("Item successfully saved!");
            window.location.reload();
          })
        }
    }
    return(
        <>
          <div>
            <h2><b>Add to Stock</b></h2> 
            <br /><br />
           

    <Form style={{ width: "80%" }} onSubmit={handleSubmit}>
      <br />
      <h3><center>{category}</center></h3> <br/>

      <label>Item Number</label> <br/>
                    <p>{itemNo}</p> <br/>

                    <Label> Item Name </Label><br />
                    <Input type="text" value={itemName} onChange={handleItemName}/> <br/> <br/>

                    <Label> Quantity </Label><br />
                    <Input type="text" value={quantity} onChange={handleQuantity}/> <br /><br />
                  
                    <Label> Price </Label><br />
                    <Input type="text" value={price} onChange={handlePrice}/> <br /><br />

                    <Label> Category </Label> <br />
                    <p>{category}</p> <br /><br />
                      
                    <Label> Description </Label><br />
                    <Input type="text" value={description} onChange={handleDescription}/> <br /><br />

                    <Label> Seller ID </Label><br />
                    <Input type="text" value={sellerID} onChange={handleSellerId}/> <br /><br />
                
                    <Label> Seller Name </Label><br />
                    <Input type="text" value={sellerName} onChange={handleSellerName}/> <br /><br />                         
      
        <Button type="submit" value="send" className="btn btn-primary" >Submit </Button>
      </Form>
      </div>
        </>
    )
}