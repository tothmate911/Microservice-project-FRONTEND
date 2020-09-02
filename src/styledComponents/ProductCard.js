import React from "react";

const ProductCard = (props) => {
  let { name, imageUrl, price, description } = props.product;
  let imgClassNames = "img.fluid m-0";

  const addDefaultSrc = (ev) => {
    ev.target.src =
      "https://www.hopkinsmedicine.org/-/media/feature/noimageavailable.ashx";
  };

  return (
    <div className="card">
      <div className="image-container">
        <img
          className={imgClassNames}
          onError={addDefaultSrc}
          width="100%"
          src={imageUrl}
          alt=""
        ></img>
      </div>
      <div className="card-body">
        <div className="card-text">
          <h6 className="text-secondary">
            <b>{price} USD</b>
          </h6>
          <h4 className="card-text">{name}</h4>
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
