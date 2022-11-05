import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

function Profile() {
  return (
    <div>
      <img
        className={s.bgImg}
        src="https://thumbs.dreamstime.com/b/%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0-%D0%BF%D0%BB%D1%8F%D0%B6%D0%B0-%D1%82%D1%80%D0%BE%D0%BF%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-15238661.jpg"
        alt="bg"
      />
      <div>
        <img
          className={s.profilePhoto}
          src="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"
          alt=""
        />
        ava+deskr
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;
