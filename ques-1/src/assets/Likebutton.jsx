import React, { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
      style={{
        fontSize: "40px",
        border: "none",
        background: "transparent",
        cursor: "pointer"
      }}
    >
      {liked ? "red heart" : "white heart"}
    </button>
  );
}

export default LikeButton;