import React from "react";
import { Button } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from "../QZone/QZone";

import bg from '../../../assets/bg.png'
const RightNav = () => {
  return (
    <div>
    <div className="w-75 mb-5">
    <h4 className="mb-3">Login With</h4>
      <Button variant="outline-primary" className="mb-2 px-3 py-2  w-100"> <FaGoogle />Login with Google</Button>
      <Button variant="outline-secondary" className="px-3 py-2 w-100"> <FaGithub/>  Login with Github </Button>

    
    </div>

      <div>
        <h4 className="mb-3">Find Us On</h4>

        <ListGroup className="w-75">
      <ListGroup.Item><FaFacebook />  Facebook </ListGroup.Item>
      <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
      <ListGroup.Item>  <FaInstagram /> Instagram</ListGroup.Item>
  
    </ListGroup>
      </div>
      <QZone></QZone>

      <div className="w-75 mt-3 position-relative">
       <img src={bg} alt=""  className="img-fluid"/>
    <div className="position-absolute top-0 start-10 text-center ">
    <h2 className="pt-4 text-white">Create an Amazing Newspaper</h2>
    <p className="text-white px-3 pt-2">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
    <Button variant="danger py-2 px-4 mt-4">Learn More</Button>
    </div>
      </div>
    </div>
  );
};

export default RightNav;
