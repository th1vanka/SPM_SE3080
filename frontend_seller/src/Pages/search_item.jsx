import React from "react";
import "../Css/home_page.css";
import NavBar from "../Components/nav_bar";
import HomeHeader from "../Components/home_header";
import Item from "../Assets/item.jpg";
import Items from "../Components/items"
import ListIcon from "@mui/icons-material/List";
import SearchBar from "../Components/search_bar";
import Category from "../Components/category";
import axios from "axios";
import { Component } from "react";
 
export default class SearchItemPage extends Component{
  constructor(props){
    super(props);

    this.state={
      Image: "",
      ItemNo:"",
      ItemName:"",
      Status:"",
      Quantity:"",
      Price:"",
      Reviews:"",
      Category:"",
      Description:"",
      SellerID:"",
      SellerName:"",
      ratings:{Name: "", Date: "", Reviews: "", Comments: ""}
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
      <div className="site-main-container">
      <div>
        <NavBar />
      </div>
      <div className="site-body-container">
        <div>
          <HomeHeader />
        </div>
        <div className="site-filter-wrapper clearfix">
          <center>
            <input
              type="search"
              placeholder="Search by name..."
              className="site-filter-inputs first"
            />
            <input
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
                        <td><img src={items.Image} style={{width: '30%', height: '30%'}}/></td>
                        <td>{items.ItemName}</td>
                      </tr>
                       ))}
                  </tbody>
                </table>
              </div>
          </center>
          <div className="items-category-container">
              <div className="items-category">
                <div
                  style={{
                    display: "flex",
                    marginBottom: "5px",
                    paddingLeft: "10px"
                  }}
                >
                  <ListIcon fontSize="small" />
                  <h5>Categories</h5>
                </div>
                <div className="list-category-items">
                  <ListIcon fontSize="small" />
                  &nbsp;
                  <p style={{ fontSize: "13px" }}><a href="/itemMen">Men's Fashion</a></p>
                </div>
                <div className="list-category-items">
                  <ListIcon fontSize="small" />
                  &nbsp;
                  <p style={{ fontSize: "13px" }}><a href="/itemSpices">Spices</a></p>
                </div>
                <div className="list-category-items">
                  <ListIcon fontSize="small" />
                  &nbsp;
                  <p style={{ fontSize: "13px" }}><a href="/itemBag">Bags & Shoes</a></p>
                </div>
                <div className="list-category-items">
                  <ListIcon fontSize="small" />
                  &nbsp;
                  <p style={{ fontSize: "13px" }}><a href="/itemJewel">Jewelry & Watches</a></p>
                </div>
                <div className="list-category-items">
                  <ListIcon fontSize="small" />
                  &nbsp;
                  <p style={{ fontSize: "13px" }}>Jewelry & Watches</p>
                </div>
                <div className="list-category-items">
                  <ListIcon fontSize="small" />
                  &nbsp;
                  <p style={{ fontSize: "13px" }}>Jewelry & Watches</p>
                </div>
                <div className="list-category-items">
                  <ListIcon fontSize="small" />
                  &nbsp;
                  <p style={{ fontSize: "13px" }}>Jewelry & Watches</p>
                </div>
                <div className="list-category-items">
                  <ListIcon fontSize="small" />
                  &nbsp;
                  <p style={{ fontSize: "13px" }}>Jewelry & Watches</p>
                </div>
                <div className="list-category-items">
                  <ListIcon fontSize="small" />
                  &nbsp;
                  <p style={{ fontSize: "13px" }}>Jewelry & Watches</p>
                </div>
                <div className="list-category-items">
                  <ListIcon fontSize="small" />
                  &nbsp;
                  <p style={{ fontSize: "13px" }}>Jewelry & Watches</p>
                </div>
              </div>
            </div>
        </div>
        <div className="site-item-category-container">
          <div className="site-item-category-wrapper">
            <div style={{ paddingTop: "40px" }}>
              <hr style={{ float: "left", width: "38%", marginTop: "12px" }} />
              <p
                style={{
                  float: "left",
                  marginLeft: "18px",
                  fontSize: "19px",
                  color: "white",
                  fontWeight: "600",
                  
                }}
              >
                {""}BROWSE OUR CATEGORIES
              </p>
              <hr style={{ float: "right", width: "38%", marginTop: "12px" }} />
            </div>
            <div className="site-item-category clearfix">
              <Category name="Handicrafts" />
              <Category name="Spices" />
              <Category name="Cloths" />
              <Category name="Masks" />
              <Category name="Bathik" />
              <Category name="Foods" />
              <Category name="Handicrafts" />
              <Category name="Spices" />
              <Category name="Cloths" />
              <Category name="Masks" />
              <Category name="Bathik" />
              <Category name="Foods" />
              <Category name="Bathik" />
              <Category name="Foods" />
              <Category name="Handicrafts" />
              <Category name="Spices" />
              <Category name="Cloths" />
              <Category name="Masks" />
              <Category name="Bathik" />
              <Category name="Foods" />
              <Category name="Bathik" />
              <Category name="Foods" />
              <Category name="Handicrafts" />
              <Category name="Spices" />
              <Category name="Cloths" />
              <Category name="Masks" />
              <Category name="Bathik" />
              <Category name="Foods" />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}