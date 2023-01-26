import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import React from 'react'
import logo from "../src/assets/logo.png"

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 100;
`;

const Navlink = styled.li`
  transition: all 0.1s ease-in-out;
  position: relative;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    color: #ffffff;
    border-bottom: 2px solid white;
  }

  /* &::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  } */
`;

const MobileNav = styled.div`
  left: 0;
  top: 120px;
  position: absolute;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s ease-in-out;
  padding-top: 60px;
  height: 100vh;
`;

const MobileNavlink = styled.li`
  transition: all 0.1s ease-in-out;
  color: white;
  text-decoration: none;

  &:active {
    border-bottom: 2px solid white;
  }
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav className="bg-main">
      <div className="h-[120px] px-12 flex justify-between w-full items-center text-white font-main font-semibold max-w-[1400px]">
        {/* MOBILE NAV */}
        <div className="flex items-center">
          <div className="lg:hidden fixed z-10 right-10">
            <Hamburger toggled={isOpen} toggle={handleMenuToggle} />
          </div>
          <MobileNav
            className={`bg-main lg:hidden text-white font-main font-semibold w-full space-y-8 text-3xl ${
              isOpen ? "translate-x-0" : "translate-x-[-100%]"
            } 
            `}
          >
            <MobileNavlink className="lg:hidden">
              <Link to="/">Home</Link>
            </MobileNavlink>
            <MobileNavlink className="lg:hidden">
              <Link to="/Featured">Featured</Link>
            </MobileNavlink>
            <MobileNavlink className="lg:hidden">
              <Link to="/Blog">Blog</Link>
            </MobileNavlink>
            <MobileNavlink className="lg:hidden">
              <Link to="/FAQ">FAQ</Link>
            </MobileNavlink>
            <Link to="/Search">
              <button
                type="button"
                className="bg-pink-400 px-4 py-2 hover:bg-pink-300 transition text-2xl my-4"
              >
                Open App
              </button>
            </Link>
          </MobileNav>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex justify-between w-full items-center">
          <div className="text-white text-2xl font-main">
            <img src={logo} href="/" alt="logo" className="object-cover h-14 w-88"/>
          </div>
          <ul className={`  flex justify-between space-x-8 items-center`} >
            <Navlink>
              <Link to="/">Home</Link>
            </Navlink>
            <Navlink>
              <Link to="/Featured">Featured</Link>
            </Navlink>
            <Navlink>
              <Link to="/Blog">Blog</Link>
            </Navlink>
            <Navlink>
              <Link to="/FAQ">FAQ</Link>
            </Navlink>
            <Navlink>
              <Link to="/Search">
                <button
                  type="button"
                  className="bg-pink-400 px-4 py-2 hover:bg-pink-300 transition"
                >
                  Open App
                </button>
              </Link>
            </Navlink>
          </ul>
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;
