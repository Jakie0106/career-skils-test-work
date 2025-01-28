import { Link } from "react-router-dom";
import s from "./WelcomeComp.module.css";

const WelcomeComp = () => {
  return (
    <div className={s.welcomeContainer}>
      <div className={s.listContainer}>
        <div className={s.titleContainer}>
          <h1 className={s.mainTitle}>Campers of your dreams</h1>
          <h2 className={s.secTitle}>
            You can find everything you want in our catalog
          </h2>
        </div>
        <Link className={s.linkToCatalog} to="/catalog">
          <p className={s.linkText}>View Now</p>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeComp;
