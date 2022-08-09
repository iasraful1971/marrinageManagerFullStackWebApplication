/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../image/logo.png";
import "./footer.css";
const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="margin-container">
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="links-socials">
                    <div className="links">
                        <Link to="/home">Home</Link>
                        <Link to="/account">Get Registered</Link>
                        <Link to="/find-partner">Find Partner</Link>
                        <Link to="/schedule">Add Biography</Link>
                    <Link to="/policy">Policy</Link>
                    </div>
                    <div className="socials">
                        <FaFacebook className='social-icon-style'/>
                        <FaGithub className='social-icon-style'/>
                        <FaLinkedin className='social-icon-style'/>
                        <FaInstagram className='social-icon-style'/>
                        <FaTwitter className='social-icon-style'/>
                    </div>
                </div>
                <div className="border"></div>


                <div className="copy-right">
                    <div className='copy'>Copyright 2022 @  <a target="_blank" href="#">Md Asraful</a></div>
                    <div className='browser-area'>
                        <Link to="/home">Browser policy</Link>
                        <Link to="/account">Our Support</Link>
                    </div>
                </div>
            </div>
        </div>
           
        </>
    );
};

export default Footer;