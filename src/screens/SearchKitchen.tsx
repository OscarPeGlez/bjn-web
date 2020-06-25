import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { withRouter } from 'react-router-dom';

const SearchKitchen: React.FC = (): JSX.Element => {
  const [search, setSearch] = useState('');

  const enviar = (): void => {
    console.log('enviar', search);
  };

  return (
    <section className="slice">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Row className="justify-content-between align-items-center">
              <Col lg={12} md={12}>
                <Form onSubmit={enviar}>
                  <Form.Group className="mb-0">
                    <InputGroup className="input-group-merge input-group-md focused">
                      <Form.Control
                        onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                          setSearch(event.target.value)
                        }
                        placeholder="Busqueda inventario cocina"
                        autoComplete="off"
                        type="text"
                        value={search}
                      />
                      <InputGroup.Append>
                        <button
                          type="submit"
                          className="btn btn-block btn-warning border-left-0"
                          style={{ width: 50 }}
                        >
                          <i className="icon-buscar" />
                        </button>
                      </InputGroup.Append>
                    </InputGroup>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default withRouter(SearchKitchen);
