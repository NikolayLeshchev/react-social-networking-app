import s from "./ProfileInfo.module.css";

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


export default ProfileInfo;
