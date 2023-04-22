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
      <br></br>
      <b>Columbian-Light-Medium-Dark | Kenyan-Light-Medium-Dark | Ethopian-Light-Medium-Dark</b>
      <form onSubmit={handleNewCoffeeFormSubmission}>
        <p>Coffee:  

          <select
          name='origin'
          id='Origin'>
            <option value="Columbian">Columbian</option>
            <option value="Ethiopian">Ethiopian</option>
            <option value="Kenyan">Kenyan</option>
          </select>
        <br></br></p>
        <input
          type='number'
          name='price'
          placeholder='Price' /><br></br>
        <select name='roast'
          id='Roast' >
          <option value="Light">Light</option>
          <option value="Medium">Medium</option>
          <option value="Dark">Dark</option>
        </select>
        <br></br>
        <input
          type='number'
          name='quantity'
          placeholder='Quantity' 
          defaultValue='130'/><br></br>
        <button type='submit'>Submit Coffee!</button>
      </form>
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;