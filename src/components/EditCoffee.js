import React from "react";
import ReusableCoffeeForm from "./ReusableCoffeeForm";
import PropTypes from "prop-types";

function EditCoffee (props) {
  const { coffee } = props;

  function handleEditCoffeeSubmission(event) {
    event.preventDefault();
    props.onEditCoffee({name: event.target.name.value, origin: event.target.origin.value, roast: event.target.roast.value, price: event.target.price.value, id: coffee.id})
  }

  return (
    <React.Fragment>
      <ReusableCoffeeForm 
        formSubmissionHandler = {handleEditCoffeeSubmission}
        buttonText="Update Coffee" />
    </React.Fragment>
  );
}

EditCoffee.propTypes = {
  coffee: PropTypes.object,
  onEditCoffee: PropTypes.func
};

export default EditCoffee;