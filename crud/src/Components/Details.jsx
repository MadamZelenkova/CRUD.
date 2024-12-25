import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Details() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:7070/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data.post);
      });
  }, [postId]);

  function deleteHandler() {
    fetch(`http://localhost:7070/posts/${postId}`, {
      method: "DELETE",
    }).then(() => navigate("/"));
  }

  if (!post) return <p>Loading...</p>;

  return (
    <div className="mainContainer">
      <button className="closeBtn" onClick={() => navigate("/")}>
        X
      </button>
      <div className="user">
        <div className="foto"></div>
        <div>Main User</div>
      </div>
      <h3>{post.content}</h3>
      <div className="btns">
        <button
          onClick={() => {
            navigate(`/posts/${postId}/edit`);
          }}
        >
          Редактировать
        </button>
        <button onClick={deleteHandler}>Удалить</button>
      </div>
    </div>
  );
}
