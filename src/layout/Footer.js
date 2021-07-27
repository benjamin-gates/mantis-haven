import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import instagram from "./instagram.png";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
console.log("Nav", Nav);
function Footer(){
    return <Navbar fixed="bottom" bg="dark" variant="dark">
    <Container>
    <Col style={{color: "grey", alignself:"center"}}>
    <Nav className="me-auto"> <Nav.Item>
      Follow me on Instagram! </Nav.Item><Nav.Link href="https://www.instagram.com/mantis_haven/?hl=en" target="_blank"><Image src={instagram} width="25px" height="25px"/></Nav.Link>
    </Nav>
    </Col>
    </Container>
  </Navbar>
}

export default Footer;