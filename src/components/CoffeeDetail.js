import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete} = props;

  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>Coffee Name: {coffee.name}</h3>
      <h4><em>Country of Origin: {coffee.orign} - {coffee.roast} roast</em></h4>
      <h4>Price: {coffee.price} - Quantity in Stock: {coffee.quantity}lbs</h4>
      <button onClick={ props.onClickingEdit }>Update Coffee</button>
      <button onClick={()=> onClickingDelete(coffee.id) }>Delete Coffee</button> 
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
}

export default CoffeeDetail;