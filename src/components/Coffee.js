import React from "react";
import PropTypes from "prop-types";
import CoffeeBag from "./../img/CoffeeBag.png";

function Coffee(props) {
  return (
    <React.Fragment>
      <div>
        <h3>
          <em>
            {props.origin} - ${props.price}
          </em>
        </h3>
        <p>
          <ul>
            <li>{props.roast}</li>
          </ul>
        </p>
        <p>
          Left in stock: {props.quantity}{" "}
          <h2 style={{ color: "yellow" }}>{props.low}</h2>
        </p>
        <img src={CoffeeBag} alt="coffeeBag" width="100" height="100"></img>
        <hr />
      </div>
      <button onClick={() => props.whenCoffeeClicked(props.id)}>
        Coffee Detail
      </button>
      <button onClick={() => props.whenAddToCartClicked(props)} type="sumit">
        Add to Cart
      </button>
      <button onClick={() => props.whenRestockClicked(props.id)} type="submit">
        Restock
      </button>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  roast: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  pic: <img src={CoffeeBag} alt="coffeeBag"></img>,
  low: <h2 style={{ color: "yellow" }}>Coffee low</h2>,
  id: PropTypes.string,
};

export default Coffee;
