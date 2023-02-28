import s from "./MyPosts.module.css";
import Post from "../MyPosts/Post/Post";

function MyPosts() {

  let postsData = [
    { id: 1, photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeBmbjZ16b5ywX0bu0UI7ai3KSShSqmllwiqbeGSeOIPP43YD-QP1BM02bAqNytRLvtes&usqp=CAU", message:"Hello, how are you?", likeCount:"15" },
    { id: 2, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeBmbjZ16b5ywX0bu0UI7ai3KSShSqmllwiqbeGSeOIPP43YD-QP1BM02bAqNytRLvtes&usqp=CAU", message: "Hi, it's my first post", likeCount: "20" },
    { id: 3, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeBmbjZ16b5ywX0bu0UI7ai3KSShSqmllwiqbeGSeOIPP43YD-QP1BM02bAqNytRLvtes&usqp=CAU", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, aperiam, possimus illum necessitatibus mollitia voluptatum neque repellat quaerat id, cumque eum sequi ullam non. Consequatur ratione facilis minus praesentium? Facere.", likeCount: "8" }
  ]

  return (
    <section className={s.postsSection}>
      <div>
        <h3 className="title">My posts</h3>
        <div className={s.addPost}>
          <textarea></textarea>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.post}>
        {postsData.map(el => <Post photo={el.photo} message={el.message} likeCount={el.likeCount} />)}
      </div>
    </section>
  );
}

export default MyPosts;
