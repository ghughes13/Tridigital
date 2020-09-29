import React from "react";

export default class YourVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hashStr: this.props.props.video,
    };
  }

  componentDidMount() {
    const script11 = document.createElement("script");
    const script22 = document.createElement("script");

    script11.src =
      "https://fast.wistia.com/embed/medias/" + this.state.hashStr + ".jsonp";
    script11.async = true;

    script22.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script22.async = true;

    document.body.appendChild(script11);
    document.body.appendChild(script22);
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
                  // onLoad={() => (this.parentNode.style.opacity = 1)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
