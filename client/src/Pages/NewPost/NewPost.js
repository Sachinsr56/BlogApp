import React from "react";
import "./NewPost.css";

const NewPost = () => {
  return (
    <div className="create">
      <img
        className="createImg"
        src="https://images.pexels.com/photos/1274113/pexels-photo-1274113.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <form className="createForm">
        <div className="createFormGroup">
          <label htmlFor="FileInput">
            <i className="createIcon fa-solid fa-pen"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            style={{ display: "none" }}
          />
          <input
            className="createInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="createFormGroup">
          <textarea
            className="createInput createText"
            placeholder="Create your story........"
            type="text"
            rows={3}
            autoFocus={true}
          />
          <button className="createSubmit" type="submit">Publish</button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
