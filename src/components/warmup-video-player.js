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
      "https://fast.wistia.com/embed/medias/qsoja1q4o2.jsonp"
    script1.async = true

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js"
    script2.async = true

    document.body.appendChild(script1)
    document.body.appendChild(script2)
  }

  render() {
    return (
      <div className="video-btn">
        <span className="wistia_embed wistia_async_scialrmh2w popover=true popoverAnimateThumbnail=true popoverContent=link">
          <a href="#">
            <span className="btn pink-btn">WATCH VIDEO</span>          
          </a>
        </span>
      </div>
    )
  }
}