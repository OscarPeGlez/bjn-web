import classNames from 'classnames';
import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { connect, ConnectedProps } from 'react-redux';
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../screens/Home';
import Rents from '../../screens/Rents';
import Search from '../../screens/Search';
import { RootState } from '../../store/reducers';
import Page404 from '../shared/Page404';
import NavBar from './Navbar';

type ContentProps = {
  isOpen: boolean;
  toggle: () => void;
};

const connector = connect((state: RootState) => ({
  counter: state.countReducer.count,
}));

type ReduxProps = ConnectedProps<typeof connector>;

type Props = RouteComponentProps & ContentProps & ReduxProps;

const Content: FC<Props> = props => {
  const { isOpen, toggle, counter } = props;
  const contenClass = isOpen ? 'content-open' : 'content';
  return (
    <Container fluid className={classNames(contenClass, { 'is-open': isOpen })}>
      {counter <= 1 && <NavBar toggle={toggle} />}
      <div className="padding-topbar-xs hidden-lg hidden-md" />
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/">
            <Redirect to="/home" />
          </Route> */}
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/cocina">
            <Search />
          </Route>
          <Route path="/mobiliario">
            <Search />
          </Route>
          <Route path="/otros">
            <Search />
          </Route>
          <Route path="/manteleria">
            <Search />
          </Route>
          <Route path="/rentas">
            <Rents />
          </Route>
          <Route path="/404">
            <Page404 />
          </Route>
          <Route>
            <Redirect to="/404" />
          </Route>
        </Switch>
      </BrowserRouter>
    </Container>
  );
};
export default withRouter(connector(Content));
