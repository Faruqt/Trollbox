import React from "react";
import info1 from "../images/info1.png"

function InfoCard() {
  return (
    <div data-flickity='{"imagesLoaded": true, "wrapAround": true}' className=
    "Info">
        <div style={{
            backgroundImage: `url(${info1})`
          }}className="card-one">
           <div className="txter"> Having any <span className="mini-text">issues</span> with your order?  </div>
           <div className="cntct"> <button className="btn"> Contact Us </button> </div> 
       </div>
        <div className="card-three">
           <span> </span>
           <button className=""></button>
       </div>
       <div className="card-two">
            <span> </span>
            <button className=""> </button>
        </div>
    </div>
  );
}

export default InfoCard;
