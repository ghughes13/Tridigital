import React from "react"

export default class YourVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    const script1 = document.createElement("script")
    const script2 = document.createElement("script")

    script1.src =
      "https://fast.wistia.com/embed/medias/td8c3fksrg.jsonp"
    script1.async = true

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js"
    script2.async = true

    document.body.appendChild(script1)
    document.body.appendChild(script2)
  }

  render() {
    return (
      <div className="video-btn">
        <span className="wistia_embed wistia_async_td8c3fksrg popover=true popoverAnimateThumbnail=true popoverContent=link">
        <a href="#">
                  <img
                    src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/01/Group-3451-2.png"
                    alt="play button"
                  ></img>
                </a>
        </span>
      </div>
    )
  }
}