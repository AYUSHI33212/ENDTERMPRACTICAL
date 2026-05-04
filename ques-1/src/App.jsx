// Correct App.jsx

import React, { useState } from "react";
import "./App.css";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? "red heart" : "white heart"}
    </button>
  );
}

function App() {
  return (
    <div>
      <h1>Like Button</h1>
      <LikeButton />
    </div>
  );
}

export default App;