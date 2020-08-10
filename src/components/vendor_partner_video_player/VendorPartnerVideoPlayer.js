import React, { useEffect, useState } from "react";

const YourVideo = props => {
  const [isMobile, setIsMobile] = useState(false);
  const [videoID] = useState(props.videoID);

  useEffect(() => {
    if (window.innerWidth < 767) {
      setIsMobile(true);
    }

    const script1 = document.createElement("script");
    const script2 = document.createElement("script");

    script1.src = `https://fast.wistia.com/embed/medias/{videoID}.jsonp`;
    script1.async = true;

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);
  }, []);

  if (isMobile) {
    return (
      <div className="video-btn mobile-video-btn">
        <span
          className={
            "wistia_embed wistia_async_" +
            videoID +
            " popover=true popoverAnimateThumbnail=true popoverContent=link"
          }
        >
          <button href="#">
            <img
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/06/Capture.png"
              alt="play button"
            ></img>
          </button>
        </span>
      </div>
    );
  } else {
    return (
      <div className="video-btn">
        <span
          className={
            "wistia_embed wistia_async_" +
            videoID +
            " popover=true popoverAnimateThumbnail=true popoverContent=link"
          }
        >
          <button href="#">
            <img
              src="https://encrypted.tridigitalmarketing.com/wp-content/uploads/2020/01/Group-3451-2.png"
              alt="play button"
            ></img>
          </button>
        </span>
      </div>
    );
  }
};

export default YourVideo;
