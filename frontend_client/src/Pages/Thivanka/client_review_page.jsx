import React, { useState } from "react";
import "../../Css/Thivanka/client_review_page.css";
import "../../Css/Thivanka/home_page.css";
import Item from "../../Assets/item3.jpg";
import Item2 from "../../Assets/item2.jpg";
import NavBar from "../../Components/Thivanka/nav_bar";
import HomeHeader from "../../Components/Thivanka/home_header";
import Footter from "../../Components/Thivanka/footter";
import Rating from "@mui/material/Rating";

function ClientReviewPage() {
  const [active, setActive] = useState(true);
  return (
    <div className="site-main-container">
      <div>
        <NavBar />
      </div>
      <div className="site-body-container">
        <div>
          <HomeHeader />
        </div>
        <div className="site-details-wrapper clearfix">
          <div className="review-form-container">
            <div className="review-form-wrapper">
              {active ? (
                <div>
                  <img
                    src={Item}
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                    alt="items"
                  />

                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      marginTop: "10px",
                    }}
                  >
                    Would you like to share your exercise with others?
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    Product Review
                  </p>

                  <Rating name="size-large" defaultValue={0} size="large" />
                  <br />
                  <br />
                  <textarea
                    rows={5}
                    cols={50}
                    placeholder="Give a comment..."
                    style={{
                      padding: "10px",
                      resize: "none",
                      outline: "none",
                      borderRadius: "5px",
                      fontFamily: "cursive",
                    }}
                  />
                  <br />
                  <button
                    className="order-delete-btn"
                    onClick={() => {
                      setActive(false);
                    }}
                  >
                    Continue
                  </button>
                </div>
              ) : (
                <div>
                  <img
                    src={Item2}
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                    }}
                    alt="items"
                  />

                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      marginTop: "10px",
                    }}
                  >
                    Would you like to recomond this seller?
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "500",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    Seller Rating
                  </p>

                  <Rating name="size-large" defaultValue={0} size="large" />
                  <br />
                  <br />
                  <textarea
                    rows={5}
                    cols={50}
                    placeholder="Give a feedback..."
                    style={{
                      padding: "10px",
                      resize: "none",
                      outline: "none",
                      borderRadius: "5px",
                      fontFamily: "cursive",
                    }}
                  />
                  <br />
                  <button className="order-delete-btn">Submit</button>
                  
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footter />
    </div>
  );
}

export default ClientReviewPage;
