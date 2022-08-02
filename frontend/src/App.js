import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AcUnitIcon from '@mui/icons-material/AcUnit';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AcUnitIcon fontSize='large'/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
