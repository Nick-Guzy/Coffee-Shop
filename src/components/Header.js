import React from "react";
import coffee from "./../img/coffee.png";


function Header() {
  return (
    <React.Fragment>
      <h1>Coffee Site</h1>
      <img src={coffee} alt="This is Coffee"/>
    </React.Fragment>
  );
}

export default Header;