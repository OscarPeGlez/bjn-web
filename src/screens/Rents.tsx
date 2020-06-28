import React, { FC } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import Loader from '../components/shared/Loader';
import { getRents } from '../store/actions/rents';
import { RootState } from '../store/reducers';
import { Rent, StatusEnum } from '../types/rent';
import { convertirUpperLowerCase } from '../utils/index';

const connector = connect(
  (state: RootState) => ({
    rents: state.rentsReducer.resultados,
    loadder: state.rentsReducer.cargado,
    error: state.rentsReducer.error,
    cargando: state.rentsReducer.cargando,
  }),
  {
    consultRents: () => getRents(),
  },
);

type ReduxProps = ConnectedProps<typeof connector>;

type Props = RouteComponentProps & ReduxProps;

const Rents: FC<Props> = props => {
  const { rents, consultRents, error, cargando } = props;

  if (!rents.length && !error) consultRents();

  const tarjetaRenta = (rent: Rent): JSX.Element => {
    const {
      rentador,
      detalleRenta: { status },
      fechaEntrada,
      fechaSalida,
      id,
    } = rent;

    type BgType =
      | 'primary'
      | 'secondary'
      | 'success'
      | 'danger'
      | 'warning'
      | 'info'
      | 'dark'
      | 'light'
      | undefined;
    let colorCard: BgType;

    switch (status) {
      case StatusEnum.COMPLETED:
        colorCard = 'success';
        break;
      case StatusEnum.PENDING_PAYING:
        colorCard = 'warning';
        break;
      case StatusEnum.NEW:
        colorCard = 'danger';
        break;
      default:
    }

    return (
      <Card bg={colorCard} className="card-product shadow-none">
        <Card.Header className="border-0 text-center">
          {convertirUpperLowerCase(rentador)}
        </Card.Header>
        <Card.Body className="text-center">
          <div className="d-flex justify-content-between align-items-center">
            <p>SKU: {123}</p>
          </div>
          {/* <div className="pb-2">
            <small>
              <del>{1200}</del>
            </small>
          </div> */}
          {/* <Row>
            <Col xs={7} sm={7} md={7} lg={7} xl={7} className="text-left">
              <div>
                <h4>imagen</h4>
                <Image alt="placeholder" src={creditIcon} fluid style={{ width: 200 }} />
              </div>
              <p>Pago puntual a {12} semanas</p>
            </Col>
            <Col xs={5} sm={5} md={5} lg={5} xl={5} className="text-right">
              <small>{1500}</small>
            </Col>
          </Row> */}
        </Card.Body>
      </Card>
    );
  };

  const crearCargando = (cargando: boolean): JSX.Element => {
    return (
      <>
        <Loader cargando={cargando} />
      </>
    );
  };

  const crearTarjetas = (): JSX.Element[] => {
    const { rents } = props;
    return rents.map(renta => {
      return (
        <div key={renta.id} className="col-xl-3 col-lg-4 col-md-4 col-xs-6">
          {tarjetaRenta(renta)}
        </div>
      );
    });
  };

  const crearContenidoPrincipal = (): JSX.Element => {
    return (
      <Card bg="secondary" className="shadow-none border-0">
        <Card.Header className="border-0">
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <h4 className="py-2">Resultados de las Rentas</h4>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Row>{crearTarjetas()}</Row>
        </Card.Body>
        {/* <div className="visible-xxs clearfix pb-4" /> */}
      </Card>
    );
  };

  const crearSinResultados = (): JSX.Element => {
    return (
      <Card className="shadow-none border-0">
        <Card.Header className="border-0">
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <h4 className="py-2">No se encontraron resultados</h4>
            </Col>
          </Row>
          <Row className="align-items-start">
            <Col xs={9} sm={9} md={9} lg={9} xl={9}>
              <h6 className="py-2">Intenta con otra palabra de busqueda</h6>
            </Col>
            <Col xs={3} sm={3} md={3} lg={3} xl={3} className="text-right">
              <div className="actions">
                <div className="icon-md" />
              </div>
            </Col>
          </Row>
        </Card.Header>
      </Card>
    );
  };

  const crearContenido = (): JSX.Element => {
    const { cargando } = props;

    if (cargando) return crearCargando(cargando);
    if (rents.length === 0) return crearSinResultados();
    return crearContenidoPrincipal();
  };

  return (
    <>
      <section className="py-2">
        <Container>
          <Row>
            <Col lg={12}>{crearContenido()}</Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default withRouter(connector(Rents));