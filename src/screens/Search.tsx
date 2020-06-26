import React from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { withRouter } from 'react-router';
import FormInputCustom from '../components/FormInputCustom';

const Search: React.FC = (): JSX.Element => {
  return (
    <section className="slice">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Row className="justify-content-between align-items-center">
              <Col lg={12} md={12}>
                <FormInputCustom />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default withRouter(Search);
