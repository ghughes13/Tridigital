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
      "https://fast.wistia.com/embed/medias/scialrmh2w.jsonp"
    script1.async = true

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js"
    script2.async = true

    document.body.appendChild(script1)
    document.body.appendChild(script2)
  }

  render() {
    return (
      <div>
        <span className="wistia_embed wistia_async_scialrmh2w popover=true popoverAnimateThumbnail=true popoverContent=link">
        <a className="white-text blue-button" href="#">
                  Watch Video{" "}
                  <img
                    src="http://tdgatsbytest.wpengine.com/wp-content/uploads/2019/10/play-button.png"
                    alt="play button"
                  ></img>
                </a>
        </span>
      </div>
    )
  }
}