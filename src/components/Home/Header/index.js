import React from 'react'
import './style.css'
import {  Navbar, Nav , Container} from "react-bootstrap";

const Header = () => {
   return (
     <>

   <Navbar bg="dark" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Pro-Reader</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Login</Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
 <header className = 'home-header'>
 </header>
 </>
   )
   }
export default Header
