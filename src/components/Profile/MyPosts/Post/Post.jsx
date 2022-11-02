import s from "./Post.module.css";

function Post(props) {
  return (
    <div className={s.item}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeBmbjZ16b5ywX0bu0UI7ai3KSShSqmllwiqbeGSeOIPP43YD-QP1BM02bAqNytRLvtes&usqp=CAU"
        alt="user"
      />
      {props.message}
      <div>
        <span>{props.likeCount} Likes</span>
      </div>
    </div>
  );
}

export default Post;
