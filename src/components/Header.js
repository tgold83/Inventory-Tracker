import React from "react";
import CamelCaseCoffee from "./../img/CamelCaseCoffee.png";

function Header(){
  return(
    <React.Fragment>
      <h1>Welcome to CamelCaseCoffee</h1>
      <h3>Our MAIN FUNCTION is to supply you with the the best JAVA!</h3>
      <img src={CamelCaseCoffee} alt="coffee logo" width='15%' />
    </React.Fragment>
  );
}

export default Header;