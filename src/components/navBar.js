import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Toolbar, AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            POSTS
          </Typography>
          <Button component={Link} to="/posts" color="inherit">
            POSTS
          </Button>
          <Button component={Link} to="/create-posts" color="inherit">
            CREATE POSTS
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default NavBar;
