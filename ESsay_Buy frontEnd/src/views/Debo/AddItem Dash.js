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

const unique_id = uuid();
const itemNo = unique_id.slice(0, 5);

export default function AddItemsDash() {
    const [image, setImage] = useState("");
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [ratings, setRatings] = useState("");
    const [reviews, setReviews] = useState("");
    const [description, setDescription] = useState("");
    const [sellerId, setSellerId] = useState("");
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
    
        if(itemName === '' || quantity === '' || price === '' || category === '' || description === '' || sellerId === '' || sellerName === ''){
          alert("Fill all the data");
        } else{
            let newItem = {
                image:image,
                itemNo:itemNo,
                itemName:itemName,
                quantity:quantity,
                status:status,
                price:price,
                reviews:reviews,
                category:category,
                description:description,
                sellerID:sellerId,
                sellerName:sellerName,
                ratings:{}
            }
    
          console.log(newItem);
          axios.post(`http://localhost:8070/items/save`, newItem)
          .then((res) => {
            console.log(res.data)
            if(res.newItem.success){
              this.useState({
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
              })
              alert("Item successfully saved!");
              window.location.reload();
            }
          })
        }
    }
    return(
        <>
            <h3><center>{category}</center></h3> <br/>

                <div style={{ textColor: "black" }}>

                <h4><center>Add to Stock</center></h4> <br/><br/>

                <center>
                    <FormGroup onSubmit={handleSubmit} style={{ width: "60%", marginLeft: "25%", textAlign: "left", width: "100%", padding: "10px 10px 10px 10px"}} className="itemForm">
                        <div>   
                            <Label>Upload Image</Label> <br/>
                                {previewSource && (
                                <img 
                                    src={previewSource} 
                                    className="item-image"
                                    style={{ height: "10%"}}
                                />
                                )}
                            <br/>
                            <Input type="file" name="image" onChange={handleFileInputChange} value={fileInputState}></Input><br/>

                            <Label>Item Number</Label> <br/>
                            <p>{itemNo}</p> <br/>

                            <Label> Item Name </Label><br />
                            <Input type="text" value={itemName} onChange={handleItemName}/> <br/> <br/>

                            <Label> Quantity </Label><br />
                            <Input type="text" value={quantity} onChange={handleQuantity}/> <br /><br />
                        
                            <Label> Price </Label><br />
                            <Input type="text" value={price} onChange={handlePrice}/> <br /><br />

                            <Label> Category </Label> <br />
                            <p>Men's Fashion</p> <br /><br />
                            
                            <Label> Description </Label><br />
                            <Input type="text" value={description} onChange={handleDescription}/> <br /><br />

                            <Label> Seller ID </Label><br />
                            <Input type="text" value={sellerId} onChange={handleSellerId}/> <br /><br />
                        
                            <Label> Seller Name </Label><br />
                            <Input type="text" value={sellerName} onChange={handleSellerName}/> <br /><br />

                            <Button type="submit" style={{ backgroundColor: "orange", width: "40%" }}>Save</Button>
                        </div>
                </FormGroup>
                </center>
            </div>
        </>
    )
}