import React, { FC, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import './App.css';
import Content from './components/content/Content';
import SideBar from './components/sidebar/SideBar';
import { RootState } from './store/reducers';

const connector = connect((state: RootState) => ({
  counter: state.countReducer.count,
}));

type ReduxProps = ConnectedProps<typeof connector>;

type Props = RouteComponentProps & ReduxProps;

const App: FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="App wrapper">
        <SideBar toggle={toggle} isOpen={isOpen} />
        <Content toggle={toggle} isOpen={isOpen} />
      </div>
    </>
  );
};

export default withRouter(connector(App));
