import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function TopNavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">IDEA POOL</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Chart">Chart</Nav.Link>
            <Nav.Link href="ContactPage">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )};

  export default TopNavBar;