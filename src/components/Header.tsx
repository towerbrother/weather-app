import React from "react";
import IHeader from "../interfaces/IHeader";

const Header: ({ title, subtitle }: IHeader) => JSX.Element = ({ title, subtitle }: IHeader) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{title}</h1>
      {subtitle && <h2 className="header__subtitle">{subtitle}</h2>}
    </div>
  </div>
);

export default Header;
