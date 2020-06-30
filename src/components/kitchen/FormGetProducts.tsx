import parse from 'html-react-parser';
import React, { FC, useState } from 'react';
import {
  Col,
  Form,
  InputGroup,
  ListGroup,
  OverlayTrigger,
  Row,
  TabPane,
  Tooltip
} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import Swal from 'sweetalert2';
import deleteIcon from '../../assets/icon-delete.svg';
import UpdateIcon from '../../assets/icon-update.svg';
import { updateSearchProductKitchen } from '../../store/actions/kitchen';
import { RootState } from '../../store/reducers';
import { Product } from '../../types/products';
import { convertirUpperLowerCase } from '../../utils';
import { trimAllWhitespace } from '../../utils/string';
import ModalDeleteItem from '../modals/ModalDeleteItem';
import ModalUpdateItem from '../modals/ModalUpdateItem';
import Loader from '../shared/Loader';

const connector = connect(
  (state: RootState) => ({
    consulta: state.kitechenReducer.consulta,
    productos: state.kitechenReducer.resultados.resultados,
    cargando: state.kitechenReducer.resultados.cargando,
    cargado: state.kitechenReducer.resultados.cargado,
  }),
  {
    actualizarConsulta: (search: string) => updateSearchProductKitchen(search),
  },
);
type ReduxProps = ConnectedProps<typeof connector>;

type Props = RouteComponentProps & ReduxProps;

const FormGetProducts: FC<Props> = props => {
  const { actualizarConsulta, consulta, productos } = props;

  const [isUpdate, setIsUpdate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [item, setItem] = useState({ name: '', sku: 0, url: ' ' });

  const consultaPalabras = trimAllWhitespace(consulta).split(' ');
  const consultaRegex = new RegExp(consultaPalabras.join('|'), 'gi');

  const sugerir = (consulta: string): void => {
    actualizarConsulta(consulta);
  };

  const deleteItem = (): void => {
    setIsDelete(!isDelete);
  };

  const updateItem = (item: { name: string; sku: number; url: string }): void => {
    setItem(item);
    setIsUpdate(!isUpdate);
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
        Id:{' '}
        {parse(
          sku.replace(consultaRegex, value => {
            return `<span class="text-danger mt-2">${value}</span>`;
          }),
        )}
      </h6>
    );
  };

  const crearStock = (sku: string): JSX.Element => {
    return (
      <h6 className="mb-1 d-block text-limit">
        CANTIDAD:{' '}
        {parse(
          sku.replace(consultaRegex, value => {
            return `<span class="text-danger mt-2">${value}</span>`;
          }),
        )}
      </h6>
    );
  };
  const crearSugerencia = (producto: Product, key: number): JSX.Element => {
    const { name, stock, sku, imagenUrl } = producto;

    const createDeleteItem = (): JSX.Element => {
      return (
        <div className="text-right">
          <div className="actions icon-sg">
            <div>
              <OverlayTrigger overlay={<Tooltip id="delete-item">Eliminar Articulo</Tooltip>}>
                <Image
                  alt="Eliminar-Articulo"
                  src={deleteIcon}
                  className="img-fluid"
                  style={{ height: 20 }}
                  onClick={(): void => deleteItem()}
                />
              </OverlayTrigger>
            </div>
          </div>
        </div>
      );
    };

    const createUpdateItem = (): JSX.Element => {
      return (
        <div className="text-right">
          <div className="actions icon-sg">
            <OverlayTrigger overlay={<Tooltip id="update-item">Editar Articulo</Tooltip>}>
              <Image
                alt="Editar-Articulo"
                src={UpdateIcon}
                className="img-fluid"
                style={{ height: 20 }}
                onClick={(): void => updateItem({ name, sku, url: imagenUrl })}
              />
            </OverlayTrigger>
          </div>
        </div>
      );
    };

    return (
      <ListGroup key={key}>
        <ListGroup.Item>
          <div className="d-flex align-items-center justify-content-between align-items-center">
            <div>
              <Image alt={name} src={imagenUrl} style={{ width: 50 }} />
            </div>
            <div className="flex-fill pl-3 text-limit">
              {/* desde aqui agregar styles */}
              <div className="d-flex justify-content-between align-items-end text-xs text-muted text-left mt-1">
                <div>{crearDescripcion(convertirUpperLowerCase(name))}</div>
                {createDeleteItem()}
              </div>
              <div className="d-flex justify-content-between align-items-center text-xs text-muted text-right mt-1">
                <div>{crearSku(`${sku}`)}</div>
                <div>{crearStock(`${stock}`)}</div>
                {createUpdateItem()}
              </div>
            </div>
          </div>
        </ListGroup.Item>
      </ListGroup>
    );
  };

  const crearSinResultados = (): JSX.Element => {
    return (
      <Row className="align-items-center">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <h4 className="py-2">No se encontraron resultados</h4>
        </Col>
      </Row>
    );
  };

  const crearCargando = (cargando: boolean): JSX.Element => {
    return (
      <>
        <Loader cargando={cargando} />
      </>
    );
  };

  const crearSugerencias = (): JSX.Element | JSX.Element[] => {
    const { cargado, cargando } = props;
    if (cargando) return crearCargando(cargando);
    if ((cargado && !productos) || (cargado && productos.length === 0)) return crearSinResultados();
    return productos.map((producto, indice) => crearSugerencia(producto, indice));
  };

  const confirmation = (): void => {
    setIsUpdate(false);
    Swal.fire({
      text: isDelete ? 'Articulo eliminado' : 'Articulo actualizado',
      icon: 'success',
      timer: 3000,
      allowOutsideClick: false,
      allowEscapeKey: false,
      showConfirmButton: false,
      showCancelButton: false,
    }).then(() => {
      setIsUpdate(false);
      setIsDelete(false);
      actualizarConsulta(consulta);
    });
  };

  const noConfirmation = (): void => {
    setIsUpdate(false);
    setIsDelete(false);
  };

  return (
    <>
      <ModalDeleteItem
        show={isDelete}
        confirmation={confirmation}
        noConfirmation={noConfirmation}
      />
      <ModalUpdateItem
        show={isUpdate}
        confirmation={confirmation}
        noConfirmation={noConfirmation}
        product={item}
      />
      <Form>
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

export default withRouter(connector(FormGetProducts));
