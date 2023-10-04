import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./navbar/Navbar";
import DemoDetails from "./components/DemoDetails";
import LaptopDemo from "./componentslaptop/LaptopDemo";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card-info/:id" element={<DemoDetails />} />
        <Route path="/Laptop-CardInfo/:id" element={<LaptopDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
