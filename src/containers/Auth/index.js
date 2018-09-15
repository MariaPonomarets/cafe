import React, { createRef, Component } from 'react';
import validation from 'utils/form-validation';

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: null,
    }
  }

  setRef = (stateProperty, input) => {
    this[stateProperty] = input
  };

  passwordRef = (input) => this.setRef('passwordRef', input);
  submitButtonRef = (input) => this.setRef('submitButtonRef', input);


  changeField = (fieldName, fieldValue) => {
    const newState = {
      ...this.state,
    };
    newState.errors[fieldName] = null;
    newState[fieldName] = fieldValue;
    this.setState(newState);
  };

  handleChangeEmail = (email) => this.changeField('email', email);
  handleChangePassword = (password) => this.changeField('password', password);

  handleSubmitEditingEmail = () => this.passwordRef.focus();
  handleSubmitEditingPassword = () => this.submitButtonRef.focus();


  handleSubmitButton = () => {
    const errors = validation(this.state);

    if (errors) {
      this.setState({ errors });
    } else {
      Keyboard.dismiss();
      // TODO navigate
    }
  };

  render() {
    const { errors } = this.state;
    const emailProps = {
      placeholder: 'Email',
      keyboardType: 'email-address',
      autoCapitalize: 'none',
      onChangeText: this.handleChangeEmail,
      onSubmitEditing: this.handleSubmitEditingEmail,
      error: errors && errors.email,
    };
    const passwordProps = {
      innerRef: this.passwordRef,
      secureTextEntry: true,
      placeholder: 'Password',
      onChangeText: this.handleChangePassword,
      onSubmitEditing: this.handleSubmitEditingPassword,
      error: errors && errors.password
    };

    const submitButtonProps = {
      innerRef: this.submitButtonRef,
      onPress: this.handleSubmitButton,
    };

    return this.props.children({ emailProps, passwordProps, submitButtonProps });
  }
}

export default FormContainer;

