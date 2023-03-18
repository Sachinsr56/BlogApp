import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import "./SinglePost.css";
const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [user, setUser] = useState();
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/post/" + path);
      const users = await axios.get("/user/" + res.data.userId);
      setUser(users.data.username);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={post.photo} alt="" />
        <h1 className="singlePostTitle">{title}</h1>
        <div className="singlePostEdit">
          <i className="singlePostIcon far fa-2x fa-edit"></i>
          <i className="singlePostIcon far fa-2x fa-trash-alt"></i>
        </div>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <a className="link" href="/posts?username=Sachin">
                {user}
              </a>
            </b>
          </span>
          <span> {new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">{desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
