import React, { useState } from "react";
import "./styles.css";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form = () => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };

  const clear = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Paper className="paper">
      <form
        autoComplete="off"
        noValidate
        className="root form"
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          style={{ margin: "8px" }}
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          style={{ margin: "8px" }}
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          style={{ margin: "8px" }}
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          style={{ margin: "8px" }}
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className="fileInput" style={{ margin: "8px" }}>
          <FileBase
            type="File"
            multiple={false}
            onDone={(base64) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          style={{ margin: "8px" }}
          className="buttonSubmit"
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          style={{ margin: "8px" }}
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
