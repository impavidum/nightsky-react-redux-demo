import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login, logout} from '../actions/';
import { browserHistory } from 'react-router';


import LoginForm from '../components/LoginForm/LoginForm.js';
import PressNav from '../components/Nav/Nav.js'
import Footer from '../components/Footer/Footer.js'

class LoginPage extends Component {

  constructor(props) {
    super(props)

    this.doLogin = this
      .login
      .bind(this)
  }

  componentWillMount() {
    let authorization = localStorage.getItem('pressAuth')
    if (!authorization) {
      this.props.user.loggedIn = false
    } else {
      this.props.user.loggedIn = true
      browserHistory.push('/')
    }
  }

  login(values) {
    
    // Call LOGIN action in SAGA
    this
      .props
      .actions
      .login(values)
  }

  render() {
    const {actions, user} = this.props;
    return (
      <div className="login-page">
        <PressNav actions={actions} user={user}/>
        <div className="container" style={{
          minHeight: 50 + 'vh'
        }}>
          <LoginForm onSubmit={this.doLogin} user={user}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

LoginPage.propTypes = {
  actions: PropTypes.shape({login: PropTypes.func.isRequired, logout: PropTypes.func.isRequired}),
  user: PropTypes.shape({})
}

function mapStateToProps(state) {
  // eslint-disable-line no-unused-vars
  /* Populated by react-webpack-redux:reducer */
  const props = {
    user: state.user
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    login,
    logout
  };
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);