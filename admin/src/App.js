import './App.css';
import{ BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Dashboard from './Pages/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        
      </Routes>
     </Router>
  );
}

export default App;
