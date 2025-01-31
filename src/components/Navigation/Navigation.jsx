import { NavLink } from "react-router-dom";
import s from "../Header/Header.module.css";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className={s.navList}>
          <li>
            <NavLink
              exact
              to="/"
              className={({ isActive }) =>
                isActive ? s.activeLink : s.inactiveLink
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                isActive ? s.activeLink : s.inactiveLink
              }
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
