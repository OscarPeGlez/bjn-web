import { ErrorMessage, Form as FormikForm, Formik } from 'formik';
import React, { FC } from 'react';
import { Button, Col, Form, Modal } from 'react-bootstrap';
import * as Yup from 'yup';
import { soloCaracteresNombre, soloDigitos } from '../../utils/string';

const validationSchema = Yup.object().shape({
  name: Yup.string(),
  stock: Yup.string(),
  sum: Yup.string(),
});

type ModalInfoProps = {
  show: boolean;
  rent: any;
  confirmation: () => void;
  noConfirmation: () => void;
};

const ModalInfo: FC<ModalInfoProps> = props => {
  const { rent, show, confirmation, noConfirmation } = props;

  return (
    <>
      <Modal show={show} onHide={noConfirmation}>
        <Modal.Header className="text-light bg-dark">
          <Modal.Title>Editar Renta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Formik
              initialValues={{ name: '', stock: '', sum: ' ' }}
              onSubmit={values => confirmation()}
              validationSchema={validationSchema}
            >
              {({ touched, errors, values, setFieldValue, handleBlur }) => (
                <FormikForm>
                  <Form.Group>
                    <Form.Label>Nombre de pagador</Form.Label>
                    <Form.Control
                      maxLength={50}
                      onBlur={handleBlur}
                      type="text"
                      value={rent.rentador}
                      readOnly
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Nombre de quien recogio</Form.Label>
                    <Form.Control
                      maxLength={50}
                      onBlur={handleBlur}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFieldValue('name', soloCaracteresNombre(e.target.value.toUpperCase()));
                      }}
                      isInvalid={!!errors.name && touched.name}
                      type="text"
                      className={touched.name && errors.name ? 'is-invalid' : ''}
                      value={rent.detalleRenta.responsable || values.name}
                      name="name"
                      readOnly={rent.detalleRenta.responsable || false}
                    />
                    <ErrorMessage name="name">
                      {msg => <Form.Control.Feedback type="invalid">{msg}</Form.Control.Feedback>}
                    </ErrorMessage>
                  </Form.Group>

                  <Form.Row>
                    <Col>
                      <Form.Label>Suma cobrada</Form.Label>
                      <Form.Control
                        maxLength={50}
                        onBlur={handleBlur}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setFieldValue('sum', soloDigitos(e.target.value))
                        }
                        type="text"
                        className={touched.sum && errors.sum ? 'is-invalid' : ''}
                        name="sum"
                        isInvalid={!!errors.sum && touched.sum}
                      />
                    </Col>
                    <Col>
                      <Form.Label>Resta por cobrar</Form.Label>
                      <Form.Control
                        onBlur={handleBlur}
                        type="number"
                        value={rent.detalleRenta.totalDeRenta - rent.detalleRenta.sumaCobrada}
                        readOnly
                      />
                    </Col>
                    <Col>
                      <Form.Label>Estatus</Form.Label>
                      <Form.Control as="select">
                        <option>Recuperada</option>
                        <option>Sin recuperar</option>
                      </Form.Control>
                    </Col>
                  </Form.Row>
                  <Form.Group>
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                      as="textarea"
                      maxLength={50}
                      onBlur={handleBlur}
                      type="text"
                      value={rent.detalleRenta.direccion}
                      readOnly
                    />
                  </Form.Group>
                </FormikForm>
              )}
            </Formik>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={noConfirmation}>
            Cancelar
          </Button>
          <Button variant="outline-info" onClick={confirmation}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalInfo;
