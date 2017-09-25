import React from 'react'
import './loginForm.scss'

import {browserHistory} from 'react-router'

import {Field, reduxForm} from 'redux-form';

class LoginForm extends React.Component {

  render() {
    const {handleSubmit, user} = this.props;
    return (
      <div
        className="login-form col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
        <h2 className={this.props.user.badCred
              ? 'hidden'
              : 'text-center'}>🎉 Welcome Back!</h2>
              
        <p className={!this.props.user.badCred
              ? 'hidden'
              : 'text-center text-danger'}>Invalid email or password</p>
              <br/>
        <div className="panel">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <Field name="email" component="input" type="email" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <span className="pull-right text-muted">Forgot Password?
              </span>
              <Field
                name="password"
                component="input"
                type="password"
                className="form-control"/>
            </div>
            <hr/>
            <button className="btn btn-primary btn-lg btn-block" type="submit"> <span className="glyphicon glyphicon-search" aria-hidden="true"></span> 
            <span className={this.props.user.loggingIn
              ? 'hidden'
              : 'text-center'}>Log In</span>
            <span className={!this.props.user.loggingIn
              ? 'hidden'
              : 'text-center'}><i className="material-icons spinning">sync</i> Logging In</span>
           
            </button>

          </form>

        </div>
        <p className="text-center text-muted">First time here? <strong>Create an account
            <i className="material-icons">arrow_forward</i>
          </strong>
        </p>
      </div>
    );
  }
}

LoginForm.displayName = 'LoginForm'
LoginForm.propTypes = {}
LoginForm.defaultProps = {}

// Decorate the form component
LoginForm = reduxForm({
  form: 'login' // a unique name for this form
})(LoginForm);

export default LoginForm
