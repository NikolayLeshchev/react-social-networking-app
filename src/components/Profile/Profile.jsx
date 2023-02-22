import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const ProfileInfo = (props)=>{
  return (<div className={s.profileInfo}>
    <img
      className={s.profilePhoto}
      src={props.photo}
      alt="profileImg"
    />
    <div className={s.personalData}>
      <p className={s.name}>{props.name + ' ' + props.surname}</p>
      <p className={s.profileDescription}>{props.description}</p>
    </div>
    
  </div>)
}

function Profile() {
  return (
    <div>
      <img
        className={s.bgImg}
        src="https://thumbs.dreamstime.com/b/%D0%BF%D0%B0%D0%BD%D0%BE%D1%80%D0%B0%D0%BC%D0%B0-%D0%BF%D0%BB%D1%8F%D0%B6%D0%B0-%D1%82%D1%80%D0%BE%D0%BF%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F-15238661.jpg"
        alt="bg"
      />
      <ProfileInfo name="Nick" surname='Userovitch' photo="https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, aliquam veniam? Natus laboriosam vel, consectetur voluptate sint quas fugiat quod amet. At quis eos quam labore. Repellendus accusantium ab incidunt!'/>
      <MyPosts />
    </div>
  );
}

export default Profile;
