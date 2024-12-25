import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PostsList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7070/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="mainContainer">
      <button className="create">
        <Link to="/posts/new">Создать пост</Link>
      </button>
      <div className="postsContainer">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <div className="user">
                <div className="foto"></div>
                <div>Main User</div>
              </div>
              <h3>{post.content}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
