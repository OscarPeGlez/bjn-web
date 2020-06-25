import React, { Component } from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import CustomInput from './CustomInput';

interface CustomProps {
  onSubmit: any;
}

type valuesForm = {
  name?: string;
  lastName?: string;
};

const validate = (values: any): valuesForm => {
  const errors: valuesForm = {};
  if (!values.name) {
    errors.name = 'campo obligatorio';
  }
  if (!values.name) {
    errors.lastName = 'campo obligatorio';
  }
  return errors;
};
// eslint-disable-next-line react/prefer-stateless-function
class UserForm extends Component<CustomProps & InjectedFormProps<{}, CustomProps>> {
  render(): JSX.Element {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="name" placeholder="nombre" component={CustomInput} />
        <Field name="lastName" placeholder="apellido" component="input" />
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default reduxForm<{}, CustomProps>({
  form: 'form',
  validate,
})(UserForm);
