import React from "react";
import info1 from "../images/info1.png"
import Flickity from 'react-flickity-component'


const flickityOptions = {
  initialIndex: 1
}

function InfoCard() {
  return (
    // <div data-flickity='{"imagesLoaded": true, "wrapAround": true}' className=
    // "Info">
    //     <div style={{
    //         backgroundImage: `url(${info1})`
    //       }}className="card-one">
    //        <div className="txter"> Having any <span className="mini-text">issues</span> with your order?  </div>
    //        <div className="cntct"> <button className="btn"> Contact Us </button> </div> 
    //    </div>
    //     <div className="card-three">
    //        <span> </span>
    //        <button className=""></button>
    //    </div>
    //    <div className="card-two">
    //         <span> </span>
    //         <button className=""> </button>
    //     </div>
    // </div>
    <Flickity
      className={'Info'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={true} // default false
      //reloadOnUpdate // default false
      static // default false
    >
        <div className="card-two">
           <span> </span>
           <button className=""></button>
       </div>
       <div style={{
            backgroundImage: `url(${info1})`
          }}className="card-one">
           <div className="txter"> Having any <span className="mini-text">issues</span> with your order?  </div>
           <div className="cntct"> <button className="btn"> Contact Us </button> </div> 
       </div>
       <div className="card-three">
            <span> </span>
        </div>
    </Flickity>
  );
}

export default InfoCard;
