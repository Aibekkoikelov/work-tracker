import Layout from './components/Layout'
import './App.scss';
import Login from "./components/Pages/Login";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
function App() {
  const loggedIn = true;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact  path="/" element={loggedIn?<Navigate to="/dashboard"/>:<Login/>} />
          <Route exact path="/dashboard" element={!loggedIn ? <Navigate to="/" /> : <Layout />} />
          <Route path="/signup" element={<Layout />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
