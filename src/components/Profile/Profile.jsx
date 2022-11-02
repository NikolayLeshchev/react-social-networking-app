import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

function Profile() {
  return (
    <div className={s.main_content}>
      <img
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        alt="bg"
      />
      <div>
        {/* для авы   https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg */}
        ava+deskr
      </div>
      <MyPosts />
    </div>
  );
}

export default Profile;
