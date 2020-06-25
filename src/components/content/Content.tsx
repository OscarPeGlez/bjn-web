import classNames from 'classnames';
import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router';
import SearchKitchen from '../../screens/SearchKitchen';
import NavBar from './Navbar';

type ContentProps = {
  isOpen: boolean;
  toggle: () => void;
};

const Content: FC<ContentProps> = props => {
  const { isOpen, toggle } = props;
  return (
    <Container fluid className={classNames('content', { 'is-open': isOpen })}>
      <NavBar toggle={toggle} />
      <Switch>
        <Route exact path="/cocina">
          <SearchKitchen />
        </Route>
      </Switch>
    </Container>
  );
};

export default Content;
