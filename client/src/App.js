import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NewPost from "./Pages/NewPost/NewPost";
import Settings from "./Pages/Settings/Settings";
import Single from "./Pages/Single/Single";
import Register from "./Pages/Register/Register";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/posts" exact element={<Home />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/post/:id" exact element={<Single />} />
          <Route path="/create" exact element={<NewPost />} />
          <Route path="/settings" exact element={<Settings />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
