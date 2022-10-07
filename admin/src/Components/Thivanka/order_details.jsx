import React from "react";
import "../../css/common.css";
import "../../css/Thivanka/order_details.css";
import NavBar from "../../Components/Thivanka/nav_bar";
import { useParams } from "react-router-dom";
import Product from "../../Assests/vodka.jpg";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CachedIcon from "@mui/icons-material/Cached";
function OrderDetails() {
  const params = useParams();
  const id = params.oid;
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container clearfix">
        <div className="order-details-header-container">
          <div className="order-details-header-section-one">
            <p style={{ marginLeft: "20px", fontWeight: "400" }}>Order ID</p>
            <p style={{ marginLeft: "6px", fontWeight: "700" }}>{id}</p>
          </div>
          <div className="order-details-header-section-two">
            <FormControl size="small" sx={{ m: 1, minWidth: 180 }}>
              <InputLabel id="demo-simple-select-label">State</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="State"
                onChange={handleChange}
              >
                <MenuItem value={10}>To Be Shipped</MenuItem>
                 
              </Select>
            </FormControl>
            <Button
              size="small"
              variant="outlined"
              startIcon={<CachedIcon />}
              color="success"
              style={{ marginTop: "12px", marginRight: "15px" }}
            >
              Change
            </Button>
          </div>
        </div>
        <div className="shipping-details-container ">
          <div
            style={{
              display: "flex",
              paddingLeft: "20px",
              marginBottom: "20px",
            }}
          >
            <LocalShippingIcon color="success" />{" "}
            <div
              style={{
                marginLeft: "10px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {" "}
              Shipping Details{" "}
            </div>
          </div>
          <div className="shipping-details-wrapper">
            <p className="shipping-details-question clearfix">Customer Name</p>
            <p className="shipping-details-answer clearfix">
              Thivanka Saparamadu
            </p>
          </div>
          <div className="shipping-details-wrapper">
            <p className="shipping-details-question clearfix">
              Customer Address
            </p>
            <p className="shipping-details-answer clearfix">
              Thivanka Saparamadu
            </p>
          </div>
          <div className="shipping-details-wrapper">
            <p className="shipping-details-question clearfix">
              Customer Contact
            </p>
            <p className="shipping-details-answer clearfix">
              Thivanka Saparamadu
            </p>
          </div>
        </div>
        <ProductDetails />
        <ProductDetails />
      </div>
    </div>
  );
}

function ProductDetails() {
  return (
    <div className="order-details-item-container">
      <div className="order-details-item-section-left">
        <img src={Product} alt="Product" className="product-image" />
      </div>
      <div className="order-details-item-section-right">
        <div className="order-details-item-section-right-row">
          <div className="order-details-item-section-right-row-left">
            Product ID
          </div>
          <div className="order-details-item-section-right-row-right">text</div>
        </div>
        <div className="order-details-item-section-right-row">
          <div className="order-details-item-section-right-row-left">
            Product Name
          </div>
          <div className="order-details-item-section-right-row-right">text</div>
        </div>
        <div className="order-details-item-section-right-row">
          <div className="order-details-item-section-right-row-left">
            Product Price
          </div>
          <div className="order-details-item-section-right-row-right">text</div>
        </div>
        <div className="order-details-item-section-right-row">
          <div className="order-details-item-section-right-row-left">
            Product Qty
          </div>
          <div className="order-details-item-section-right-row-right">text</div>
        </div>
        <div className="order-details-item-section-right-row">
          <div className="order-details-item-section-right-row-left">
            Sub Total
          </div>
          <div className="order-details-item-section-right-row-right">text</div>
        </div>
        <div className="order-details-item-section-right-row">
          <div className="order-details-item-section-right-row-left">
            Order Date
          </div>
          <div className="order-details-item-section-right-row-right">text</div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
