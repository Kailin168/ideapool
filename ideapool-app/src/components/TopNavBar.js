import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MyContext from '../context/MyContext';


function TopNavBar() {

  const contextData = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            href="#home"
          >IDEA POOL</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              onClick=
              {(e) => {
                e.preventDefault();
                navigate('/');
              }}>
              Home
            </Nav.Link>
            <Nav.Link
              href="/chart"
              onClick={(e) => {
                e.preventDefault();
                navigate('/chart');
              }}>
              Chart
            </Nav.Link>
            <Nav.Link
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigate('/contact');
              }}>
              Contact
            </Nav.Link>
            <Nav.Link
              href="/profile"
              onClick={(e) => {
                e.preventDefault();
                navigate('/profile');
              }}>
              Profile
            </Nav.Link>
            <p style={{ background: "white" }}>{contextData.user.name}</p>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
};

export default TopNavBar;