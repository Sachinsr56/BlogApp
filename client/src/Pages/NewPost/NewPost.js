import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../Context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/cat");
      setCats(res.data);
    };
    getCats();
  }, []);
  const { user } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !desc || !file || !category) {
      return (toast.error("Enter all the feilds!", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: 0,
        theme: "colored",
      }));
    }
    const newPost = {
      userId: user._id,
      title,
      desc,
      categories: category,
    };
    console.log(newPost);
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log("Error in uploading file");
      }
    }
    try {
      const res = await axios.post("/post/", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="create">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="text-blue">Add new Post</h3>
            <p className="mb-5">You can add new Post here</p>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-md-7">
              <div className="card shadow-effect">
                <div className="card-body">
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      className="form-control"
                      required
                      onChange={(e) => setTitle(e.target.value)}
                    ></input>
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      cols="30"
                      rows="10"
                      className="form-control"
                      onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="card shadow-effect">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="">Select a category for your Item</label>
                    <select
                      className="form-control"
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="" selected disabled>
                        Select a category
                      </option>
                      {cats.map((c) => {
                        return <option value={c.name}>{c.name}</option>;
                      })}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Image</label>
                    <input
                      type="file"
                      className="form-control"
                      accept="image/*"
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                    ></input>
                    {file && (
                      <img
                        className="m-1"
                        src={URL.createObjectURL(file)}
                        alt=""
                        style={{
                          height: "200px",
                          width: "200px",
                          borderRadius: "10px",
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center mt-3 mb-5">
            <button
            type="submit"
              className="btn btn-info m-1 text-light"
              style={{
                backgroundColor: "teal",
                width: "100px",
                height: "50px",
                fontWeight: "500",
              }}
              onClick={handleSubmit}
            >
              Publish
            </button>
            <a
              className="btn btn-success m-1"
              style={{
                height: "50px",
                fontWeight: "500",
                justifyContent: "center",
                width:'fit-content'
              }}
              href="/categories"
            >
              Add more Categories
            </a>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default NewPost;
