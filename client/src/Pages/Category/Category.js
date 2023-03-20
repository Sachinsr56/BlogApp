import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css";

const Category = () => {
  const [createCategory, setcreateCategory] = useState("");
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/cat");
      setCategories(res.data);
    };
    getCats();
  }, []);
  const handleAdd = async () => {
    const newCat={}
    newCat.createCategory=createCategory
    try {
      await axios.post("/cat", newCat);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = async (c) => {
    try {
      await axios.delete("/cat/" + c._id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="category">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-secondary-theme p-5 shadow-effect">
            <h3 className="text-center text-theme-primary">Add Categories</h3>
            <p className="text-center mb-5">Add your categories here...!</p>
            <form action="" className=" text-center">
              <div className="form-group col-md-10">
                <input
                  type="text"
                  name="category"
                  className="form-control shadow-effect"
                  placeholder="Add New Categories"
                  required
                  onChange={(e) => setcreateCategory(e.target.value)}
                />
              </div>
              <div className="form-group col-md-2">
                <button className="btn btn-secondary mb-2" onClick={handleAdd}>
                  Add Categories
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="card shadow-effect">
            <div className="card-body">
              <table className="table row-border hover">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {categories.map((c) => {
                    return (
                      <tr>
                        <td>{c.name}</td>
                        <td>
                          <a href="/categories">
                            <button
                              className="btn btn-sm btn-danger"
                              onClick={() => handleDelete(c)}
                            >
                              Delete
                            </button>
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Category;
