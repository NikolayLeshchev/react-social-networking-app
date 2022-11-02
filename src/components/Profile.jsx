import s from "./Profile.module.css";

function Profile() {
  return (
    <main className={s.main_content}>
      <img
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        alt="bg"
      />
      <div>
        {/* для авы   https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg */}
        ava+deskr
      </div>
      <div>
        posts
        <div>new post</div>
      </div>
      <div className={s.item}>post 1</div>
      <div>post 2</div>
    </main>
  );
}

export default Profile;
