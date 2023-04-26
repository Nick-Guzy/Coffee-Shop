import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props) {
  return (
    <React.Fragment>
    <hr/>
    {props.coffeeList.map((coffee) =>
      <Coffee 
        whenCoffeeClicked = { props.onCoffeeSelection }
        whenRestockClicked = { props.onRestock }
        whenAddToCartClicked = { props.onAddToCart }
        origin={coffee.origin}
        price={coffee.price}
        roast={coffee.roast}
        quantity={coffee.quantity}
        pic={coffee.pic}
        low={coffee.low}
        id={coffee.id}
        key={coffee.id}/>
    )}
  </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func,
  onRestock: PropTypes.func,
  onAddToCart: PropTypes.func
};

export default CoffeeList;