// eslint-disable-next-line import/no-extraneous-dependencies
import parse from 'html-react-parser';
import qs from 'qs';
import React, { FC } from 'react';
import { Form, InputGroup, ListGroup, OverlayTrigger, TabPane, Tooltip } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import catalogIcon from '../assets/catext.svg';
import { updateSearchProductKitchen } from '../store/actions/kitchen';
import { RootState } from '../store/reducers';
import { ProductKitchen } from '../types/kitchen';
import { convertirUpperLowerCase } from '../utils';
import { trimAllWhitespace } from '../utils/string';

const connector = connect(
  (state: RootState) => ({
    consulta: state.kitechenReducer.consulta,
    productos: state.kitechenReducer.resultados.resultados,
  }),
  {
    actualizarConsulta: (search: string) => updateSearchProductKitchen(search),
  },
);
type ReduxProps = ConnectedProps<typeof connector>;

type Props = RouteComponentProps & ReduxProps;

const FormInputCustom: FC<Props> = props => {
  const { actualizarConsulta, history, consulta, productos } = props;

  const consultaPalabras = trimAllWhitespace(consulta).split(' ');
  const consultaRegex = new RegExp(consultaPalabras.join('|'), 'gi');

  const sugerir = (consulta: string): void => {
    actualizarConsulta(consulta);
  };

  const enviar = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (consulta.length <= 2) return;
    const queryString = qs.stringify({ consulta });
    actualizarConsulta('');
    history.push({
      pathname: '/productos/kitchen',
      search: queryString,
    });
  };

  const crearDescripcion = (descripcion: string): JSX.Element => {
    return (
      <h6 className="mb-1 d-block text-limit font-weight-500">
        {parse(
          descripcion.replace(consultaRegex, value => {
            return `<span class="text-danger">${value}</span>`;
          }),
        )}
      </h6>
    );
  };

  const crearSku = (sku: string): JSX.Element => {
    return (
      <h6 className="mb-1 d-block text-limit">
        SKU:{' '}
        {parse(
          sku.replace(consultaRegex, value => {
            return `<span class="text-danger mt-2">${value}</span>`;
          }),
        )}
      </h6>
    );
  };

  const crearSugerencia = (producto: ProductKitchen, key: number): JSX.Element => {
    const { name, stock, sku, imagenUrl } = producto;

    // const esCatalogoExtendido = tipo === TipoProducto.CATALOGO_EXTENDIDO;

    // const url = urlImagenCorrecta(tipo, urlImagen, sku);

    // const handleImageError = (event: React.ChangeEvent<HTMLImageElement>): void => {
    //   if (!event.target.src.includes(PRODUCT_PLACEHOLDER_IMAGE_PATH))
    //     event.target.src = PRODUCT_PLACEHOLDER_IMAGE_PATH;
    // };

    const verDetallesProducto = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
      e.preventDefault();
      const queryString = qs.stringify({ name });
      actualizarConsulta('');
      history.push({
        pathname: `/productos/${sku}`,
        search: queryString,
      });
    };

    const crearCatalogoExtendido = (): JSX.Element => {
      return (
        <div className="text-right">
          <div className="actions icon-sg">
            <div>
              <OverlayTrigger overlay={<Tooltip id="extended-catalog">Catálogo Extendido</Tooltip>}>
                <Image
                  alt="Catálogo Extendido"
                  src={catalogIcon}
                  className="img-fluid"
                  style={{ height: 30 }}
                />
              </OverlayTrigger>
            </div>
          </div>
        </div>
      );
    };

    return (
      <ListGroup key={key}>
        <ListGroup.Item action onClick={verDetallesProducto}>
          <div className="d-flex align-items-center justify-content-between align-items-center">
            <div>
              <Image
                alt={name}
                src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
                style={{ width: 50 }}
              />
            </div>
            <div className="flex-fill pl-3 text-limit">
              <div className="d-flex justify-content-between align-items-end text-xs text-muted text-left mt-1">
                <div>{crearDescripcion(convertirUpperLowerCase(name))}</div>
                {crearCatalogoExtendido()}
              </div>
              <div className="d-flex justify-content-between align-items-center text-xs text-muted text-right mt-1">
                <div>{crearSku(`${sku}`)}</div>
                {/*
                {esCatalogoExtendido
                  ? crearEnvioDomicilio(inventario)
                  : crearEntregaEnTienda(inventario)} */}
              </div>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    );
  };

  const crearSugerencias = (): JSX.Element[] | null => {
    if (!productos || productos.length === 0) return null;
    return productos.map((producto, indice) => crearSugerencia(producto, indice));
  };

  return (
    <>
      <Form onSubmit={enviar}>
        <Form.Group className="mb-0">
          <InputGroup className="input-group-merge input-group-md focused">
            <Form.Control
              onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
                sugerir(event.target.value)
              }
              placeholder="Busqueda"
              autoComplete="off"
              type="text"
              value={consulta}
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
      <TabPane id="card-dashboard-3-result" active role="tabpanel">
        <div className="card">
          <div> {crearSugerencias()}</div>
        </div>
      </TabPane>
    </>
  );
};

export default withRouter(connector(FormInputCustom));
