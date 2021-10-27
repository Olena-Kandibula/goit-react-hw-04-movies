import { NavLink } from "react-router-dom";

import s from "../Navigation/Navigation.module.css";

function Navigation() {
  return (
    <nav className={s.navigation}>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>

      <NavLink
        to="/movies"
        className={s.link}
        activeClassName={s.activeLink}
        exact
      >
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
