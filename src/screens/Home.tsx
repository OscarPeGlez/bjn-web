import React, { FC } from 'react';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import imageUrl from '../assets/jn-logo.svg';

const Home: FC = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = `/cocina`;
    history.push(path);
  };

  return (
    <>
      <Container>
        <Row>
          <Col style={{ display: 'block', textAlign: 'center' }}>
            <Button variant="warning" onClick={routeChange}>
              Ingresar
            </Button>
          </Col>
          <Col>
            <Image src={imageUrl} fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
