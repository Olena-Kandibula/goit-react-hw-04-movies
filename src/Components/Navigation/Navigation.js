// import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import PropTypes from "prop-types";

import s from "../Navigation/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={s.navigation}>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>

      <NavLink to="/movies" className={s.link} activeClassName={s.activeLink}>
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
