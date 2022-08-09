/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import { Button, Menu } from "@mantine/core";
import { IconPhoto, IconSettings, IconTrash } from "@tabler/icons";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { VscThreeBars } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../../image/logo.png";

import "./nav.css";
const Navbar = () => {

  const { userInfo  } = useSelector((state) => state.userReducer);
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };

  const logout =() =>{
    localStorage.removeItem("auth_token")
  }
  const handleLogout = () => {
    logout()
    window.location.reload();
  };


  
 
  
  return (
    <>
      <div className="navbar">
        <div onClick={handleMenu} className="menu">
          {open ? (
            <FaTimes className="menu-icon" />
          ) : (
            <VscThreeBars className="menu-icon" />
          )}
        </div>
        <div className="logo">
          <Link to="/"><img src={logo} alt="Logo" /></Link>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/schedule">Add Biography</Link>
            </li>
            <li>
              <Link to="/find-partner">Find partner</Link>
            </li>
          
          </ul>
        </div>
        <div className="icon">
          {userInfo ? (
            <div>
              <Menu shadow="md" width={200}>
                <Menu.Target>
                  <Button>Dashboard</Button>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label>Account</Menu.Label>
                  <Link style={{textDecoration:"none" , color: "#000"}} to="/me">
                  <Menu.Item icon={<IconSettings size={14} />}>
                    My Information
                  </Menu.Item>
                  </Link>
                  <Link style={{textDecoration:"none" , color: "#000"}} to="/me">
                  <Menu.Item icon={<IconPhoto size={14} />}>  Biography</Menu.Item>
                  </Link>
                 
                  <Menu.Item onClick={handleLogout}  color="red" icon={<IconTrash size={14} />}>
                    Log out
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
          ) : (
            <Link to="/account">
              <AiOutlineUser className="menu-icon" />
            </Link>
          )}
        </div>
      </div>
      <div className={open ? "mobile-menu" : "menu-close"}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/schedule">Add Biography</Link>
          </li>
   
          <li>
              <Link to="/find-partner">Find partner</Link>
            </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
