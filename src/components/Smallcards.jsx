import React from "react";

function Card(props) {
  return (
    <div className="smallCards">
      <div> {props.image} </div>
      <p>{props.name}</p>
    </div>
  )
}

export default Card;
