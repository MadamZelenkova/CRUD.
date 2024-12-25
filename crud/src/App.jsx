import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PostsList from "./Components/PostsList";
import NewPost from "./Components/NewPost";
import Details from "./Components/Details";
import EditPost from "./Components/EditPost";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/posts/new" element={<NewPost />} />
        <Route path="/posts/:postId" element={<Details />} />
        <Route path="/posts/:postId/edit" element={<EditPost />} />
      </Routes>
    </Router>
  );
}

export default App;
