import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { RootState } from '../../store/reducers';
import AddElement from '../Form/AddElement';
import AddRent from '../Form/AddRent';

type NavBarProps = {
  toggle: () => void;
};

const connector = connect((state: RootState) => ({
  counter: state.countReducer.count,
}));

type ReduxProps = ConnectedProps<typeof connector>;

type Props = RouteComponentProps & NavBarProps & ReduxProps;

const NavBar: FC<Props> = props => {
  const { toggle, counter } = props;

  return (
    <Navbar bg="light" className="navbar shadow-sm p-3 mb-5 bg-white rounded" expand>
      <Button variant="outline-info" onClick={toggle}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto" navbar>
          {counter === 1 ? <AddElement /> : <AddRent />}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(connector(NavBar));
