import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return(
    <React.Fragment>
      <div onClick={() => props.whenCoffeeClicked(props.id)}>
        <h2>{props.name}</h2>
        <h5>Click for more info about this type of coffee.</h5>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired, 
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;