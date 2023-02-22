import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

function Heder() {
  return (
    <header className={s.header}>
      <NavLink to='/profile'><img className={s.logo}
        src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/xing-512.png"
        alt="logo"
      /></NavLink>
      
    </header>
  );
}

export default Heder;
