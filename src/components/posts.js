import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core/";
import PostCards from "./postCards";
import http from "../services/axiosConfig";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      await http
        .get("/allPosts")
        .then((data) => {
          setPosts(data.data.posts);
        })
        .catch((err) => {
          console.log(err);
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
