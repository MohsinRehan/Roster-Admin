import React from "react";
import { Accordion } from "react-bootstrap";
import { BiSolidDashboard } from "react-icons/bi";
import { MdInventory2 } from "react-icons/md";
import {BiSolidImage} from "react-icons/bi"
import {FaTimes} from "react-icons/fa";
import {FaBars} from "react-icons/fa"
import { NavLink } from "react-router-dom";
import {ROUTES} from '../../../pages/routes'
import { useState } from "react";

function LeftSideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <div className="menu-icon" onClick={toggleNavbar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav  className={`NavBar  text-white menu  ${isOpen ? "open" : ""}`}>
        <h6 className="text-white ml-1 p-3">LOGO</h6>
        <hr className="text-white mx-2"></hr>
        
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><span><BiSolidDashboard /></span>Dashboard</Accordion.Header>
        <Accordion.Body className="d-flex flex-column gap-2 " >
          <NavLink className="text-white text-decoration-none mx-4" to={ROUTES.HOME} >HOME</NavLink>
          <NavLink className="text-white text-decoration-none mx-4" to={ROUTES.LOGIN} >SIGN In</NavLink>
          <NavLink className="text-white text-decoration-none mx-4" to={ROUTES.SIGN_UP} >SIGN UP</NavLink>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    <p className="text-white p-3">PAGES</p>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header><NavLink className="text-white text-decoration-none" to={ROUTES.SALARY}><span><BiSolidDashboard /></span>Employee</NavLink></Accordion.Header>
        <Accordion.Body className="d-flex flex-column gap-2 " >
          <NavLink className="text-white text-decoration-none mx-4" to={ROUTES.HOME} >HOME</NavLink>
          <NavLink className="text-white text-decoration-none mx-4" to={ROUTES.LOGIN} >SIGN In</NavLink>
          <NavLink className="text-white text-decoration-none mx-4" to={ROUTES.SIGN_UP} >SIGN UP</NavLink>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><span><BiSolidDashboard /></span>Shifts</Accordion.Header>
        
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><span><MdInventory2 /> </span>         Inventory</Accordion.Header>
        
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><span><BiSolidImage /> </span> Berichte</Accordion.Header>
       
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><span><BiSolidImage /></span>          Salary</Accordion.Header>
        
      </Accordion.Item>
    </Accordion>
      </nav>
    </>
  );
}

export default LeftSideBar;
