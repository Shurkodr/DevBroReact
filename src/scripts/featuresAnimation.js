'use strict';

function featuresAnimation () {
  const featuresBlockOne = document.querySelector('.feature-animation-one');
  const featuresBlockOnePostion = {
    top: window.pageYOffset + featuresBlockOne.getBoundingClientRect().top,
  };
  const featuresBlockTwo = document.querySelector('.feature-animation-two');
  const featuresBlockTwoPostion = {
    top: window.pageYOffset + featuresBlockTwo.getBoundingClientRect().top,
  };
  const featuresBlockThree = document.querySelector('.feature-animation-three');
  const featuresBlockThreePostion = {
    top: window.pageYOffset + featuresBlockThree.getBoundingClientRect().top,
  };
  const windowsPosition = {
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

export default featuresAnimation;
