
import logo from "../../../assets/logo.png";
import moment from "moment";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import "./Header.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import { AuthContext } from "../../../Providers/AuthProviders";
import React, { useContext } from "react";


const Header = () => {
  const {user,   logOut} = useContext(AuthContext);
const handleLogOut = () =>{
  logOut()
  .then(() =>{})
  .catch(error => console.log(error))
}

  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex header-title py-3 px-2 rounded mb-2">
        <Button variant="danger py-2 px-3">Latest</Button>
        <Marquee speed={"51"} className="">
          I can be a React component, multiple React components, or just some
          text. I can be a React component, multiple React components, or just
          some text.
        </Marquee>
      </div>

      <Navbar collapseOnSelect expand="lg">
        <Container>
         
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
                <Link to="/category/0">Home</Link>
             
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
            {user && 
              <FaUserCircle style={{fontSize:"2rem"}}></FaUserCircle>
          }
             
             {user ? <Button onClick={handleLogOut} variant="secondary py-2 px-3">Log Out</Button>:
              <Link to="/login"><Button variant="secondary py-2 px-3">Login</Button></Link>
              }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </Container>
  );
};

export default Header;
