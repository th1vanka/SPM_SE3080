import React, { useState, useEffect } from "react";
import "../../css/Thivanka/to_be_shipped.css";
import "../../css/common.css";
import "../../css/Thivanka/order_table.css";
import NavBar from "../../Components/Thivanka/nav_bar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteSweepRoundedIcon from "@mui/icons-material/DeleteSweepRounded";
function CustomerUsers() {
  const [details, setDetails] = useState([]);
  const state = "Completed";

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = () => {
    axios
      .get(`http://localhost:8000/user/details/getall`)
      .then((res) => {
        if (res.data.status === false) {
          alert(res.data.message);
        } else {
          console.log(res);
          setDetails(res.data);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const search = async (key) => {
    if (key == "") {
      getUserDetails();
    }
    const query = key;
    // Create copy of item list
    var updatedList = [...details];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    // Trigger render with updated values
    setDetails(updatedList);
  };

  return (
    <div className="main-container">
      <NavBar />
      <div className="body-container clearfix">
        <div className="tobeshipped-section-one-container ">
          <div className="tobeshipped-section-one-left ">
            <h3 style={{ marginLeft: "25px", marginRight: "5px" }}>
              Total Users
            </h3>
            <p
              style={{
                marginLeft: "10px",
                color: "red",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {details.length}
            </p>
          </div>
          <div className="tobeshipped-section-one-right">
            <input
              type="search"
              placeholder="Search"
              className="search-box"
              onChange={(e) => search(e.target.value)}
            />
          </div>
        </div>
        <div className="order-section-two-container ">
          <div className="order-table-header-col-1">User ID</div>
          <div className="order-table-header-col-1">Full Name</div>
          <div className="order-table-header-col-1">Email</div>
          <div className="order-table-header-col-1">Country</div>
          <div className="order-table-header-col-1">Mobile</div>
          <div className="order-table-header-col-1">Birth Date</div>

          <div className="order-table-header-col-1">Action</div>
        </div>
        <div className="order-section-three-container ">
          {details.map((detail, index) => (
            <TableRow
              id={detail._id}
              name={detail.name}
              email={detail.email}
              bdate={detail.bdate}
              country={detail.country}
              mobile={detail.mobile}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
function TableRow(props) {
  const navigate = useNavigate();
  const clickHandler = (id) => {
    window.location.reload(false);
    axios
      .get(`http://localhost:8000/user/details/removebyid/${id}`)
      .then((res) => {
        if (res.data.status === false) {
          alert(res.data.message);
        } else {
          console.log(res);
          alert("User is successfully deleted !!");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="order-table-row">
      <div className="order-table-col-1">{props.id}</div>
      <div className="order-table-col-1">{props.name}</div>
      <div className="order-table-col-1">{props.email}</div>
      <div className="order-table-col-1">{props.country}</div>
      <div className="order-table-col-1">{props.mobile}</div>
      <div className="order-table-col-1">{props.bdate}</div>

      <div className="order-table-col-1">
        <DeleteSweepRoundedIcon
          fontSize="large"
          style={{ color: "red" }}
          onClick={() => clickHandler(props.id)}
        />
      </div>
    </div>
  );
}

export default CustomerUsers;
