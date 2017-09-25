import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {} from '../actions/'
import Landing from '../components/Landing/Landing.js'

class LandingPage extends Component {

  render() {
    const {actions} = this.props
    return <Landing actions={actions}/>
  }
}

LandingPage.propTypes = {
  actions: PropTypes.shape({})
}

function mapStateToProps(state) {
  const props = {
    user: state.user
  };
  return props
  
}

function mapDispatchToProps(dispatch) {
  const actions = {}
  const actionMap = {
    actions: bindActionCreators(actions, dispatch)
  }
  return actionMap
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)
