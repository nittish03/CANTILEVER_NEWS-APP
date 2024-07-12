import React from "react";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="container-fluid main-footer">
        <button className="btn btn-primary w-100 back mb-4">
          <a className="back" href="#">
            Back to Top
          </a>
        </button>
        <footer id="footer2" className="row">
          <div className="col-md-3 col-sm-6 footer-box box1">
            <ul>
              <li className="heading text-white">Get to know us</li>
              <li><a className="white" href="#">Careers</a></li>
              <li><a className="white" href="#">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 footer-box box2">
            <ul>
              <li className="heading text-white">Latest Reports</li>
              <li><a className="white" href="#">Become an Affiliate</a></li>
              <li><a className="white" href="#">Self-publish with us</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 footer-box box3">
            <ul>
              <li className="heading text-white">Services</li>
              <li><a className="white" href="#">Reload your balance</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 footer-box box4">
            <ul>
              <li className="heading text-white">Let us help you</li>
              <li><a className="white" href="#">Your account</a></li>
              <li><a className="white" href="#">Assistant</a></li>
              <li><a className="white" href="#">Help</a></li>
            </ul>
          </div>
        </footer>
      </div>
      <footer className="footer3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 logo2"></div>


          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;