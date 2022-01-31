import * as React from "react";
import "./AddTask.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Container,
  FormControl,
  ListItemButton,
  MenuItem,
  TextField,
} from "@mui/material";
import  Navbar from "../NavBar/NavBar";
const currencies = [
  {
    value: "ENGLISH",
  },
  {
    value: "MATHS",
  },
  {
    value: "PHYSICS",
  },
  {
    value: "CHEMISTRY",
  },
  {
    value: "ZOOLOGY",
  },
  {
    value: "BOTANY",
  },
  {
    value: "MALAYALAM",
  },
  {
    value: "ARABIC",
  },
];
function AddTask() {
  const [currency, setCurrency] = React.useState("");
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div>
      <Container
        className="mainContainer"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
        }}
        maxWidth="md"
      >
        <main>
          <figure>
            <picture class="imagePic">
              <source
                media="(min-width: 768px)"
                srcset="https://image.freepik.com/free-vector/coloured-working-scene_1009-224.jpg"
                sizes="360px"
              />
              <source
                srcset="https://image.freepik.com/free-vector/coloured-working-scene_1009-224.jpg"
                sizes="(min-width: 320px) 290px,
                      (min-width: 480px) 435px
                      (min-width: 640px) 580px"
              />
              <img
                src="https://image.freepik.com/free-vector/coloured-working-scene_1009-224.jpg"
                alt="Citymap illustration"
              />
            </picture>
          </figure>
          <div class="headline">
            <h2 class="text-headline">Add Work</h2>
            <h3 class="text-subheadline">Add the works todo for tomorrow</h3>
          </div>
          <form>
            <TextField
              id="standard-basic"
              label="Title"
              variant="standard"
              size="small"
              color="primary"
              fullWidth
            />
            <TextField
              fullWidth
              size="small"
              id="standard-select-currency"
              variant="standard"
              select
              label="Subject"
              select
              value={currency}
              onChange={handleChange}
              sx={{ marginTop: "20px" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              multiline
              rows={4}
              label="Description"
              variant="standard"
              size="small"
              color="primary"
              fullWidth
            />
            <div className="buttonDiv">
              <input
                class="text-small-uppercase"
                id="submit"
                type="submit"
                value="Add now"
              />
            </div>
          </form>
        </main>

        <List
          dense
          sx={{
            width: "100%",
            maxWidth: 360,
            color: "secondary.contrastText",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        >
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
            sx={{
              bgcolor: "secondary.light",
              borderRadius: "10px",
              marginTop: "0px",
              height: "50px",
              boxShadow: 3,
            }}
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ color: "primary.contrastText" }}
                primary="Do maths home work"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Container>
      <Navbar/>
    </div>
  );
}

export default AddTask;
