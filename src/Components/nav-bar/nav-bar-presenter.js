import React from "react";

const NavBarPresenter = props => {
  return (
    <nav id={"nav-bar"}>
      <a href={"/"} className="nav-company-logo">
        <p>Company Logo</p>
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
