import React, { Component } from 'react';

interface InputProps {
  input: any;
  meta: any;
  props: any;
}
// eslint-disable-next-line react/prefer-stateless-function
export default class CustomInput extends Component<InputProps> {
  // eslint-disable-next-line no-useless-constructor
  constructor(props: InputProps) {
    super(props);
  }

  render(): any {
    console.log(this.props);
    const { input, meta, props } = this.props;
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <input {...input} {...props} />;
  }
}
