import React, { useEffect } from "react";
import "../../css/common.css";
import "../../css/Thivanka/order_details.css";
import NavBar from "../../Components/Thivanka/nav_bar";
import { useParams, useNavigate } from "react-router-dom";
import Product from "../../Assests/vodka.jpg";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CachedIcon from "@mui/icons-material/Cached";
import axios from "axios";

function OrderDetails() {
  const params = useParams();
  const id = params.oid;
  const state = params.state;
  const [newState, setNewState] = React.useState("");
  const [details, setDetails] = React.useState({});
  const [productDetails, setProductDetails] = React.useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/client/special/order/${id}`)
      .then((res) => {
        if (res.data.status === false) {
          alert(res.data.message);
        } else {
          setDetails(res.data.data);
          setProductDetails(res.data.product);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }, [id]);

  const handleChange = (event) => {
    setNewState(event.target.value);
  };

  const updateHandler = () => {
    axios
      .put(`http://localhost:8000/client/order/state/update/${id}/${newState}`)
      .then((res) => {
        if (res.data.status === false) {
          alert(res.data.message);
        } else {
          alert(res.data.message);
          if (state === "To be shipped") {
            setTimeout(() => {
              navigate("/to-be-shipped/order");
            }, 2000);
          } else if (state === "Shipped") {
            setTimeout(() => {
              navigate("/shipped/order");
            }, 2000);
          } else if (state === "Completed") {
            setTimeout(() => {
              navigate("/complete/order");
            }, 2000);
          }
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container clearfix">
        <div className="order-details-header-container">
          <div className="order-details-header-section-one">
            <p style={{ marginLeft: "20px", fontWeight: "400" }}>Order ID</p>
            <p style={{ marginLeft: "6px", fontWeight: "700" }}>{id}</p>
          </div>
          {state !== "Complete" &&
            <div className="order-details-header-section-two">
              <FormControl size="small" sx={{ m: 1, minWidth: 180 }}>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={newState}
                  label="State"
                  onChange={handleChange}
                >
                  <MenuItem value={state}>{state}</MenuItem>
                </Select>
              </FormControl>
              <Button
                size="small"
                variant="outlined"
                startIcon={<CachedIcon />}
                color="success"
                style={{ marginTop: "12px", marginRight: "15px" }}
                onClick={updateHandler}
              >
                Change
              </Button>
            </div>}
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
              {details.customerName}
            </p>
          </div>
          <div className="shipping-details-wrapper">
            <p className="shipping-details-question clearfix">
              Customer Address
            </p>
            <p className="shipping-details-answer clearfix">
              {details.customerAddress}
            </p>
          </div>
          <div className="shipping-details-wrapper">
            <p className="shipping-details-question clearfix">
              Customer Contact
            </p>
            <p className="shipping-details-answer clearfix">
              {details.customerContact}
            </p>
          </div>
          <div className="shipping-details-wrapper">
            <p className="shipping-details-question clearfix">
              Order Placed Date
            </p>
            <p className="shipping-details-answer clearfix">
              {details.orderDate}
            </p>
          </div>
        </div>
        {productDetails.map((detail, index) => (
          <ProductDetails
            id={detail.productId}
            name={detail.productName}
            price={detail.productPrice}
            Qty={detail.productQty}
            total={detail.subTotal}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

function ProductDetails(props) {
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
          <div className="order-details-item-section-right-row-right">
            {props.id}
          </div>
        </div>
        <div className="order-details-item-section-right-row">
          <div className="order-details-item-section-right-row-left">
            Product Name
          </div>
          <div className="order-details-item-section-right-row-right">
            {props.name}
          </div>
        </div>
        <div className="order-details-item-section-right-row">
          <div className="order-details-item-section-right-row-left">
            Product Price
          </div>
          <div className="order-details-item-section-right-row-right">
            {props.price}
          </div>
        </div>
        <div className="order-details-item-section-right-row">
          <div className="order-details-item-section-right-row-left">
            Product Qty
          </div>
          <div className="order-details-item-section-right-row-right">
            {props.Qty}
          </div>
        </div>
        <div className="order-details-item-section-right-row">
          <div className="order-details-item-section-right-row-left">
            Sub Total
          </div>
          <div className="order-details-item-section-right-row-right">
            {props.total}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
