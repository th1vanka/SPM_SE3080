import React, { useState } from "react";
import "../Css/item_page.css";
import NavBar from "../Components/nav_bar";
import Item from "../Assets/item.jpg";
import Rating from "@mui/material/Rating";
import Review from "../Components/review";
import HomeHeader from "../Components/home_header";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function ItemPage() {
  const [active, setActive] = useState(true);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [status] = useState(true);

  const [count, setCount] = useState(0);
  const disHandler = () => {
    setActive(true);
    setActive1(false);
    setActive2(false);
  };
  const addDisHandler = () => {
    setActive(false);
    setActive1(true);
    setActive2(false);
  };

  const reviewHandler = () => {
    setActive(false);
    setActive1(false);
    setActive2(true);
  };

  const countAddHandler = () => {
    setCount(count + 1);
  };
  const countRemoveHandler = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

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
          <div className="item-details-main-container ">
            <div className="item-image-wrapper clearfix">
              <img
                src={Item}
                alt="Product"
                width="250px"
                height="200px"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="item-detail-wrapper">
              <div className="item-detail-header">
                <p style={{ fontSize: "25px", fontWeight: "bold" }}>
                  Wooden Planter small
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    marginTop: "2px",
                    marginBottom: "5px",
                  }}
                >
                  GARDENING and PLANTING
                </p>
                <Rating
                  name="half-rating"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
              </div>
              <div className="item-detail-body">
                <div className="item-detail-question">
                  <p>Status</p>
                  <p>Stock</p>
                  <p>Price FOB in USD</p>
                  <p>Shipping Fee</p>
                </div>
                <div className="item-detail-answer">
                  <p>
                    {status ? (
                      <p style={{ color: "green" }}>Available</p>
                    ) : (
                      <p style={{ color: "red" }}>Unavailable</p>
                    )}
                  </p>
                  <p>21 Items</p>
                  <p>$ 20</p>
                  <p>$ 20</p>
                </div>
              </div>
              <div className="item-cart-container">
                <div className="item-cart-count">
                  <RemoveIcon
                    onClick={countRemoveHandler}
                    className="item-cart-action-btn"
                    fontSize="small"
                  />
                  <p
                    style={{
                      marginRight: "7px",
                      marginLeft: "7px",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {count}
                  </p>
                  <AddIcon
                    onClick={countAddHandler}
                    className="item-cart-action-btn"
                    fontSize="small"
                  />
                </div>
                <div className="item-cart-add-btn">
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      marginTop: "3px",
                      marginRight: "1px",
                    }}
                  >
                    ADD TO
                  </p>
                  <ShoppingCartIcon
                    className="cart-add-btn-icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="more-item-details-main-container">
            <div className="more-item-details-header-wrapper">
              <div
                onClick={disHandler}
                className={
                  active
                    ? "more-item-details-header active-header"
                    : "more-item-details-header"
                }
              >
                Discription
              </div>
              <div
                onClick={addDisHandler}
                className={
                  active1
                    ? "more-item-details-header active-header"
                    : "more-item-details-header"
                }
              >
                Seller Details
              </div>
              <div
                onClick={reviewHandler}
                className={
                  active2
                    ? "more-item-details-header active-header"
                    : "more-item-details-header"
                }
              >
                Reviews
              </div>
            </div>
            <div className="more-item-details-body-wrapper">
              {active ? (
                <div className="more-item-details-body">
                  Long ago in India there was an old deserted village. Empty
                  were the old houses, streets and shops. The windows were open,
                  the stairs broken. Making it one very fine place for mice to
                  run around, you can be sure! In fact, the mice had been
                  happily living in this area for hundreds of years, even before
                  the people had come in the first place to build a village and
                  then left. Long ago in India there was an old deserted
                  village. Empty were the old houses, streets and shops. The
                  windows were open, the stairs broken. Making it one very fine
                  place for mice to run around, you can be sure! In fact, the
                  mice had been happily living in this area for hundreds of
                  years, even before the people had come in the first place to
                  build a village and then left.
                </div>
              ) : active1 ? (
                <div className="more-item-details-body">
                  All the elephants were thinking about as they marched was how
                  good it would be to jump in that lake for a cool swim. They
                  did not know that as they marched through the village, those
                  big elephant feet were stamping down on the web of mazes and
                  tunnels the mice had made. What a mess the elephants left
                  behind! The mice quickly held a meeting. “If the herd comes
                  back this way again, our community is doomed!” cried one
                  mouse.
                </div>
              ) : (
                <div className="more-item-details-body">
                  <Review
                    rate="4"
                    name="Paryag Creation"
                    review="Long ago in India there was an old deserted village. Empty were the old houses, streets and shops. The windows were open, the stairs broken. Making it one very fine place for mice to run around, you can be sure!"
                    date="2017-01-01"
                  />
                  <Review
                    rate="5"
                    name="Paryag Creation"
                    review="Long ago in India there was an old deserted village. Empty were the old houses, streets and shops. The windows were open, the stairs broken. Making it one very fine place for mice to run around, you can be sure!"
                    date="2017-01-01"
                  />
                 

                  <div className="client-review-component-container">hi</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
