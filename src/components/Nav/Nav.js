import React from 'react'
import './nav.scss'

import {Nav, Navbar, NavItem} from 'react-bootstrap'

import {browserHistory} from 'react-router'

class PressNav extends React.Component {

  constructor(props) {
    super(props)

    this.doLogout = this
      .logout
      .bind(this)

  }

  logout() {
    this.props.user.loggedIn = false
    localStorage.setItem('pressAuth', '')
    this
      .props
      .actions
      .logout()
    browserHistory.push('/login')
  }

  render() {

    return (
      <div className="nav-component">
      

        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">
                {/* <img alt="Brand" src="images/logo-black.png"/> */}
              </a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>

            <div className="pull-right login-lg">
              <a
                href="/login"
                className={this.props.user.loggedIn
                ? 'hidden'
                : ''}>
                <button type="button" className="btn btn-default navbar-btn" id="log-in">Log in {this.props.user.loggedIn}</button>
              </a>
              <a
                className={!this.props.user.loggedIn
                ? 'hidden'
                : ''}
                onClick={this.doLogout}>
                <button type="button" className="btn btn-default navbar-btn" id="log-in">Log Out</button>
              </a>
            </div>

            
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Link 1</NavItem>
              <NavItem eventKey={2} href="#">Link 2</NavItem>

              {/*<NavItem href="/login" className={this.props.user.loggedIn
                ? 'hidden'
                : ''}></NavItem>
              <NavItem className={!this.props.user.loggedIn
                ? 'hidden'
                : ''}
                onClick={this.doLogout}>
                <button type="button" className="btn btn-default navbar-btn" id="log-in">Log Out</button>></NavItem>*/}
            </Nav>


            <div className="login-sm">
              <a
                href="/login"
                className={this.props.user.loggedIn
                ? 'hidden'
                : 'no-underline'}>
                <button type="button" className="btn btn-primary navbar-btn btn-block" id="log-in">Log in {this.props.user.loggedIn}</button>
              </a>
              <a
                className={!this.props.user.loggedIn
                ? 'hidden'
                : 'no-underline'}
                onClick={this.doLogout}>
                <button type="button" className="btn btn-default navbar-btn btn-block" id="log-in">Log Out</button>
              </a>
            </div>
            
            {/*<a href="/login">
                  <button type="button" className="btn btn-default navbar-btn" id="log-in">Log in {this.props.user.loggedIn}</button>
                </a>*/}
          </Navbar.Collapse>
        </Navbar>

      </div>
    )
  }
}

PressNav.displayName = 'PressNav'
PressNav.propTypes = {}
PressNav.defaultProps = {}

export default PressNav