import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  function publishHandler() {
    const reg = /^[a-zA-Zа-яА-Я0-9\s.,!?]{1,}$/;
    if (!reg.test(content)) {
      alert("Введены недопустимые символы или поле ввода не заполнено");
      return;
    }

    fetch("http://localhost:7070/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: 0, content }),
    }).then(() => navigate("/"));
  }

  return (
    <div className="mainContainer">
      <button className="closeBtn" onClick={() => navigate("/")}>
        X
      </button>
      <textarea
        placeholder="Напишите что-нибудь"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button className="publishBtn" onClick={publishHandler}>
        Опубликовать
      </button>
    </div>
  );
}
