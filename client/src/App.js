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
import { useContext } from "react";
import { Context } from "./Context/Context";

function App() {
  const { user } = useContext(Context);
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {user ? (
            <Route path="/register" exact element={<Home />} />
          ) : (
            <Route path="/register" exact element={<Register />} />
          )}
          {user ? (
            <Route path="/login" exact element={<Home />} />
          ) : (
            <Route path="/login" exact element={<Login />} />
          )}
          {user ? (
            <Route path="/create" exact element={<NewPost />} />
          ) : (
            <Route path="/create" exact element={<Register />} />
          )}
          {user ? (
            <Route path="/settings" exact element={<Settings />} />
          ) : (
            <Route path="/settings" exact element={<Register />} />
          )}
          <Route path="/post/:id" exact element={<Single />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
