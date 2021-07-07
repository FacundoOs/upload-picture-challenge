import React from "react";
import { CardActionArea, CardMedia, CardContent, Typography, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const PostsCard = ({ posts }) => {
  const classes = useStyles();
  // console.log(posts);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={posts.image} title="Contemplative Reptile" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {posts.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {posts.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PostsCard;

const useStyles = makeStyles({
  root: {
    width: 600,
    marginTop: 60,
    "@media (max-width:640px)": {
      width: 325,
    },
  },
  media: {
    height: 340,
  },
});
