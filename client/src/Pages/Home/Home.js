import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import SideBar from "../../Components/Sidebar/SideBar";
import HomePosts from "../../Components/Posts/HomePosts";
const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post"+search );
      console.log(res.data)
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Navbar />
      <div className="Home">
        <HomePosts posts={posts}/>
        <SideBar />
      </div>
    </>
  );
};

export default Home;
