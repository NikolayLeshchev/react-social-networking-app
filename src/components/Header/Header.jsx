import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

function Heder() {
  return (
    <header className={s.header}>
      <NavLink to='/profile'><p className={s.logo}>Logo<span>.</span></p></NavLink>
      
    </header>
  );
}

export default Heder;
