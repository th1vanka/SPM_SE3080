import './App.css';
import{ BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Dashboard from './Pages/Thivanka/dashboard';
import Orders from './Pages/Thivanka/order_page';
import ToBeShipped from './Pages/Thivanka/to_be_shipped_page';
import Shipped from './Pages/Thivanka/shipped';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recent/order" element={<Orders />} />
        <Route path="/to-be-shipped/order" element={<ToBeShipped />} />
        <Route path="/shipped/order" element={<Shipped />} />
      </Routes>
    </Router>
  );
}

export default App;
