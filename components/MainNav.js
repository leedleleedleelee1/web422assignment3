import { Container, Nav, Navbar } from 'react-bootstrap';
import Link from 'next/link';

const MainNav = () => (
  <Navbar className="fixed-top navbar-dark bg-dark">
    <Container>
      <Navbar.Brand>Student Name</Navbar.Brand>
      <Nav className="me-auto">
        <Link href="/" passHref legacyBehavior>
          <Nav.Link>Listings</Nav.Link>
        </Link>
        <Link href="/about" passHref legacyBehavior>
          <Nav.Link>About</Nav.Link>
        </Link>
      </Nav>
    </Container>
    <br />
    <br />
  </Navbar>
);

export default MainNav;
