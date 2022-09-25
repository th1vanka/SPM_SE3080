import React from "react";
import "../../Css/Thivanka/home_page.css";
import NavBar from "../../Components/Thivanka/nav_bar";
import HomeHeader from "../../Components/Thivanka/home_header";
import Item from "../../Assets/item.jpg";
import Item2 from "../../Assets/item2.jpg";
import Item3 from "../../Assets/item3.jpg";
import Product from "../../Components/Thivanka/product";
import Footter from "../../Components/Thivanka/footter";
 
function HomePage() {
  return (
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
          <div className="site-details-cat-topic">
            <p
              style={{
                fontSize: "18px",
                fontWeight: "700",
                marginBottom: "5px",
              }}
            >
              Just Arrived
            </p>
            <hr style={{}} />
          </div>

          <Product
            pic={Item}
            category="HERBS AND SPICESG"
            item_name="CINNAMON"
            item_price="1500.00"
            rate="4"
          />
          <Product
            pic={Item}
            category="HERBS AND SPICES"
            item_name="CLOVES (KARAMBUNATTI)"
            item_price="1500.00"
            rate="4"
          />
          <Product
            pic={Item2}
            category="GARDENING and PLANTING"
            item_name="Wooden Planter small"
            item_price="1500.00"
            rate="4"
          />
          <Product
            pic={Item3}
            category="HERBS AND SPICES"
            item_name="PEPPER"
            item_price="1500.00"
            rate="3"
          />
          <Product
            pic={Item2}
            category="GARDENING and PLANTING"
            item_name="Wooden Planter small "
            item_price="1500.00"
            rate="4"
          />
          <Product
            pic={Item}
            category="HERBS AND SPICES"
            item_name="CARDAMOM"
            item_price="1500.00"
            rate="4"
          />
          <Product
            pic={Item2}
            category="GARDENING and PLANTING"
            item_name="Wooden Planter small"
            item_price="1500.00"
            rate="2"
          />
          <Product
            pic={Item3}
            category="HERBS AND SPICES"
            item_name="CHILLI"
            item_price="1500.00"
            rate="3"
          />
          <Product
            pic={Item2}
            category="GARDENING and PLANTING"
            item_name="Wooden Planter small"
            item_price="1500.00"
            rate="1"
          />
          <Product
            pic={Item3}
            category="HERBS AND SPICES"
            item_name="CUMIN"
            item_price="1500.00"
            rate="5"
          />
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
        <div className="site-details-wrapper clearfix">
          <div className="site-details-cat-topic">
            <p
              style={{
                fontSize: "18px",
                fontWeight: "700",
                marginBottom: "5px",
              }}
            >
              Most Popular
            </p>
            <hr />
          </div>
          <Product
            pic={Item2}
            category="GARDENING and PLANTING"
            item_name="Wooden Planter small "
            item_price="1500.00"
            rate="4"
          />
          <Product
            pic={Item}
            category="GARDENING and PLANTING"
            item_name="Wooden Planter small"
            item_price="1500.00"
            rate="4"
          />
          <Product
            pic={Item2}
            category="GARDENING and PLANTING"
            item_name="Wooden Planter small"
            item_price="1500.00"
            rate="4"
          />
          <Product
            pic={Item3}
            category="GARDENING and PLANTING"
            item_name="Wooden Planter small"
            item_price="1500.00"
            rate="4"
          />
          <Product
            pic={Item3}
            category="GARDENING and PLANTING"
            item_name="Wooden Planter small"
            item_price="1500.00"
            rate="4"
          />
        </div>
        <Footter />
      </div>
    </div>
  );
}
export default HomePage;

function Category(props) {
  return (
    <div>
      <img
        src={Item}
        alt="Category"
        width="200px"
        height="130px"
        style={{ margin: "15px",borderRadius:"8px" }}
      />
      <div
        style={{
          height: "40px",
          width: "200px",
          backgroundColor: "black",
          fontSize: "19px",
          color: "white",
          fontWeight: "600",
          marginTop: "-112px",
          marginLeft: "15px",
          position: "relative",
          opacity: 0.7,
          paddingTop: "12px",
        }}
      >
        <center>
          <p>{props.name}</p>
        </center>
      </div>
    </div>
  );
}
