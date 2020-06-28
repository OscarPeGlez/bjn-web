import React from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { withRouter } from 'react-router';
import imageUrl from '../assets/jn-logo.svg';
import FormGetProducts from '../components/kitchen/FormGetProducts';

const SearchKitchen: React.FC = () => {
  return (
    <>
      <section className="slice py-2">
        <div className="d-flex align-items-center">
          <div className="container">
            <div className="row row-grid align-items-center justify-content-center">
              <div className="col-lg-6">
                <div className="text-center">
                  <div className="text-center">
                    <Image
                      src={imageUrl}
                      fluid
                      className="img-center"
                      style={{ height: 150, width: 250 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="slice">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Row className="justify-content-between align-items-center">
                <Col lg={12} md={12}>
                  <FormGetProducts />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default withRouter(SearchKitchen);
