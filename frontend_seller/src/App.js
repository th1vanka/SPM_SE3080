import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <center>
                <h1>Hi</h1>
              </center>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
