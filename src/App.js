import React from "react";
import "./App.css";
import CreatePost from "./components/createPost";
import Posts from "./components/posts";
import NavBar from "./components/navBar";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/posts" component={Posts}></Route>
        <Route exact path="/create-posts" component={CreatePost}></Route>
      </Switch>
    </>
  );
}

export default App;
