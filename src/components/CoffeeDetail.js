import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { Coffee } = props;
  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{Coffee.name} - ${Coffee.price}</h3>
      <p><em>{Coffee.description}</em></p>
      <p><em>Available in stock: {Coffee.quantity}</em></p>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  Coffee: PropTypes.object
};

export default CoffeeDetail;