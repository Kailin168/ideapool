import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MyContext from '../context/MyContext';


function TopNavBar() {

  const contextData = useContext(MyContext);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">IDEA POOL</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/chart">Chart</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <p style={{background: "white" }}>{contextData.user.name}</p>
          </Nav>
        </Container>
      </Navbar>
      </>
  )};

  export default TopNavBar;