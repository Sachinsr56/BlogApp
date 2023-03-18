import React from "react";
import "./HomePosts.css";
import Post from "../Post/Post";

const HomePosts = ({posts}) => {
  return (
    <div className="HomePost">
      {posts.map((p) => {
        return <Post post={p} />;
      })}
    </div>
  );
};

export default HomePosts;
