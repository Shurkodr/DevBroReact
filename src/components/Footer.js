import React, {Component} from "react";

class Footer extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer-layout">
        <div className="footer-container">
          <div className="footer-top">
            <div className="contact-us">
              <div className="contact-us__logo">
                <a className="logo-link" href="#" title="home">
                  <img className="logo-image" src={require("../images/logo.svg")} alt="Dev Brothers logo"/>
                </a>
              </div>
              <div className="contact-us__contact">
                <img src={require("../images/icons/footer/phone.svg")} alt="telephone" className="contact-icon"/>
                <a className="contact-link" title="telephone-number">
                  +380 664 187 323
                </a>
              </div>

              <div className="contact-us__contact">
                <img src={require("../images/icons/footer/mail.svg")} alt="phone" className="contact-icon"/>
                <a className="contact-link" title="telephone-number">
                  kh@devbrother.com
                </a>
              </div>
            </div>
            <nav className="navigation-bar">
              <ul className="navigation-list">
                <li className="navigation-list__item">
                  <a className="nav-link" href="">Services</a>
                  <div className="dropdown"></div>
                  <ul className="submenu-list">
                    <li className="submenu-list__item"><a className="nav-link" href="#">Web Development</a></li>
                    <li className="submenu-list__item"><a className="nav-link" href="#">Mobile Development</a></li>
                    <li className="submenu-list__item"><a className="nav-link" href="#">QA Automation & Testing</a></li>
                    <li className="submenu-list__item"><a className="nav-link" href="#">DevOps</a></li>
                    <li className="submenu-list__item"><a className="nav-link" href="#">UX/UI & User Testing</a></li>
                    <li className="submenu-list__item"><a className="nav-link" href="#">Big Data & Analytics</a></li>
                    <li className="submenu-list__item"><a className="nav-link" href="#">Graphic Design</a></li>
                    <li className="submenu-list__item"><a className="nav-link" href="#">Remote Administration</a></li>
                    <li className="submenu-list__item"><a className="nav-link" href="#">IT Consulting</a></li>
                    <li className="submenu-list__item"><a className="nav-link" href="#">Outsource team building</a></li>
                  </ul>
                </li>
                <li className="navigation-list__item">
                  <a className="nav-link" href="">Case Studies</a>
                  <div className="dropdown"></div>
                  <ul className="submenu-list">
                    <li className="submenu-list__item"><a className="nav-link" href="#">HealthCare</a></li>
                    <li className="submenu-list__item"><a className="nav-link" href="#">WP Development</a></li>
                    <li className="submenu-list__item"><a className="nav-link" href="#">Event Organization</a></li>
                    <li className="submenu-list__item"><a className="nav-link" href="#">UI/UX Solution Case</a></li>
                    <li className="submenu-list__item"><a className="nav-link" href="#">Art-Galleries</a></li>
                    <li className="submenu-list__item"><a className="nav-link" href="#">E-Commerce</a></li>
                  </ul>
                </li>
                <li className="navigation-list__item">
                  <a className="nav-link" href="">Testimonials</a>
                </li>
                <li className="navigation-list__item">
                  <a className="nav-link" href="">Team</a>
                </li>
              </ul>
            </nav>
            <div className="subscribe-form-layout">
              <form className="subscribe-form" action="#">
                <label htmlFor="email-id">
                  <input id="email-id" type="email" name="email-to-subscribe"/>
                </label>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <ul className="social-list">
              <li className="social-list__item">
                <a className="socio-link" href="#">
                  <img src={require("../images/icons/mail.svg")} alt="mail"/>
                </a>
              </li>
              <li className="social-list__item">
                <a className="socio-link" href="#">
                  <img src={require("../images/icons/twitter.svg")} alt="mail"/>
                </a>
              </li>
              <li className="social-list__item">
                <a className="socio-link" href="#">
                  <img src={require("../images/icons/skype.svg")} alt="mail"/>
                </a>
              </li>
            </ul>
            <p>© Copyright 2019 Devbrother</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
