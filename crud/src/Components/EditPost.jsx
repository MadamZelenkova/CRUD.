import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditPost() {
  const { postId } = useParams();
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:7070/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setContent(data.post.content);
      });
  }, [postId]);

  function saveHandler() {
    const reg = /^[a-zA-Zа-яА-Я0-9\s.,!?]{1,}$/;
    if (!reg.test(content)) {
      alert("Введены недопустимые символы или поле ввода не заполнено");
      return;
    }

    fetch(`http://localhost:7070/posts/${postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: Number(postId), content }),
    }).then(() => navigate(`/posts/${postId}`));
  }

  return (
    <div className="mainContainer">
      <button onClick={() => navigate(`/posts/${postId}`)}>X</button>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={saveHandler}>Сохранить</button>
    </div>
  );
}
