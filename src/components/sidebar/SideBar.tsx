import {
  faSquare,
  faTruckMoving,
  faWineBottle,
  faBlender,
  faChair,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React, { FC } from 'react';
import { Button, Nav } from 'react-bootstrap';
import { RouteComponentProps, withRouter } from 'react-router';

type SideBarProps = {
  isOpen: boolean;
  toggle: () => void;
};

type Props = RouteComponentProps & SideBarProps;

const SideBar: FC<Props> = props => {
  const { isOpen, toggle, location } = props;
  console.log(location);

  return (
    <div className={classNames('sidebar', { 'is-open': isOpen })}>
      <div className="sidebar-header">
        <Button variant="link" onClick={toggle} style={{ color: '#fff' }} className="mt-4">
          <FontAwesomeIcon icon={faTimes} pull="right" size="lg" />
        </Button>
        <h3>JN INVENTARIO</h3>
      </div>

      <Nav className="flex-column pt-2 mr-auto">
        <p className="ml-3 font-weight-bold">Menu</p>
        <Nav.Item>
          <Nav.Link href="/cocina">
            <FontAwesomeIcon icon={faBlender} className="mr-2" />
            Cocina
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/manteleria">
            <FontAwesomeIcon icon={faSquare} className="mr-2" />
            Manteleria
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/mobiliario">
            <FontAwesomeIcon icon={faChair} className="mr-2" />
            Mobiliario
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/otros">
            <FontAwesomeIcon icon={faWineBottle} className="mr-2" />
            Otros
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="/rentas">
            <FontAwesomeIcon icon={faTruckMoving} className="mr-2" />
            Rentas
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default withRouter(SideBar);
