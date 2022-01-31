import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./NavBar.css";
import { Link } from "react-router-dom";
function NavBar() {
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mainNav MuiTypography-root">
      <BottomNavigation
        className="bottomNavigation"
        value={value}
        onChange={handleChange}
        sx={{
          bgcolor: "secondary.light",
          display: "flex",
          alignItems: "center",
          boxShadow: 3,
        }}
        maxWidth="sm"
      >
        <BottomNavigationAction
          label="Home"
          value="Home"
          component={Link}
          to={"/"}
          icon={<HomeIcon sx={{ boxShadow: 3, borderRadius: "70%" }} />}
        />
        <BottomNavigationAction
          label="Add"
          value="Add"
          component={Link}
          to={"/add"}
          sx={{ bg: "secondary.dark" }}
          icon={
            <AddCircleIcon
              fontSize="large"
              sx={{ color: "primary.light", boxShadow: 3, borderRadius: "70%" }}
            />
          }
        />
        <BottomNavigationAction
          label="Account"
          value="Account"
          component={Link}
          to={"/"}
          icon={
            <AccountCircleIcon sx={{ boxShadow: 3, borderRadius: "70%" }} />
          }
        />
      </BottomNavigation>
    </div>
  );
}

export default NavBar;
