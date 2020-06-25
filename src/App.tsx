import React, { FC, useState } from 'react';
import './App.css';
import Content from './components/content/Content';
import SideBar from './components/sidebar/SideBar';

const App: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App wrapper">
      <SideBar toggle={toggle} isOpen={isOpen} />
      <Content toggle={toggle} isOpen={isOpen} />
    </div>
  );
};

export default App;
