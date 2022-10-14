import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Thivanka/home_page";
import ItemPage from "./Pages/Thivanka/item_page";
import ShoppingCart from "./Pages/Thivanka/shopping_cart";
import Order from "./Pages/Thivanka/order_page";
import FeedbackPage from "./Pages/Thivanka/feedback_page";
import ToBeShippedPage from "./Pages/Thivanka/to_be_shipped_page";
import ShippedPage from "./Pages/Thivanka/shipped_item_page";
import ClientReviewPage from "./Pages/Thivanka/client_review_page";
import Login from "./Pages/Janani/login_page";
import Regitstration from "./Pages/Janani/registration_page";
import UserProfileHome from "./Pages/Janani/user_profile_home";
import UserProfileNav from "./Pages/Janani/user_profile_nav";
import UserProfileAddressBook from "./Pages/Janani/user_profile_address";
import UserProfileAddAddress from "./Pages/Janani/address_book_pages/user_profile_add_address";
import UserProfileAddPayment from "./Pages/Janani/payment_options_pages/user_profile_add_payment";
import UserProfilePaymentOptions from "./Pages/Janani/user_profile_payment";
import UserProfileChangePassword from "./Pages/Janani/user_profile_change_password";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route
            path="/item/:category/:name/:price/:rate/:id"
            element={<ItemPage />}
          />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/review" element={<FeedbackPage />} />
          <Route path="/to-be-shipped" element={<ToBeShippedPage />} />
          <Route path="/shipped" element={<ShippedPage />} />
          <Route path="/give/review/:itemId/:oid" element={<ClientReviewPage />} />
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Regitstration />} />
          <Route path="/profile" element={<UserProfileHome />} />
          <Route path="/profile/nav" element={<UserProfileNav />} />
          <Route
            path="/profile/address-book"
            element={<UserProfileAddressBook />}
          />

          <Route
            path="/profile/address-book/add"
            element={<UserProfileAddAddress />}
          />

          <Route
            path="/profile/payment"
            element={<UserProfilePaymentOptions />}
          />

          <Route
            path="/profile/payment/add"
            element={<UserProfileAddPayment />}
          />

          <Route
            path="/profile/change-password"
            element={<UserProfileChangePassword />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
