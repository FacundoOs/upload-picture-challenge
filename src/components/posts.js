import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core/";
import axios from "axios";
import PostCards from "./postCards";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      await axios.get("http://localhost:5000/allPosts").then((data) => {
        // console.log(data.data.posts);
        setPosts(data.data.posts);
      });
    };
    getPosts();
  }, []);

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      {posts.map((data) => {
        return (
          <div key={data._id}>
            <PostCards posts={data} />
          </div>
        );
      })}
    </Grid>
  );
};

export default Posts;
