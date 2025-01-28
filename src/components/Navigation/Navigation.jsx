import { Link } from "react-router-dom";
import s from "../Header/Header.module.css";

const Navigation = () => {
  return (
    <div>
      <nav>
        <ul className={s.navList}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/catalog">Catalog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
