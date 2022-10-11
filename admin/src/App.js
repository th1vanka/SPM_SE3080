import './App.css';
import{ BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Dashboard from './Pages/Thivanka/dashboard';
import Orders from './Pages/Thivanka/order_page';
import ToBeShipped from './Pages/Thivanka/to_be_shipped_page';
import Shipped from './Pages/Thivanka/shipped_page';
import Report from './Pages/Thivanka/report_page';
import OrderDetails from './Components/Thivanka/order_details';
import Completed from './Pages/Thivanka/complete_order';

//naween
import Complaints from './Pages/Naween/Complaints';
import SellerDetalils from './Pages/Naween/SellerDetalils';
import SellerReply from './Pages/Naween/SellerReply';
import TestReply from './Pages/Naween/TestReply';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recent/order" element={<Orders />} />
        <Route path="/to-be-shipped/order" element={<ToBeShipped />} />
        <Route path="/shipped/order" element={<Shipped />} />
        <Route path="/complete/order" element={<Completed />} />
        <Route path="/order/report" element={<Report />} />
        <Route path="/order/details/:oid/:state" element={<OrderDetails />} />

        <Route path="/complaints" element={<Complaints/>} />
        <Route path="/SellerDetalils" element={<SellerDetalils></SellerDetalils>} />
        <Route path="/SellerReply" element={<SellerReply/>} />
        <Route path="/test" element={<TestReply/>} />
      </Routes>
    </Router>
  );
}

export default App;
