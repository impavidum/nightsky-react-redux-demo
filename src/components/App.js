import React from 'react';
import './app.scss';

import PressNav from './Nav/Nav.js'
import Footer from './Footer/Footer.js'

class AppComponent extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="app-component">
        <PressNav actions={this.props.actions} user={this.props.user} />
        <div className="container" style={{ minHeight: 50 + 'vh' }}>
          <div className="row">
            
            <div className="col-xs-12 col-sm-6 col-sm-push-3 col-md-6 offset-md-0 col-md-push-6">
              <div className="map-wrap">
                <img src="images/night-sky.png" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-md-pull-6">
              <div className="panel order-details">
              <img className="logo" src="images/logo-black.png"/>
                <hr/>
                <p>Some Text</p>
                <p>Some Text</p>
                <p>Some Text</p>
                <p>Order some stuff from us</p>
                <p>Some Text</p>
                <p>Some Text</p>
                <p>Some Text</p>
                <p>You wont regret it</p>
                <p>Some Text</p>
                <p>Some Text</p>
                <p>Some Text</p>
                <p>This would be a fancy form if I had time</p>                
                <br/>
                <hr/>
                <div className="clearfix">
                <div className="btn btn-lg btn-link pull-left">
                  Save Design
                </div>
                <div className="btn btn-lg btn-link pull-right">
                  <i className="fa fa-credit-card" aria-hidden="true"></i> Check Out
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer></Footer> */}
      </div>
    );
  }

}

AppComponent.defaultProps = {};

export default AppComponent;
