import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import View from './Pages/View';
import './App.css';
import UserProvider from "./providers/UserContext";

function App() {

  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/accounts" element={<Home />} />
            <Route exact path={`/accounts/:id`} element={<View />} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
