import React, { useEffect } from "react"
import weAreAnimation from "../scripts/weAreDiffAnimation"

function WeAreDiff() {
  useEffect(() => {
    window.addEventListener("scroll", weAreAnimation)
    return function cleanup() {
      window.removeEventListener("scroll", weAreAnimation)
    }
  })
  return (
    <section className="we-are-diff-layout">
      <div className="we-are-diff-block" id="we-are-diff-id">
        <h2 className="we-are-diff-block__header">we are different</h2>
        <p className="we-are-diff-block__description">
          We are the best when it goes to remote team extension because we own
          own <span className="mark-diff">CoWorking Network</span>.<br />
          <br />
          Developers we hire become our coworking clients so there is no need
          for us to overcharge you like other SE companies can do.
        </p>
      </div>
    </section>
  )
}

export default WeAreDiff
