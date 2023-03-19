import React, { useState, useContext } from "react";
import axios from "axios";
import { Context } from "../../Context/Context";
import "./NewPost.css";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log('Error in uploading file')
      }
    }
    try {
      const res = await axios.post("/post/", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err.message)
    }
  };
  return (
    <div className="create">
      {file && (
        <img className="createImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="createForm" onSubmit={handleSubmit}>
        <div className="createFormGroup">
          <label htmlFor="fileInput">
            <i className="createIcon fa-solid fa-pen"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            // style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="createInput"
            placeholder="Title"
            type="text"
            autoFocus={true} onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="createFormGroup">
          <textarea
            className="createInput createText"
            placeholder="Create your story........"
            type="text"
            rows={5}
            autoFocus={true}
            onChange={e=>setDesc(e.target.value)}
          />
          <button className="createSubmit" type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
