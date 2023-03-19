import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Post.css";
const Post = ({ post }) => {
  const [user, setUser] = useState();
  const postUrl = `/post/${post._id}`;
  const PF = "http://localhost:5000/images/";
  useEffect(() => {
    const getUser = async () => {
      const users = await axios.get("/user/" + post.userId);
      setUser(users.data.username);
    };
    getUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="Post">
      <img className="PostImg" src={PF + post.photo} alt="" />
      <div className="postInfo">
        <div className="postCats">
          {post.categories.length?"Category: ":""}
          {post.categories.map((c) => {
            return <a className="link" href={`/?cat=${c}`}><span className="postCat">{c}</span></a>;
          })}
        </div>
        <a href={postUrl} className="link">
          Title:
          <span className="postTitle">{post.title}</span>
        </a>
        <hr />
      </div>
      <div className="singlePostInfo">
        <span>
          Author:
          <b className="singlePostAuthor">
            <a className="link" href={`/?user=${post.userId}`}>
              {user}
            </a>
          </b>
        </span>
        <span className="postDate">
          {" "}
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
