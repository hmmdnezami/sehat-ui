import "./App.css";
import Login from "./components/Login";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import RiderSignUp from "./components/RiderSignUp";
import DriverSignUp from "./components/DriverSignup";
import BookAmbulance from "./components/BookAmbulance";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import AllAmbulances from "./pages/AllAmbulances";
import Booking from "./pages/Booking";
import HospitalInfo from "./pages/HospitalInfo";
import AddHospital from "./pages/AddHospital";
import AddAmbulance from "./pages/AddAmbulance";

function App() {
  const token = localStorage.getItem("authToken");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* <Route path="/home" element={token ? <Home /> : <Navigate to="/" />} /> */}
        <Route path="/home" element={<Home />} />

        <Route path="/signup" element={<RiderSignUp />} />
        <Route path="/driverSignUp" element={<DriverSignUp />} />
        <Route path="/ambulances/:city" element={<AllAmbulances />} />
        <Route path="/booking" element={<Booking />} />
        
        <Route path="/addHospital" element={<AddHospital />} />
        <Route path="/addAmbulance" element={<AddAmbulance />} />

        <Route path="/healthcare/:healthCardId" element={<HospitalInfo />} />


        <Route path="/booking" element={<Booking />} />
        {/* <Route path="/bookAmbulance" element={<BookAmbulance />} /> */}

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
