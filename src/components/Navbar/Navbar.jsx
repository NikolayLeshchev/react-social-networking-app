import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink className={navData => navData.isActive ? s.activeNavItem : s.item} to="/profile">Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={navData => navData.isActive ? s.activeNavItem : s.item} to="/dialogs">Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={navData => navData.isActive ? s.activeNavItem : s.item} to="/news">News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={navData => navData.isActive ? s.activeNavItem : s.item} to="/music">Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={navData => navData.isActive ? s.activeNavItem : s.item} to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
