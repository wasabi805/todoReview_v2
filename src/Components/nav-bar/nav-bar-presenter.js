import React from "react";
import trdLogo from "../../assets/images/trd-sport-vector-logo.png";

const NavBarPresenter = props => {
  return (
    <nav id={"nav-bar"}>
      <a href={"/"} className="badge">
        <img src={trdLogo} alt={""} />
      </a>

      <ul className="links">
        <li>
          <a href=""> Home</a>
        </li>
        <li>
          <a href=""> About</a>
        </li>
        <li>
          <a href=""> Products</a>
        </li>
        <li>
          <a href=""> Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBarPresenter;
