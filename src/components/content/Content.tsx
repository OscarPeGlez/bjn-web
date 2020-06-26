import classNames from 'classnames';
import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { connect, ConnectedProps } from 'react-redux';
import { Route, RouteComponentProps, withRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../screens/Home';
import Search from '../../screens/Search';
import { RootState } from '../../store/reducers';
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
  const { isOpen, toggle } = props;

  return (
    <Container fluid className={classNames('content', { 'is-open': isOpen })}>
      <NavBar toggle={toggle} />
      <BrowserRouter>
        <Route path="/inicio" exact component={Home} />
        <Route path="/cocina" exact component={Search} />
        <Route path="/mobiliario" component={Search} />
        <Route path="/otros" component={Search} />
        <Route path="/manteleria" component={Search} />
        <Route path="/rentas" component={Search} />
      </BrowserRouter>
    </Container>
  );
};
export default withRouter(connector(Content));
