import React from "react";

type HeaderType = {
  title: string,
  subtitle: string
};

const Header: ({ title, subtitle }: HeaderType) => JSX.Element = ({ title, subtitle }: HeaderType) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{title}</h1>
      {subtitle && <h2 className="header__subtitle">{subtitle}</h2>}
    </div>
  </div>
);

export default Header;
