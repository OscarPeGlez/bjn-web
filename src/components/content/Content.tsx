import classNames from 'classnames';
import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { connect, ConnectedProps } from 'react-redux';
import { Route, RouteComponentProps, withRouter, Redirect, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../screens/Home';
import Rents from '../../screens/Rents';
import Search from '../../screens/Search';
import { RootState } from '../../store/reducers';
import NavBar from './Navbar';
import Page404 from '../shared/Page404';

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
  const { isOpen, toggle } = props;
  const contenClass = isOpen ? 'content-open' : 'content';
  return (
    <Container fluid className={classNames(contenClass, { 'is-open': isOpen })}>
      <NavBar toggle={toggle} />
      <div className="padding-topbar-xs hidden-lg hidden-md" />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cocina" exact component={Search} />
          <Route path="/mobiliario" component={Search} />
          <Route path="/otros" component={Search} />
          <Route path="/manteleria" component={Search} />
          <Route path="/rentas" component={Rents} />
          <Route path="/404" component={Page404} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </Container>
  );
};
export default withRouter(connector(Content));
