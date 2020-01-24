import React,{Component} from "react";

class MainInfo extends Component{
  constructor(props) {
    super(props);
    this.featuresAnimation = this.featuresAnimation.bind(this);
    this.parallax = this.parallax.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.featuresAnimation);
    window.addEventListener('scroll', this.parallax);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.featuresAnimation);
    window.removeEventListener('scroll', this.parallax);
  }

  featuresAnimation() {
    let featuresBlockOne = document.querySelector('.feature-animation-one');
    let featuresBlockOnePostion = {
      top: window.pageYOffset + featuresBlockOne.getBoundingClientRect().top,
    };
    let featuresBlockTwo = document.querySelector('.feature-animation-two');
    let featuresBlockTwoPostion = {
      top: window.pageYOffset + featuresBlockTwo.getBoundingClientRect().top,
    };
    let featuresBlockThree = document.querySelector('.feature-animation-three');
    let featuresBlockThreePostion = {
      top: window.pageYOffset + featuresBlockThree.getBoundingClientRect().top,
    };
    let windowsPosition = {
      bottom : window.pageYOffset + document.documentElement.clientHeight,
    };

    if (windowsPosition.bottom > (featuresBlockOnePostion.top + 130)) {
      featuresBlockOne.style.opacity = "1";
      featuresBlockOne.style.transform = "rotateY(0)";
    } else {
      featuresBlockOne.style.opacity = "0";
      featuresBlockOne.style.transform = "rotateY(90deg)";
    }
    if (windowsPosition.bottom > (featuresBlockTwoPostion.top + 130)) {
      featuresBlockTwo.style.opacity = "1";
      featuresBlockTwo.style.transform = "rotateY(0)";
    } else {
      featuresBlockTwo.style.opacity = "0";
      featuresBlockTwo.style.transform = "rotateY(-90deg)";
    }
    if (windowsPosition.bottom > (featuresBlockThreePostion.top + 130)) {
      featuresBlockThree.style.opacity = "1";
      featuresBlockThree.style.transform = "scale(1)";
    } else {
      featuresBlockThree.style.opacity = "0";
      featuresBlockThree.style.transform = "scale(.5)";
    }
  }

  parallax() {
    let mainStone = document.querySelector('.main-stone');
    let scroll_count = document.documentElement.scrollTop;
    mainStone.style.transform = `translate(0,${scroll_count / 200 * 80}px)`;
  }

  render() {
    return (
      <section className="main-info">
        <div className="promo">
          <h1 className="promo__header">Devbrother</h1>
          <h2 className="promo__header_describe">your software engineering family</h2>
          <div className="main-describe">
            <p className="main-describe__text">ALWAYS FOCUSED ON YOUR REAL RESULT</p>
            <button className="button-for-talk" type="button">Let’s talk</button>
          </div>
        </div>
        <div className="main-features">
          <section className="feature">
            <div className="feature__container feature-animation-one">
              <h3 className="feature__header">Extend your<br/>team</h3>
              <p className="feature__describe">Boost your development team with DevBrother’s dedicated specialists.</p>
            </div>
          </section>
          <section className="feature">
            <div className="feature__container feature-animation-two">
              <h3 className="feature__header">Implement your<br/>idea</h3>
              <p className="feature__describe">Create or support you online business representation.</p>
            </div>
          </section>
          <section className="feature">
            <div className="feature__container feature-animation-three">
              <h3 className="feature__header">Free-up your<br/>team time</h3>
              <p className="feature__describe">Devops, QA, Development support for your team.</p>
            </div>
          </section>
        </div>
        <img className="main-stone" src={require("../images/backgrounds/parallax/stone-main.png")} alt="stone"/>
      </section>
    );
  }
}

export default MainInfo;
