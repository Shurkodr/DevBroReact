import React,{Component} from "react";
import { HamburgerSlider } from 'react-animated-burgers'

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      headerStyle: "header-layout",
      humburgerIsActive:false,
      humburgerClass: "navigation-bar-mobile",
      isBlackHeader: "",
      isScroled: false,
    };
    this.compRef = React.createRef();
    this.ChangeHeaderBackground = this.ChangeHeaderBackground.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.ChangeHeaderBackground);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.ChangeHeaderBackground);
  }

  ChangeHeaderBackground() {
    let scroll_count = document.documentElement.scrollTop;
    if (scroll_count > 270) {
      this.setState((prevState) => {
        prevState.headerStyle = 'header-layout header-black';
        prevState.isScroled = true;
        return { ...prevState };
      });
    } else {
      this.setState({ isScroled : false });
        if(!this.state.humburgerIsActive) {
          this.setState((prevState) => {
            prevState.headerStyle = 'header-layout';
            return { ...prevState };
          });
        }
    }
  }

  toggleButton = () => {
    let headerStyle = (!this.state.humburgerIsActive) ? "header-layout header-mobile" : "header-layout";
    headerStyle = (this.state.humburgerIsActive && this.state.isScroled) ? "header-layout header-black" : headerStyle;
    this.setState({
      humburgerIsActive: !this.state.humburgerIsActive,
      humburgerClass: (!this.state.humburgerIsActive) ? "navigation-bar-mobile open" : "navigation-bar-mobile",
      headerStyle,
    })
  }

  render() {
    let submenus = {
      submenuOne : false,
    };
    let { headerStyle, humburgerIsActive, humburgerClass } = this.state;
    return (
      <header id="header-block" className = { headerStyle }>
        <div className="header-layout__logo">
          <a className="logo-link" href="#" title="home">
            <img className="logo-image" src={require("../images/logo.svg")} alt="Dev Brothers logo"/>
          </a>
        </div>
        <nav className="header-layout__navigation-bar">
          <ul className="navigation-list">
            <li className="navigation-list__item">
              <a className="nav-link dropdown" href="#">Services</a>
              <ul className="submenu-list">
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">Web Development</a>
                </li>
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">123</a>
                </li>
              </ul>
            </li>
            <li className="navigation-list__item">
              <a className="nav-link dropdown" href="#">Case Studies</a>
              <ul className="submenu-list">
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">123</a>
                </li>
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">Web Development</a>
                </li>
              </ul>
            </li>
            <li className="navigation-list__item">
              <a className="nav-link" href="#">Testimonials</a>
            </li>
            <li className="navigation-list__item">
              <a className="nav-link" href="#">Team</a>
            </li>
          </ul>
        </nav>
        <div className="header-layout__social">
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
        </div>
        <HamburgerSlider className="hamburger" isActive={humburgerIsActive} buttonWidth={24} toggleButton={this.toggleButton} buttonColor="transparent" barColor="white" />
        <nav className={humburgerClass}>
          <ul className="navigation-list">
            <li className="navigation-list__item">
              <a className="nav-link dropdown" href="#">Services</a>
              <ul className="submenu-list open">
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">Web Development</a>
                </li>
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">123</a>
                </li>
              </ul>
            </li>
            <li className="navigation-list__item">
              <a className="nav-link dropdown" href="#">Case Studies</a>
              <ul className="submenu-list">
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">123</a>
                </li>
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">Web Development</a>
                </li>
              </ul>
            </li>
            <li className="navigation-list__item">
              <a className="nav-link" href="#">Testimonials</a>
            </li>
            <li className="navigation-list__item">
              <a className="nav-link" href="#">Team</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
