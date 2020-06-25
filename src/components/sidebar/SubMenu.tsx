import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { FC, useState } from 'react';
import { Accordion, Nav } from 'react-bootstrap';

type SubMenuProps = {
  icon: IconProp;
  title: string;
  items: any[];
};

const SubMenu: FC<SubMenuProps> = props => {
  const { icon, items, title } = props;

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = (): void => {
    setCollapsed(!collapsed);
  };

  return (
    <Nav.Item className={classNames({ open: !collapsed })}>
      <Accordion>
        <Accordion.Toggle as={Nav.Link} variant="link" eventKey="0" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={icon} className="mr-2" />
          {title}
          <FontAwesomeIcon icon={collapsed ? faCaretDown : faCaretUp} className="float-right" />
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0">
          <nav className="nav flex-column">
            {items.map(item => (
              <a
                className={`nav-link nav-item pl-5 ${item === 'Active' ? 'active' : ''} `}
                href="/"
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>
        </Accordion.Collapse>
      </Accordion>
    </Nav.Item>
  );
};

export default SubMenu;
