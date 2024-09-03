import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from "../src/Components/Home"
import Event from "../src/Components/Event"
import Admin from "../src/Components/Admin"
import Events from "../src/Components/Events"
import Contact from "../src/Components/contactus"
import IdeaHub from './Components/IdeaHub';
import Login from './Components/login';
import Signup from './Components/Regsistor';
import Hub from './Components/IdeaAdmin'

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} extact></Route>
          <Route path="/events" element={<Event/>} extact></Route>
          <Route path="/idea-sub" element={<IdeaHub/>} extact></Route>
          <Route path="event/:id" element={<Events/>} extact></Route>
          <Route path="/admin" element={<Admin/>} extact></Route>
          <Route path="/contact" element={<Contact/>} extact></Route>
          <Route path="/login" element={<Login/>} extact></Route>
          <Route path="/signup" element={<Signup/>} extact></Route>
         <Route path="/adminidea" element={<Hub/>} extact></Route>
         </Routes>
        
      </BrowserRouter>
      <Footer/>
      </>
  );
}

export default App;
