import React from "react";

const ProductCard = (props) => {
  let { productName, imageUrl, price, description } = props.product;
  let imgClassNames = "img.fluid m-0";

  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{productName}</p>
      </div>
      <div className="image-container">
        <img className={imgClassNames} width="100%" src={imageUrl} alt=""></img>
      </div>
      <div className="card-body">
        <p className="card-text">
          <h3>{price} USD</h3>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
