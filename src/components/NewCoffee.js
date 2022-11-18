import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableCoffeeForm from "./ReusableCoffeeForm";

function NewCoffee(props){

  function handleNewCoffeeSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      price: event.target.price.value,
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    })
  }

  return (
    <React.Fragment>
      <ReusableCoffeeForm
        formSubmissionHandler={handleNewCoffeeSubmission}
        buttonText="Add New Coffee" />
    </React.Fragment>
  );
}

NewCoffee.propTypes = {
  onNewCoffee: PropTypes.func
};

export default NewCoffee;