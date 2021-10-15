import React, {useState} from "react";
import Location from '../images/reactComponent/Location'
import Wallet from '../images/reactComponent/Orders'
import ShoppingCartIcon from '../images/reactComponent/Cart'

function Miniheader() {
  const [inputText, setInputText] = useState("Lagos");

   function handleChange(event) { 
    const val = event.target.value
    setInputText(val)
   }

  return (
    <div className="mini-header">
      <div className="mini-header1">
        <div>
            <label htmlFor="category"><Location /></label>
            <div className="currentLocation">
              <span > {inputText} </span>
            </div>
            <select id="category" value={inputText} onChange={handleChange}>
                <option className="" value=""></option>
                <option className="" value="Lagos">Lagos</option>
                <option className="" value="Abuja">Abuja</option>
                <option className="" value="Newyork"> New York</option>
                <option className="" value="London"> London</option>
            </select>
            {/* <input id="category" value={inputText} onChange={handleChange} /> */}
        </div>
        <hr className="midCat"/>
        <div> 
            <Wallet />
            <span className="walletText"> <a className="orders" href="#">  My orders </a> </span>   
        </div>
        <hr className="midCat"/>
        <div>
        <a className="" type="button" aria-haspopup="true" data-ga-event-category="AppBar" data-ga-event-action="toggleNotifications" aria-label="Toggle notifications panel">
          <span className="cart"> <ShoppingCartIcon /> <span className="quantity">9</span></span>
          <span className="MuiTouchRipple-root"></span>
        </a>
        <span className="carty"> 
          <a> Cart </a> 
        </span>
      </div>
      </div>
    </div>
  );
}

export default Miniheader;
