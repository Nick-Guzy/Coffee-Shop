import React from "react";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeList from "./CoffeeList";
import CoffeeDetail from "./CoffeeDetail";

class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      mainCoffeeCart: [],
      selectedCoffee: null,
      // lowCoffee: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false,
    });
  };

  handleAddingNewCoffeeToCart = (newCoffee) => {
    let newMainCoffeeCart = [...this.state.mainCoffeeCart];
    let newMainCoffeeList = [...this.state.mainCoffeeList];
    let newCoffeeInCart = newMainCoffeeCart.filter(
      (coffee) => coffee.id === newCoffee.id
    )[0];
    let newCoffeeInList = newMainCoffeeList.filter(
      (coffee) => coffee.id === newCoffee.id
    )[0];
    if (newCoffeeInCart && newCoffeeInList && newCoffeeInList.quantity >= 1) {
      newCoffeeInCart.quantity += 1;
      newCoffeeInList.quantity -= 1;
      if (newCoffeeInList.quantity < 20) {
        newCoffeeInList.low = "Coffee low";
      }
    } else if (newCoffeeInList.quantity >= 1) {
      let initialCoffeeToAdd = { ...newCoffee, quantity: 1 };
      newMainCoffeeCart.push(initialCoffeeToAdd);
      newCoffeeInList.quantity -= 1;
    }
    this.setState({
      mainCoffeeCart: newMainCoffeeCart,
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false,
    });
  };

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(
      (coffee) => coffee.id === id
    )[0];
    this.setState({ selectedCoffee: selectedCoffee });
  };

  restock = (inputId) => {
    let newRestockCoffeeList = this.state.mainCoffeeList;
    newRestockCoffeeList.filter((coffee) => coffee.id === inputId)[0]
      .quantity++;
    if (
      newRestockCoffeeList.filter((coffee) => coffee.id === inputId)[0]
        .quantity >= 20
    ) {
      newRestockCoffeeList.filter((coffee) => coffee.id === inputId)[0].low =
        null;
    }
    this.setState({
      mainCoffeeList: newRestockCoffeeList,
      formVisibleOnPage: false,
    });
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedCoffee != null) {
      currentlyVisibleState = (
        <CoffeeDetail coffee={this.state.selectedCoffee} />
      );
      buttonText = "Return to Coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />
      );
      buttonText = "Return to Coffee List";
    } else {
      currentlyVisibleState = (
        <CoffeeList
          coffeeList={this.state.mainCoffeeList}
          onCoffeeSelection={this.handleChangingSelectedCoffee}
          onRestock={this.restock}
          onAddToCart={this.handleAddingNewCoffeeToCart}
        />
      );
      buttonText = "Add Coffee";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
        <div>
          {this.state.lowInventoryMessage && (
            <p>{this.state.lowInventoryMessage}</p>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default CoffeeControl;
