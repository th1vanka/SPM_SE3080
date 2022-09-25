import './App.css';
import{ BrowserRouter as Router, Route,Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<h1>hi</h1>}/>
      </Routes>
     </Router>
  );
}

export default App;
