import React from "react";
import "./HoneyPopUp.scss";

export default function HoneyPopUp() {
  const closePopUp = () => {
    console.log("clicled");
    document.querySelector(".honey-pop-up").classList.remove("animate");
  };

  return (
    <div className="honey-pop-up">
      <span className="x-btn" onClick={closePopUp}>
        <img src={require("../../images/svgs/ex-btn.svg")} />
      </span>
      <img src={require("../../images/svgs/honey-creative-logo.svg")} />
      <h3 className="white-text">TRIdigital is evolving!</h3>
      <p className="white-text">
        TRIdigital is becoming Honey Creative! TRIdigital and the Honey Brand
        are formally becoming one entity to help us achieve our shared vision of
        transforming sales and marketing in the IT industry.
      </p>
    </div>
  );
}
