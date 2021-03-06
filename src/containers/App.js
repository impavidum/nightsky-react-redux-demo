/* CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {login, logout, loginSuccess, loginError} from '../actions/';
import Main from '../components/App';
/* Populated by react-webpack-redux:reducer */
class App extends Component {

  // constructor() {   super() }

  componentWillMount() {
    // let authorization = localStorage.getItem('pressAuth')
    // if (!authorization) {
    //   browserHistory.push('/login')
    // } else {
    //   this.props.user.loggedIn = true
    // }
  }

  render() {
    const {actions, user} = this.props;
    return <Main actions={actions} user={user}/>;
  }

}

App.propTypes = {
  actions: PropTypes.shape({login: PropTypes.func.isRequired, logout: PropTypes.func.isRequired, loginSuccess: PropTypes.func.isRequired, loginError: PropTypes.func.isRequired}),
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
    logout,
    loginSuccess,
    loginError
  };
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
