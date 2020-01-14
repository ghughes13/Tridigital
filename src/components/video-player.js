import React from "react"

export default class YourVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hashStr: this.props.props.video,
    }
  }

  componentDidMount() {
    const script1 = document.createElement("script")
    const script2 = document.createElement("script")

    script1.src =
      "https://fast.wistia.com/embed/medias/" + this.state.hashStr + ".jsonp"
    script1.async = true

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js"
    script2.async = true

    document.body.appendChild(script1)
    document.body.appendChild(script2)
  }

  render() {
    return (
      <div>
        <div className="wistia_responsive_padding">
          <div className="wistia_responsive_wrapper">
            <div
              className={
                "wistia_embed wistia_async_" +
                this.state.hashStr +
                " videoFoam=true"
              }
            >
              <div className="wistia_swatch">
                <img
                  src={
                    "https://fast.wistia.com/embed/medias/" +
                    this.state.hashStr +
                    "/swatch"
                  }
                  alt=""
                  aria-hidden="true"
                  onoad="this.parentNode.style.opacity=1;"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
