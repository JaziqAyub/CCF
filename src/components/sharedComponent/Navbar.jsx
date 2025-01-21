import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/logo.png";
import { FaHome, FaInfo } from "react-icons/fa";
import { TbLogin2 } from "react-icons/tb";
import { MdCreate, MdDelete, MdOutlineLocalPhone } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { ContextJ } from "../../context/Store";
import { LuUserRound } from "react-icons/lu";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
// import { DeleteUser } from "./DeleteUser";

const Navbar = () => {
  // const username = props.user;
  // const {username, loading} = useContext(ContextJ)
  const { username } = useContext(ContextJ);

  const [showSideNav, setShowSideNav] = useState(false);

  function handleNav() {
    setShowSideNav(!showSideNav);
  }

  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  return (
    <div className="navbar">
      <div className="logowhole">
        <Link to="/">
          <img src={logo} alt="Logo" Call />
        </Link>
      </div>
      <span>
        Calligraphy Corner <span>.</span>
      </span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>

      <div className="menubar " onClick={handleNav}>
        <GiHamburgerMenu />

        {showSideNav && (
          <ul className="animate__animated animate__slideInLeft">
            <li>
              <Link to="/admin/profile">
                <LuUserRound /> Admin Profile
              </Link>
            </li>
            <li>
              <Link to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/user/login">
                <TbLogin2 /> Login
              </Link>
            </li>
            <li>
              <Link to="/user/register">
                <MdCreate /> Register
              </Link>
            </li>
            <li>
              <Link to="/about">
                <IoIosInformationCircleOutline /> About
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <MdOutlineLocalPhone /> Contact
              </Link>
            </li>
            <li
              onClick={() => {
                navigate(`user/delete/${userId}`);
              }}
            >
              <Link>
                <MdDelete /> Delete Account
              </Link>
            </li>
            <li>
              {username ? (
                <Link to="">
                  <RiLogoutBoxLine /> Logout
                </Link>
              ) : (
                ""
              )}
            </li>
          </ul>
        )}
      </div>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="login-container">
        {username ? (
          `Welcome ${username}`
        ) : (
          <button className="login-button">
            <Link to="/user/login">Login</Link>
          </button>
        )}
      </div>

      <div onClick={handleNav} className="dropdown">
        <FiUser />
        {showSideNav && (
          <ul>
            <li>
              <Link to="/admin/profile">
                <LuUserRound /> Admin Profile
              </Link>
            </li>
            <li>
              <Link to="/user/login">
                <TbLogin2 /> Login
              </Link>
            </li>
            <li>
              <Link to="/user/register">
                <MdCreate /> Register
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FaInfo /> About
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <BiSolidPhoneCall /> Contact
              </Link>
            </li>
            {/* another way of giving userid in param and etc as we used to do
            mainly in the dedicaed page, we can do those things here as well : */}
            <li
              onClick={() => {
                navigate(`user/delete/${userId}`);
              }}
            >
              <Link>
                <MdDelete /> Delete Account
              </Link>
            </li>
            <li>
              {username ? (
                <Link to="/contact">
                  <RiLogoutBoxLine /> Logout
                </Link>
              ) : (
                ""
              )}
            </li>
          </ul>
        )}
        <span className="cart">
          <IoCartOutline />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
