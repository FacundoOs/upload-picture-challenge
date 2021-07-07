import React, { useState, useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Box, Button, Grid, Typography, TextField } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";

const CreatePost = () => {
  const classes = useStyle();
  const [data, setData] = useState({
    currentFile: undefined,
    previewImage: undefined,
    progress: 0,
    message: "",
    isError: false,
    imageInfos: [],
  });

  useEffect(() => {
    console.log(data.currentFile);
  }, [data]);

  const selectFile = (event) => {
    setData((prevState) => ({
      ...prevState,
      currentFile: event.target.files[0],
      previewImage: URL.createObjectURL(event.target.files[0]),
      progress: 0,
      message: "",
    }));
  };

  const upload = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;

    setData((prevState) => ({
      ...prevState,
      progress: 0,
    }));

    const formData = new FormData();
    formData.append("file", data.currentFile);
    formData.append("upload_preset", "instagram-post");
    formData.append("cloud_name", "jfotest");

    console.log(title, body);
    axios
      .post("	https://api.cloudinary.com/v1_1/jfotest/image/upload", formData)
      .then((data) => {
        setData((prevState) => ({
          ...prevState,
          currentFile: data.data.url,
        }));
        console.log(data.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Grid container justifyContent="center" alignItems="center" direction="column">
      <Box component="form" className={classes.form} onSubmit={upload}>
        <Typography variant="h2" className={classes.title}>
          Create post
        </Typography>
        <MyTextField
          id="title"
          name="title"
          fullWidth={true}
          label="Title"
          variant="outlined"
          margin="dense"
          size="medium"
          InputProps={{
            className: classes.input,
          }}
        />
        <MyTextField
          id="body"
          name="body"
          fullWidth={true}
          label="Post"
          variant="outlined"
          margin="dense"
          size="medium"
          multiline
          rows={5}
          InputProps={{
            className: classes.input,
          }}
        />

        <label htmlFor="upload-photo">
          <input
            style={{ display: "none" }}
            id="upload-photo"
            name="upload-photo"
            type="file"
            onChange={selectFile}
          />
          <Button
            className={classes.button}
            color="primary"
            size="small"
            component="span"
            aria-label="add"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Choose image
          </Button>
        </label>
        <Button
          className={classes.button}
          color="secondary"
          variant="contained"
          size="small"
          type="submit"
          startIcon={<SaveIcon />}
          disabled={!data.currentFile}
        >
          Upload
        </Button>
      </Box>

      {data.currentFile && (
        <div style={{ width: "50%" }}>
          <Box className="my20" display="flex" alignItems="center">
            <Box flexGrow={1}>
              <BorderLinearProgress variant="determinate" value={data.progress} />
            </Box>
            <Box minWidth={25}>
              <Typography variant="body2" color="textSecondary">{`${data.progress}%`}</Typography>
            </Box>
          </Box>
        </div>
      )}

      {data.previewImage && (
        <div>
          <img className="preview my20" src={data.previewImage} alt="" />
        </div>
      )}
      <div className="file-name">{data.currentFile ? data.currentFile.name : null}</div>

      {data.message && (
        <Typography variant="subtitle2" className={`upload-message ${data.isError ? "error" : ""}`}>
          {data.message}
        </Typography>
      )}
    </Grid>
  );
};

export default CreatePost;

const MyTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#F1810E",
    },
    "& label": {
      color: "#F1810E",
      "@media (max-width:450px)": {
        fontSize: "0.8rem",
      },
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "red",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#F1810E",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#4B6EC5",
      },
    },
  },
})(TextField);

const useStyle = makeStyles((theme) => ({
  title: {
    "@media (max-width:450px)": {
      fontSize: "1.5rem",
    },
  },
  form: {
    color: "black",
    textAlign: "center",
  },
  input: {
    color: "black",
  },
  button: {
    marginTop: "1.5rem",
    marginRight: "1.5rem",
    borderColor: "#F1810E",
    fontSize: "1rem",
    "@media (max-width:450px)": {
      fontSize: "0.8rem",
    },
  },
}));

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    marginTop: 20,
    marginBottom: 20,
    height: 15,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: "#EEEEEE",
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);
