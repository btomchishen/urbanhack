import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import './form.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/home';

class Form extends Component {
 

  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' введено не коректно';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' занадто короткий';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <form className="demoForm form-bc">
       
        <h2>Авторизація</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Пошта</label>
          <input type="email" required className="form-control" name="email"
            placeholder="Пошта"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Пароль</label>
          <input type="password" className="form-control" name="password"
            placeholder="Пароль"
            value={this.state.password}
            onChange={this.handleUserInput}  />
        </div>
        
        <Link to="<Home />"><button type="submit" className="btn btn-primary"  disabled={!this.state.formValid}>Увійти</button></Link>
        <div className="social">
          <a href=""><img src={require("./img/google-icon.png")} /></a>
          <a href=""><img src={require("./img/fb-icon.png")} /></a>
        </div>
      </form>
    )
  }
}

export default Form;