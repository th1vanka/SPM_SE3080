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

export default function AddItemsBags() {
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
    const category = "Bags & Shoes";

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
                image,
                itemNo,
                itemName,
                quantity,
                status,
                price,
                reviews,
                category,
                description,
                sellerID,
                sellerName,
                ratings:{}
            }
    
          console.log(newItem);
          axios.post(`http://localhost:8070/items/save`, newItem)
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
                <form onSubmit={handleSubmit}>
                  <h3><center>{category}</center></h3> <br/>

                    <h4 style={{float: "left"}}><center>Add to Stock</center></h4> <br/><br/>
                    <label>Upload Image</label> <br/>
                    {previewSource && (
                      <img 
                        src={previewSource} 
                        className="item-image"
                      />
                    )}
                  <br/>
                  <input type="file" name="image" onChange={handleFileInputChange} value={fileInputState}></input><br/>

                    <label>Item Number</label> <br/>
                    <p>{itemNo}</p> <br/>

                    <label> Item Name </label><br />
                    <input type="text" value={itemName} onChange={handleItemName}/> <br/> <br/>

                    <label> Quantity </label><br />
                    <input type="text" value={quantity} onChange={handleQuantity}/> <br /><br />
                  
                    <label> Price </label><br />
                    <input type="text" value={price} onChange={handlePrice}/> <br /><br />

                    <label> Category </label> <br />
                    <p>{category}</p> <br /><br />
                      
                    <label> Description </label><br />
                    <input type="text" value={description} onChange={handleDescription}/> <br /><br />

                    <label> Seller ID </label><br />
                    <input type="text" value={sellerID} onChange={handleSellerId}/> <br /><br />
                
                    <label> Seller Name </label><br />
                    <input type="text" value={sellerName} onChange={handleSellerName}/> <br /><br />                         

                    <button onClick={(e) => {e.preventDefault()}} type="submit">Save</button>
                </form> <br/>
            </div>
        </>
    )
}