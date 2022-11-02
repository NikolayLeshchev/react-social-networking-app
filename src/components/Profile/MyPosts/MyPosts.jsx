import s from "./MyPosts.module.css";
import Post from "../MyPosts/Post/Post";

function MyPosts() {
  return (
    <div>
      <div>
        <h3>My posts</h3>
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.post}>
        <Post message="Hello, how are you?" likeCount="15" />
        <Post message="Hi, it's my first post" likeCount="20" />
      </div>
    </div>
  );
}

export default MyPosts;
