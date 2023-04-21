import React from "react";
import PropTypes from "prop-types";


function Coffee(props) {

  return (
    <React.Fragment>
      <div onClick={() => props.whenCoffeeClicked(props.id)}>
        <h3><em>{props.name} - ${props.price}</em></h3>
        <p><ul><li>{props.description}</li></ul></p>
        <p>Left in stock: {props.quantity}</p>
        <hr />
      </div>
      <div onClick={() => props.whenRestockClicked(props.id)}>
      <button type="submit">Restock</button>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = { //name, price, desc, quantity
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
  // whenCoffeeClicked: PropTypes.func,
  // onRestock: PropTypes.func
};


export default Coffee;