import React, { useEffect } from "react";

const FullPageVideo = ({ videoID }) => {
  console.log(videoID);
  useEffect(() => {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");

    script1.src = "https://fast.wistia.com/embed/medias/" + videoID + ".jsonp";
    script1.async = true;

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);
  });

  return (
    <div>
      <div className="wistia_responsive_padding">
        <div className="wistia_responsive_wrapper">
          <div
            className={
              "wistia_embed wistia_async_" + videoID + " videoFoam=true"
            }
          >
            <div className="wistia_swatch">
              <img
                src={
                  "https://fast.wistia.com/embed/medias/" + videoID + "/swatch"
                }
                alt=""
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPageVideo;
