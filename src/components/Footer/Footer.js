import React from 'react'
import './footer.scss'

class Footer extends React.Component {

  render() {
    return (
      <div className="footer-component">
        <div className="footer">
          <div className="container narrow">
            <div className="row">
              <div className="col-md-2 col-sm-6 col-xs-12 footer-info-col">
                <h3>Company</h3>
                <ul>
                  <li>
                    <a href="http://help.presscleaners.com/" target="_blank">FAQ</a>
                  </li>
                  <li>
                    <a href="/pricing/">Pricing</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/charity">Charity</a>
                  </li>
                  <li>
                    <a href="/scholarship">Scholarship</a>
                  </li>
                  <li>
                    <a href="https://press-technologies.workable.com/" target="_blank">Jobs</a>
                  </li>
                  <li>
                    <a href="/contact/">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12 footer-info-col">
                <h3>Partners</h3>
                <ul>
                  <li>
                    <a href="/partner/login">Partner Login</a>
                  </li>
                  <li>
                    <a href="/partner/register">Become a Partner</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12 footer-info-col">
                <h3>Cities</h3>
                <ul>

                  <li>
                    <a href="/cities/lubbock-tx-laundry">Lubbock, TX</a>
                  </li>

                  <li>
                    <a href="/cities/oklahoma-city-ok-laundry">Oklahoma City, OK</a>
                  </li>

                  <li>
                    <a href="/cities/austin-tx-laundry">Austin, TX</a>
                  </li>

                  <li>
                    <a href="/cities/dallas-tx-laundry">Dallas, TX</a>
                  </li>

                </ul>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12 footer-info-col">
                <h3>Social</h3>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/presscleaners">Facebook</a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/presscleaners">Twitter</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-sm-6 col-xs-12 footer-info-col">
                <h3>Legal</h3>
                <ul>
                  <li>
                    <a href="/terms">Terms</a>
                  </li>
                  <li>
                    <a href="/privacy">Privacy</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 col-xs-12">
                <a href="/getapp/"><img className="app-store-icon" src="images/app-store.png"/></a>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <p className="copyright">© 2016 Press Technologies LLC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Footer.displayName = 'Footer'
Footer.propTypes = {}
Footer.defaultProps = {}

export default Footer
