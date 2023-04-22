import React from "react";
import PropTypes from "prop-types";


function Coffee(props) {

  return (
    <React.Fragment>
      <div onClick={() => props.whenCoffeeClicked(props.id)}>
        <h3><em>{props.origin} - ${props.price}</em></h3>
        <p><ul><li>{props.roast}</li></ul></p>
        <p>Left in stock: {props.quantity}</p>
        <hr />
      </div>
        <button onClick={() => props.whenAddToCartClicked(props)}
        type="sumit">Add to Cart</button><span> </span>
      <div onClick={() => props.whenRestockClicked(props.id)}>
      <button type="submit">Restock</button>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  roast: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
};


export default Coffee;