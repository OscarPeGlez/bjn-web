import React, { FC } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import imageUrl from '../assets/jn-logo.svg';
import { decrement, incremenet } from '../store/actions';
import { RootState } from '../store/reducers';

const connector = connect(
  (state: RootState) => ({
    counter: state.countReducer.count,
  }),
  {
    increment: () => incremenet(),
    decrement: () => decrement(),
  },
);

type ReduxProps = ConnectedProps<typeof connector>;

type Props = RouteComponentProps & ReduxProps;

const Home: FC<Props> = props => {
  const { increment, counter, history, decrement } = props;
  if (counter === 1) increment();

  const routeChange = (): void => {
    decrement();
    history.push('/cocina');
  };
  return (
    <>
      <section className="slice">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Row className="justify-content-between align-items-center">
                <Col lg={12} md={12}>
                  <Container>
                    <Row>
                      <Col>
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{' '}
                        <br /> <br /> <br /> <br />
                        <Button variant="warning" onClick={routeChange}>
                          Ingresar
                        </Button>
                      </Col>
                      <Col>
                        <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                        <Image src={imageUrl} fluid />
                      </Col>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default withRouter(connector(Home));
