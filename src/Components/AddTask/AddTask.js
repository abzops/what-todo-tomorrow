import React from "react";
import "./AddTask.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Container, TextField } from "@mui/material";
import Navbar from "../NavBar/NavBar";
import { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CancelIcon from "@mui/icons-material/Cancel";
function AddTask() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [dlt, setDlt] = useState();
  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
      setShow(true);
    }
  };

  var x = selectedFiles.length;
  var y = x - 1;
  const [i, setI] = useState(0);

  if (i <  0) {
    setI(0);
  }
  
  if (i) {
    if (i > y) {
      setI(y);
    }
  }
  const remove = () => {
    
    const all = selectedFiles;
    all.splice(i, 1);
    setSelectedFiles(all)
  };
  console.log(i);
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="pMain">
        <Container
          className="mainContainer "
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
          }}
          maxWidth="xs"
        >
          <div className="addTask">
            <div className="heading">
              <span>Add Task</span>
              <div className="line"></div>
            </div>
            <div className="title">
              <div className="input">
                <TextField
                  id="standard-basic"
                  label="Title"
                  variant="standard"
                  size="small"
                  color="primary"
                  fullWidth
                />
              </div>
            </div>
            <div className="subject">
              <div className="input">
                <TextField
                  id="standard-basic"
                  label="subject"
                  variant="standard"
                  size="small"
                  color="primary"
                  fullWidth
                />
              </div>
            </div>
            <div className="description">
              <div className="input">
                <TextField
                  multiline
                  rows={4}
                  label="Description"
                  variant="standard"
                  size="small"
                  color="primary"
                  fullWidth
                />
              </div>
            </div>
            <div className="addPic">
              <div className="input">
                <div className="ph">
                  <span>Add Photo</span>
                  <label htmlFor="add">
                    <AddAPhotoIcon fontSize="medium" sx={{ color: "#666" }} />
                  </label>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    id="add"
                    onChange={handleImageChange}
                    multiple
                  />
                </div>
                {show ? (
                  <>
                    <div
                      className="image"
                      style={{ backgroundImage: `url(${selectedFiles[i]})` }}
                    >
                      <ArrowCircleLeftIcon
                        fontSize="medium"
                        sx={{
                          color: "#ef4b4c",
                          backgroundColor: "#fff",
                          borderRadius: "50%",
                        }}
                        onClick={() => {
                          setI(i - 1);
                        }}
                      />

                      <CancelIcon
                        fontSize="3rem"
                        style={{
                          color: "#ef4b4c",
                          margin: "0",
                          marginBottom: "82px",
                          marginLeft: "171px",
                          backgroundColor: "#fff",
                          borderRadius: "50%",
                        }}
                        onClick={remove}
                      />
                      <ArrowCircleRightIcon
                        fontSize="medium"
                        sx={{
                          color: "#ef4b4c",
                          backgroundColor: "#fff",
                          borderRadius: "50%",
                        }}
                        onClick={() => {
                          setI(i + 1);
                        }}
                      />
                    </div>
                  </>
                ) : null}
              </div>
            </div>
            <div className="submit">
              <div className="buttonDiv">
                <input
                  class="text-small-uppercase"
                  id="submit"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Navbar />
    </div>
  );
}

export default AddTask;
