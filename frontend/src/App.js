import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./navbar/Navbar";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/rooms" element={ <Rooms /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/signup" element={ <SignUp /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
    
  );
}

export default App;
