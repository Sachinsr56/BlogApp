import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import SideBar from "../../Components/Sidebar/SideBar";
import HomePosts from "../../Components/Posts/HomePosts";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="Home">
        <HomePosts />
        <SideBar />
      </div>
    </>
  );
};

export default Home;
