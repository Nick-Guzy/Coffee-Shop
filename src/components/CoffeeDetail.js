import React from "react";
import PropTypes from "prop-types";


function CoffeeDetail(props){
  const { coffee } = props;
  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.origin} - ${coffee.price}</h3>
      <p><em>{coffee.roast}</em></p>
      <p><em>Available in stock: {coffee.quantity}LBS</em></p>
      {coffee.pic} {coffee.low}
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object
};

export default CoffeeDetail;