function parallax() {
  const mainStone = document.querySelector(".main-stone")
  const scrollCount = document.documentElement.scrollTop
  mainStone.style.transform = `translate(0,${(scrollCount / 200) * 80}px)`
}

export default parallax
