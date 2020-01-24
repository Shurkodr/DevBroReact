'use strict';

function parallax() {
  const mainStone = document.querySelector('.main-stone');
  const scroll_count = document.documentElement.scrollTop;
  mainStone.style.transform = `translate(0,${scroll_count / 200 * 80}px)`;
}

export default parallax;
