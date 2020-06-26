import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Search from '../screens/Search';

const SearchLayout: React.FC<RouteComponentProps> = () => {
  return (
    <section className="slice">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Search />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default withRouter(SearchLayout);
