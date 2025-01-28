import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
