import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function EditItem(){
    const [itemNo, setItemNo] = useState("");
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
    const [category, setCategory] = useState("");
    
    const id = useParams();
  
    const[items] = useState({
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
    })
  
    const changeOnClick = async (e) => {
        e.preventDefault();
  
        const formData = new FormData();
  
        formData.append("itemName", itemName);
        formData.append("quantity", quantity);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("description", description);
  
        setItemName("");
        setCategory("");
        setDescription("");
        setPrice("");
        setQuantity("");
  
        items.quantity = formData.get("quantity");
        items.price = formData.get("price");
        items.category = formData.get("category");
        items.itemNo = formData.get("itemNo");
        items.description = formData.get("description");
  
        await axios.put(`http://localhost:8070/itemDetails/update/${itemNo?.itemNo}`, items)
        .then(res => {
            alert("Updated successfully");
        })
        .catch(err => {
            alert("update failed")
            console.log(err);
        })
    }
    
    useEffect(function effectFunction(){
        axios.get(`http://localhost:8070/getOneItem/${itemNo?.itemNo}`)
        .then(res => {
            setItemName(res.data.items.itemName);
            setQuantity(res.data.items.quantity);
            setDescription(res.data.items.description);
            setPrice(res.data.items.price);
            setCategory(res.data.items.category);
        })
        .catch(err => console.log(err));
    }, []);

    return(
        <div>
            <center><h2>Edit Item Details</h2></center>

            <table>
                <tr>
                    <th>
                        <form>
                            <label>Item Name :</label>
                            <input type="text" name="itemName" value={itemName} onChange={e => setItemName(e.target.value)}/>

                            <label>Category :</label>
                            <input type="text" name="category" value={category} onChange={e => setCategory(e.target.value)}/>

                            <label>Price :</label>
                            <input type="text" name="price" value={price} onChange={e => setItemName(e.target.value)}/>
                            <button onClick={(e) => changeOnClick(e)}>Update</button>

                            <label>Quantity :</label>
                            <input type="text" name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)}/>

                            <label>Description :</label>
                            <input type="text" name="description" value={description} onChange={e => setDescription(e.target.value)}/>
                            <button onClick={(e) => changeOnClick(e)}>Update</button>
                        </form>
                    </th>
                </tr>
            </table>            
        </div>
    );
  }