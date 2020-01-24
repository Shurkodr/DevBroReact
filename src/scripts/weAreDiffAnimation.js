'use strict';

function weAreAnimation() {
  const element = document.getElementById("we-are-diff-id");

  const elementPosition = {
    top: window.pageYOffset + element.getBoundingClientRect().top,
  };

  const windowsPosition = {
    bottom : window.pageYOffset + document.documentElement.clientHeight,
  };

  if (windowsPosition.bottom > (elementPosition.top + 130)) {
    element.style.opacity = "1";
    element.style.transform = "translate(0)";

  } else {
    element.style.opacity = "0";
    element.style.transform = "translate(-100px)";
  }
}

export default weAreAnimation;
