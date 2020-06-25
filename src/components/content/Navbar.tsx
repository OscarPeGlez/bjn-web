import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';

type NavBarProps = {
  toggle: () => void;
};

const NavBar: FC<NavBarProps> = props => {
  const { toggle } = props;
  return (
    <Navbar bg="light" className="navbar shadow-sm p-3 mb-5 bg-white rounded" expand>
      <Button variant="outline-info" onClick={toggle}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" navbar>
          <Nav.Link href="/cocina">page</Nav.Link>
          <Nav.Link href="/manteleria">page</Nav.Link>
          <Nav.Link href="/mobiliario">page</Nav.Link>
          <Nav.Link href="/otros">page</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
