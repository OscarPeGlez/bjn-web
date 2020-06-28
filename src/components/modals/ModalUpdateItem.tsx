import { ErrorMessage, Form as FormikForm, Formik } from 'formik';
import React, { FC, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import * as Yup from 'yup';
import { soloCaracteresNombre, soloDigitos } from '../../utils/string';
import FileUpload from '../FileUpload';

type ModalProps = {
  show: boolean;
  confirmation: () => void;
  noConfirmation: () => void;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nombre del articulo requerido'),
  stock: Yup.string().required('Cantidad en Stock requerida'),
});

const ModalUpdateItem: FC<ModalProps> = props => {
  const { confirmation, noConfirmation, show } = props;

  const [valid, setValid] = useState(true);

  return (
    <>
      <Modal show={show} onHide={noConfirmation}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar Articulo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Formik
              initialValues={{ name: '', stock: '' }}
              onSubmit={values => confirmation()}
              validationSchema={validationSchema}
            >
              {({ touched, errors, values, setFieldValue, handleBlur }) => (
                <FormikForm>
                  <Form.Group>
                    <Form.Label>Nombre del Articulo</Form.Label>
                    <Form.Control
                      maxLength={50}
                      onBlur={handleBlur}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFieldValue('name', soloCaracteresNombre(e.target.value.toUpperCase()));
                      }}
                      isInvalid={!!errors.name && touched.name}
                      type="text"
                      placeholder="Nombre del Articulo"
                      className={touched.name && errors.name ? 'is-invalid' : ''}
                      value={values.name}
                      name="name"
                    />
                    <ErrorMessage name="name">
                      {msg => <Form.Control.Feedback type="invalid">{msg}</Form.Control.Feedback>}
                    </ErrorMessage>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Cantidad en stock</Form.Label>
                    <Form.Control
                      maxLength={50}
                      onBlur={handleBlur}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFieldValue('stock', soloDigitos(e.target.value))
                      }
                      type="text"
                      placeholder="Cantidad en stock"
                      className={touched.stock && errors.stock ? 'is-invalid' : ''}
                      value={values.stock}
                      name="stock"
                      isInvalid={!!errors.stock && touched.stock}
                    />
                    <ErrorMessage name="stock">
                      {msg => <Form.Control.Feedback type="invalid">{msg}</Form.Control.Feedback>}
                    </ErrorMessage>
                  </Form.Group>
                  <Form.Group>
                    <FileUpload />
                  </Form.Group>
                </FormikForm>
              )}
            </Formik>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={confirmation}>
            Continuar
          </Button>
          <Button variant="primary" onClick={noConfirmation}>
            Regresar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateItem;
