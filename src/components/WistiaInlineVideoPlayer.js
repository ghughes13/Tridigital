import React, { useEffect, useState } from "react";

const InlineVideo = props => {
  //Call in parent like this --> <Yourvideo videoID={"wistia-video-id"} />
  const [videoID] = useState(props.videoID);

  useEffect(() => {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");

    script1.src = `https://fast.wistia.com/embed/medias/{videoID}.jsonp`;
    script1.async = true;

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);
  }, []);

  return (
    <div className="inline-wistia-video">
      <div class="wistia_responsive_padding">
        <div class="wistia_responsive_wrapper">
          <div
            class={"wistia_embed wistia_async_" + videoID + " videoFoam=true"}
          >
            <div class="wistia_swatch">
              <img
                src={
                  "https://fast.wistia.com/embed/medias/" + videoID + "/swatch"
                }
                aria-hidden="true"
                onLoad={e => (e.target.parentNode.style.opacity = 1)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InlineVideo;
