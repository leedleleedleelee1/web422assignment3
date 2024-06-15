import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

const MainNav = () => (
  <Navbar className="fixed-top navbar-dark bg-dark">
    <Container>
      <Navbar.Brand>Frank</Navbar.Brand>
      <Nav className="me-auto">
        <Link href="/" passHref>
          <Nav.Link as="div">Listings</Nav.Link>
        </Link>
        <Link href="/about" passHref>
          <Nav.Link as="div">About</Nav.Link>
        </Link>
      </Nav>
    </Container>
    <br />
    <br />
  </Navbar>
);

export default MainNav;
