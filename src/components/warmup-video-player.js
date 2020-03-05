import React from "react";

export default class WarmupVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const script5 = document.createElement("script");
    const script2 = document.createElement("script");

    script5.src = "https://fast.wistia.com/embed/medias/rrynqaxpxw.jsonp";
    script5.async = true;

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;

    document.body.appendChild(script5);
    document.body.appendChild(script2);
  }

  render() {
    return (
      <div className="video-btn margin-top-50 correct-video">
        <span className="wistia_embed wistia_async_rrynqaxpxw popover=true popoverAnimateThumbnail=true popoverContent=link">
          <a href="#" className="btn pink-btn">
            Watch Video
          </a>
        </span>
      </div>
    );
  }
}
