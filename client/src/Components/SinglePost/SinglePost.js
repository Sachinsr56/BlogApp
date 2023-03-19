import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../Context/Context";
import { useLocation } from "react-router";
import "./SinglePost.css";
const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [users, setUser] = useState();
  const [updateMode, setUpdateMode] = useState(false);
  const PF = "http://localhost:5000/images/";

  const { user } = useContext(Context);
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
  const handleDelete = async () => {
    try {
      await axios.delete(`/post/${post._id}`, {
        data: { userId: user._id },
      });
      window.location.replace("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/post/${post._id}`, {
        userId: user._id,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={PF + post.photo} alt="postImage" />
        {updateMode ? (
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <>
            <h1 className="singlePostTitle">{title}</h1>
            <div className="singlePostEdit">
              <i
                className="singlePostIcon far fa-2x fa-edit"
                onClick={() => setUpdateMode(true)}
              ></i>
              <i
                className="singlePostIcon far fa-2x fa-trash-alt"
                onClick={handleDelete}
              ></i>
            </div>
          </>
        )}
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <a className="link" href={`/?user=${post.userId}`}>
                {users}
              </a>
            </b>
          </span>
          <span> {new Date(post.createdAt).toDateString()}</span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            rows={5}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
