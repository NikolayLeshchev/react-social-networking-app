import s from "./Post.module.css";

function Post(props) {
  return (
    <div className={s.post}>
      <div className={s.postMain}>
        <img
        src={props.photo}
        alt="user"
      />
      <p className={s.postText}>{props.message}</p>
      
      </div>
      
      <div className={s.likes}>
        <span>{props.likeCount} Likes</span>
      </div>
    </div>
  );
}

export default Post;
