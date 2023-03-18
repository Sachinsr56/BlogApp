import React from "react";
import "./Post.css";
const Post = ({ post }) => {
  const postUrl = `/post/${post._id}`;
  return (
    <div className="Post">
      <img className="PostImg" src={post.photo} alt="" />
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => {
            return <span className="postCat">{c}</span>;
          })}
        </div>
        <a href={postUrl} className="link">
          <span className="postTitle">{post.title}</span>
        </a>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
};

export default Post;
