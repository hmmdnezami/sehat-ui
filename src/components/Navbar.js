import React, { useState } from "react";
import { People, PersonCircle } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/userActions";
import { toast } from "react-toastify";

const Navbar = () => {
  const dispatch = useDispatch();
  const menu = ["Profile", "History", "Settings", "Logout"];

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    toast.success("Logout Successful");
    console.log("logout button clcicked");
  };

  return (
    <div className=" bg-black text-white p-3">
      <div className="flex justify-between ">
        <div className=" flex gap-4">
          <Link to="/home">Home</Link>
          <Link to="/aboutUs">About Us</Link>
          <Link to="/contactUs">Contact Us</Link>
        </div>
        <div>
          <PersonCircle
            fill="white"
            height={20}
            width={20}
            onClick={() => setOpen(!open)}
          />
          {open && (
            <div className=" bg-white shadow-md p-2 w-36 absolute right-0 top-14 border border-black ">
              <ul>
                {menu.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => {
                      if (item === "Logout") {
                        handleLogout();
                      } else {
                        navigate(`/${item}`);
                      }
                    }}
                    className="p text-lg text-black text-center cursor-pointer hover:bg-blue-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
