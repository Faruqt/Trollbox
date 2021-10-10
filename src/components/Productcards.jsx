import React from "react";

function Product(props) {
  return (
    <div className="product">
      <img src={props.images} alt="" />
      <p className="prodname">{props.pname}</p>
      <p className="price">${props.lprice} - ${props.hprice}</p>
      <p className="moq">{props.pieces}</p>
    </div>
  )
}

export default Product;
