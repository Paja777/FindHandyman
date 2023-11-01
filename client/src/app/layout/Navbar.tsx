import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import { Link, NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../../../src/assets/Logo.png";
import Ribbon from "../components/Ribbon";
import SearchBar from "../components/SearchBar";
import { useAppDispatch, useAppSelector } from "../store/configureStore";

import { signOut } from "../features/account/accountSlice";

const rightLinks = [
  { name: "Login", location: "/login" },
  { name: "Register", location: "/register" },
];
const navStyles = {
  padding: "6px ",
  margin: "10px",
  marginTop: "0px",
  color: "red",
  textDecoration: "none",
  fontSize: "25px",
  marginRight: "10px",
  paddingTop: "10px",
  fontWeight: "bolder",
  "&:hover": {
    color: "rgb(169, 87, 250)",
  },
  "&.active": {
    color: "rgb(169, 87, 250)",
  },
};

const Navbar = () => {
  const { loggedIn } = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();

  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        p={1}
        sx={{
          position: "sticky",
          zIndex: 22,
          background: "white",
          top: "0",
          justifyContent: "space-between",
          marginRigth: "50px",
        }}
      >
        <Box sx={{ pl: 2 }}>
          <Typography
            component={Link}
            to={"/"}
            variant="h4"
            sx={{
              textDecoration: "none",
              fontWeight: "bolder",
              fontSize: "43px",
              color: "red",
              WebkitTextStroke: "1px black",
              p: 0,
              my: 0,
              ml: "3px",
            }}
          >
            <img src={Logo} alt="Logo" height="60" />
            Handy<span style={{ color: "red" }}>man</span>
            <BuildIcon sx={{ color: "red", ml: 2, mt: 1, fontSize: "40px" }} />
          </Typography>
        </Box>

        <SearchBar />
        <Stack direction="row">
          <IconButton component={Link} to={"/login"} size="large">
            <AccountCircleIcon />
          </IconButton>
          {loggedIn && (
            <Typography
              component={NavLink}
              to={'/register'}
              onClick={() => dispatch(signOut())}
              sx={{
                ...navStyles,
                "&.active": {
                  color: "red",
                },
              }}
            >
              {`Sign Out`}
            </Typography>
          )}
          {!loggedIn &&
            rightLinks.map((link) => (
              <Typography
                component={NavLink}
                to={link.location}
                key={link.location}
                sx={{
                  ...navStyles,
                  "&.active": {
                    color: "red",
                  },
                }}
              >
                {link.name}
              </Typography>
            ))}
        </Stack>
      </Stack>

      <Ribbon />
    </>
  );
};

export default Navbar;
