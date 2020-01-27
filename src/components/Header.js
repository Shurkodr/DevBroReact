import React, { Component } from "react"
import { HamburgerSlider } from "react-animated-burgers"
import logo from "../images/logo.svg"
import mail from "../images/icons/mail.svg"
import skype from "../images/icons/skype.svg"
import twitter from "../images/icons/twitter.svg"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headerStyle: "header-layout",
      humburgerIsActive: false,
      humburgerClass: "navigation-bar-mobile",
      isBlackHeader: "",
      isScroled: false
    }
    this.ChangeHeaderBackground = this.ChangeHeaderBackground.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.ChangeHeaderBackground)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.ChangeHeaderBackground)
  }

  toggleButton = () => {
    let { humburgerIsActive } = this.state
    const { isScroled } = this.state
    humburgerIsActive = !humburgerIsActive
    let headerStyle = humburgerIsActive
      ? "header-layout header-mobile"
      : "header-layout"
    headerStyle =
      humburgerIsActive || isScroled
        ? "header-layout header-black"
        : headerStyle
    this.setState({
      humburgerIsActive,
      humburgerClass: humburgerIsActive
        ? "navigation-bar-mobile open"
        : "navigation-bar-mobile",
      headerStyle
    })
  }

  ChangeHeaderBackground() {
    const scrollCount = document.documentElement.scrollTop
    const { humburgerIsActive } = this.state
    if (scrollCount > 270) {
      this.setState(prevState => {
        let { headerStyle, isScroled } = prevState
        headerStyle = "header-layout header-black"
        isScroled = true
        return { ...prevState, headerStyle, isScroled }
      })
    } else {
      this.setState({ isScroled: false })
      if (!humburgerIsActive) {
        this.setState(prevState => {
          let { headerStyle } = prevState
          headerStyle = "header-layout"
          return { ...prevState, headerStyle }
        })
      }
    }
  }

  render() {
    const { headerStyle, humburgerIsActive, humburgerClass } = this.state
    return (
      <header id="header-block" className={headerStyle}>
        <div className="header-layout__logo">
          <a className="logo-link" href="#" title="home">
            <img className="logo-image" src={logo} alt="Dev Brothers logo" />
          </a>
        </div>
        <nav className="header-layout__navigation-bar">
          <ul className="navigation-list">
            <li className="navigation-list__item">
              <a className="nav-link dropdown" href="#">
                Services
              </a>
              <ul className="submenu-list">
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">
                    Web Development
                  </a>
                </li>
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">
                    Mobile Development
                  </a>
                </li>
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">
                    QA Automation & Testing
                  </a>
                </li>
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">
                    DevOps
                  </a>
                </li>
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">
                    UX/UI & User Testing
                  </a>
                </li>
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">
                    Big Data & Analytics
                  </a>
                </li>
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">
                    Graphic Design
                  </a>
                </li>
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">
                    Remote Administration
                  </a>
                </li>
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">
                    IT Consulting
                  </a>
                </li>
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">
                    Outsource team building
                  </a>
                </li>
              </ul>
            </li>
            <li className="navigation-list__item">
              <a className="nav-link dropdown" href="#">
                Case Studies
              </a>
              <ul className="submenu-list">
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">
                    123
                  </a>
                </li>
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">
                    Web Development
                  </a>
                </li>
              </ul>
            </li>
            <li className="navigation-list__item">
              <a className="nav-link" href="#">
                Testimonials
              </a>
            </li>
            <li className="navigation-list__item">
              <a className="nav-link" href="#">
                Team
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-layout__social">
          <ul className="social-list">
            <li className="social-list__item">
              <a className="socio-link" href="#">
                <img src={mail} alt="mail" />
              </a>
            </li>
            <li className="social-list__item">
              <a className="socio-link" href="#">
                <img src={twitter} alt="mail" />
              </a>
            </li>
            <li className="social-list__item">
              <a className="socio-link" href="#">
                <img src={skype} alt="mail" />
              </a>
            </li>
          </ul>
        </div>
        <HamburgerSlider
          className="hamburger"
          isActive={humburgerIsActive}
          buttonWidth={24}
          toggleButton={this.toggleButton}
          buttonColor="transparent"
          barColor="white"
        />
        <nav className={humburgerClass}>
          <ul className="navigation-list">
            <li className="navigation-list__item">
              <a className="nav-link dropdown" href="#">
                Services
              </a>
              <ul className="submenu-list open">
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">
                    Web Development
                  </a>
                </li>
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">
                    123
                  </a>
                </li>
              </ul>
            </li>
            <li className="navigation-list__item">
              <a className="nav-link dropdown" href="#">
                Case Studies
              </a>
              <ul className="submenu-list">
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">
                    123
                  </a>
                </li>
                <li className="submenu-list__item">
                  <a className="nav-link" href="#">
                    Web Development
                  </a>
                </li>
              </ul>
            </li>
            <li className="navigation-list__item">
              <a className="nav-link" href="#">
                Testimonials
              </a>
            </li>
            <li className="navigation-list__item">
              <a className="nav-link" href="#">
                Team
              </a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
