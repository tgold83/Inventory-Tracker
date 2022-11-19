import React from "react";
import PropTypes from "prop-types";
import {useState} from "react";

function CoffeeDetail(props){
  const { coffee, onClickingDelete} = props;
  const [quantity, setQuantity] = useState(130);
  let decrementQuantity = () => setQuantity(quantity - 1);
  if(quantity<=1 || quantity=="Out of Stock") {
    decrementQuantity = () => setQuantity("Out of Stock");
  }
  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>Coffee Name: {coffee.name}</h3>
      <h4><em>Country of Origin: {coffee.orign} - {coffee.roast} roast</em></h4>
      <h4>Price per 1 lb: {coffee.price}</h4>
      <h4>Quantity Available (lbs): {quantity}</h4>
      <button onClick={decrementQuantity}>Buy One Pound of Coffee</button>
      <button onClick={ props.onClickingEdit }>Update Coffee</button>
      <button onClick={()=> onClickingDelete(coffee.id) }>Delete Coffee</button> 
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  quantity: PropTypes.object,
  decrementQuantity: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
}

export default CoffeeDetail;