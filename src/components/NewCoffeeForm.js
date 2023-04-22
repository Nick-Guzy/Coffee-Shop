import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewCoffeeForm(props) {

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      origin: event.target.origin.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      quantity: event.target.quantity.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewCoffeeFormSubmission}>
        <p>Coffee:  
        <input
          type='text'
          name='origin'
          placeholder='origin of Coffee' /><br></br></p>
        <input
          type='number'
          name='price'
          placeholder='Price' /><br></br>
        <textarea
          name='roast'
          placeholder='Roast' /><br></br>
        <input
          type='number'
          name='quantity'
          placeholder='Quantity' /><br></br>
        <button type='submit'>Submit Coffee!</button>
      </form>
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;