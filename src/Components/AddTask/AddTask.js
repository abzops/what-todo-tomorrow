import React from "react";
import "./AddTask.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { Container, TextField } from "@mui/material";
import Navbar from "../NavBar/NavBar";
import { useState } from "react";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
function AddTask() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleImageChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).forEach(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };
  const [showImage, setShowImage] = useState(true);
  const [newData, setNewData] = useState();
  const deletePic = (key) => {
    setNewData(selectedFiles.splice(key, 1));
  };
  return (
    <div>
      {showImage ? (
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
                    <AddAPhotoIcon fontSize="medium" sx={{ color: "#666" }} onClick={()=>{setShowImage(false)}} />
                    <span className="selected">{selectedFiles.length}</span>
                  </div>
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
      ) : (
        <div className="imageDiv">
          <div className="imageDivChild">
            <ArrowBackIcon fontSize="large" sx={{ color: "#666" }} onClick={()=>{setShowImage(true)}} />
            <div className="head">
              <h1>Add Photos</h1>
            </div>
            <div className="icon">
              <label htmlFor="add">
                <AddAPhotoIcon fontSize="large" sx={{ color: "#666" }} />
              </label>
              <input
                type="file"
                style={{ display: "none" }}
                id="add"
                onChange={handleImageChange}
                multiple
              />
            </div>
            <hr />
            <div className="images">
              {selectedFiles.map((img, index) => {
                return (
                  <div className="imagesChild" key={index}>
                    <img src={img} />
                    <div className="deleteIcon">
                      <DeleteIcon
                        sx={{ color: "#666" }}
                        onClick={() => deletePic(index)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <button>Submit</button>
          </div>
        </div>
      )}

      <Navbar />
    </div>
  );
}

export default AddTask;
