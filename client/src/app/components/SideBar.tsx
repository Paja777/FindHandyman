import { Box, Typography } from "@mui/material";
import BigButton from "./BigButton";
import classes from "../features/ads/Ads.module.css";

const boxStyle = {
  gridRow: "1",
  gridColumn: "1",
  height: "20vh",
  mt: 1,
  width: "100%",
}

const SideBar = () => {
  // Collecting user data from local storage or empty obj if there is no user
  const user = JSON.parse(localStorage.getItem("user") ?? "{}");
  const { role = null, username = null } = user;
  // Creating path conditionaly for create ad page
  const pathRole = role ? (role === "handyman" ? "/createad" : "/createuserad") : "/register";
  // Creating message conditionaly 
  const welcomeMessage = role? (role === "handyman" ? `Handyman ${username}` : username) : '';
  return (
    <Box
      sx={boxStyle}
    >
      <h1 className={classes.ultra} style={{ fontSize: "42px", fontWeight: "lighter", color: "grey" }}>
        {`Welcome ${welcomeMessage}!`}{" "}
      </h1>
      <Typography variant="h6" color="text.secondary">
        Choose options:{" "}
      </Typography>
      <BigButton path={pathRole} title={"Create your ad "} />
      <BigButton path={"/"} title={"Search customer ads"} />
      <Typography variant="h6" color="text.secondary">
        Looking for handyman ads?{" "}
      </Typography>
      <BigButton path={"/"} title={"Search handyman ads"} />
    </Box>
  );
};

export default SideBar;
