import React,{useState} from "react";
import classNames from "classnames"

function Footer(props) {
  const [isClicked, setNewStyle] = useState(false);
  
  function toDoAdded(){
    setNewStyle(true)
  }

  return (
    <footer>
      <div className= {classNames("footy", { active: isClicked })} onClick={toDoAdded}>
        <div> {props.icon} </div>
        <p>{props.name}</p>
      </div>
    </footer>
  )
}

export default Footer;

