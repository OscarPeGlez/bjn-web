import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Home: FC = () => {
  return (
    <section className="slice">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Row className="justify-content-between align-items-center">
              <Col lg={12} md={12}>
                <h1>Home</h1>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home;
