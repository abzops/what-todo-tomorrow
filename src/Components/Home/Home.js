import React from "react";
import "./home.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { Container, ListItemButton } from "@mui/material";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";
import Navbar from "../NavBar/NavBar";

function Home() {
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
        <Typography
          className="heading"
          variant="h4"
          component="h4"
          sx={{ color: "primary.contrastText" }}
        >
          What Todo For Tomorrow?
        </Typography>
        <List
          dense
          sx={{
            width: "100%",
            maxWidth: 360,
            color: "primary.contrastText",

            borderRadius: "10px",
            marginTop: "10px",
          }}
        >
          <ListItem
            secondaryAction={<Checkbox edge="end" />}
            disablePadding
            sx={{
              borderRadius: "10px",
              marginTop: "0px",
              height: "50px",
              boxShadow: 3,
              bgcolor: "secondary.light",
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <CreateRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Do maths home work" />
            </ListItemButton>
          </ListItem>
        </List>
        {/* <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Avatar with text and icon
          </Typography>
          <Demo>
            <List dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
              )}
            </List>
          </Demo>
        </Grid> */}
        <Navbar />
      </Container>
    </div>
  );
}

export default Home;
