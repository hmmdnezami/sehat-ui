import "./App.css";
import CurrentLocation from "./components/CurrentLocation";
import SignUp from "./components/RiderSignUp";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RiderSignUp from "./components/RiderSignUp";
import DriverSignUp from "./components/DriverSignup";
import BookAmbulance from "./components/BookAmbulance";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<RiderSignUp />} />
        <Route path="/driverSignUp" element={<DriverSignUp />} />
        <Route path="/bookAmbulance" element={<BookAmbulance />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />

        <Route path="/profile" element={<Home />} />
        <Route path="/history" element={<Home />} />

        <Route path="/settings" element={<Home />} />
        <Route path="/logout" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
