import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/home_page";
import ItemPage from "./Pages/item_page";
import ShoppingCart from "./Pages/shopping_cart";
import Order from "./Pages/order_page";
import FeedbackPage from "./Pages/feedback_page";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item" element={<ItemPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/review" element={<FeedbackPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
