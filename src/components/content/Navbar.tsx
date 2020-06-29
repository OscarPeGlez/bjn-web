import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { RouteComponentProps, withRouter } from 'react-router';
import AddElement from '../Form/AddElement';

type NavBarProps = {
  toggle: () => void;
};

type Props = RouteComponentProps & NavBarProps;

const NavBar: FC<Props> = props => {
  const { toggle, location } = props;
  const path = location.pathname;
  console.log(location);

  return (
    <Navbar bg="light" className="navbar shadow-sm p-3 mb-5 bg-white rounded" expand>
      <Button variant="outline-info" onClick={toggle}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" navbar>
          {path !== '/404' && <AddElement />}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(NavBar);
