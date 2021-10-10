import React from "react";

import Signal from '../images/reactComponent/Signal'
import Battery from '../images/reactComponent/Battery'
import Wifi from '../images/reactComponent/Wifi'

function Header() {
  const now = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  return (
      <header>
        <div className="subHeader">
          <p className="time"> {now} </p>
          <div className="empty"></div>
          <div className="iconss">
            <span className="signal"> <Signal/> </span> <span className="signal"><Wifi /></span> <span className="battery"> <Battery/> </span>
          </div>
        </div>
         <p className="topText"> Trollbasket</p>
      </header>
  );
}

export default Header;
