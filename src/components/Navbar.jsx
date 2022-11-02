import s from "./Navbar.module.css";
console.log(s);
function Navbar() {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href="#p">Profile</a>
      </div>
      <div className={s.item}>
        <a href="#m">Messages</a>
      </div>
      <div className={s.item}>
        <a href="#n">News</a>
      </div>
      <div className={s.item}>
        <a href="#m">Music</a>
      </div>
      <div className={s.item}>
        <a href="#s">Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;
