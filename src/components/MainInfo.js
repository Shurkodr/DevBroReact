import React, { Component } from "react"
import featuresAnimation from "../scripts/featuresAnimation"
import parallax from "../scripts/parallax"
import stone from "../images/backgrounds/parallax/stone-main.png"

class MainInfo extends Component {
  componentDidMount() {
    window.addEventListener("scroll", featuresAnimation)
    window.addEventListener("scroll", parallax)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", featuresAnimation)
    window.removeEventListener("scroll", parallax)
  }

  render() {
    return (
      <section className="main-info">
        <div className="promo">
          <h1 className="promo__header">Devbrother</h1>
          <h2 className="promo__header_describe">
            your software engineering family
          </h2>
          <div className="main-describe">
            <p className="main-describe__text">
              ALWAYS FOCUSED ON YOUR REAL RESULT
            </p>
            <button className="button-for-talk" type="button">
              Let’s talk
            </button>
          </div>
        </div>
        <div className="main-features">
          <section className="feature">
            <div className="feature__container feature-animation-one">
              <h3 className="feature__header">
                Extend your
                <br />
                team
              </h3>
              <p className="feature__describe">
                Boost your development team with DevBrother’s dedicated
                specialists.
              </p>
            </div>
          </section>
          <section className="feature">
            <div className="feature__container feature-animation-two">
              <h3 className="feature__header">
                Implement your
                <br />
                idea
              </h3>
              <p className="feature__describe">
                Create or support you online business representation.
              </p>
            </div>
          </section>
          <section className="feature">
            <div className="feature__container feature-animation-three">
              <h3 className="feature__header">
                Free-up your
                <br />
                team time
              </h3>
              <p className="feature__describe">
                Devops, QA, Development support for your team.
              </p>
            </div>
          </section>
        </div>
        <img className="main-stone" src={stone} alt="stone" />
      </section>
    )
  }
}

export default MainInfo
