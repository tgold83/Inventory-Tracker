import React from "react";
import PropTypes from "prop-types";

function ReusableCoffeeForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Coffee Name' />
        <input
          type='text'
          name='origin'
          placeholder='Country of Origin' />
        <input
          type='text'
          name='roast'
          placeholder='This coffees roast' />
        <input
          type='text'
          name='price'
          placeholder='Price per pound' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableCoffeeForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableCoffeeForm;