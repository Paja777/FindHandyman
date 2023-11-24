import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import { Link, NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../../../src/assets/Logo.png";
import Ribbon from "../components/Ribbon";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import classes from "../features/roleHandyman/RoleHandyman.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { signOut } from "../features/account/accountSlice";

const rightLinks = [
  { name: "Login", location: "/login" },
  { name: "Register", location: "/register" },
];
const navStyles = {
  padding: "6px ",
  margin: "10px",
  marginTop: "0px",
  color: "green",
  textDecoration: "none",
  fontSize: "25px",
  marginRight: "10px",
  paddingTop: "7%",
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
          marginRigth: "30px",
        }}
      >
        <Box sx={{ pl: 2 }}>
          <Link
            to={"/"}
            className={classes.ultra}
            style={{
              textDecoration: "none",
              fontWeight: "bolder",
              fontSize: "38px",
              color: "red",
              WebkitTextStroke: "1px black",
              padding: 0,
              marginLeft: "3px",
            }}
          >
            <img src={Logo} alt="Logo" height="60" />
            Handy
            <span style={{ color: "black", WebkitTextStroke: "0.3px red" }}>
              man
            </span>
            <BuildIcon
              sx={{ color: "black", ml: 0, mt: 1, fontSize: "40px" }}
            />
          </Link>
        </Box>

        <Stack direction="row" sx={{mr:7}}>
          <NavLink
            to={`https://github.com/Paja777`}
            style={{
              backgroundColor: "rgb(25, 25, 26)",
              color: "white",
              textDecoration: "none",
              display: "flex",
              paddingLeft:'9px',
              paddingRight:'9px',
              borderRadius: '5px',
              marginRight: 7,
              height:'10vh'
            }}
          >
            <GitHubIcon sx={{mt:2, mr:1, fontSize: '40px'}}/>
            <Typography sx={{ textDecoration: "none", mt:2.5}} variant="h5">
              github Paja777
            </Typography>
          </NavLink>
          <NavLink
            to={`https://www.linkedin.com/in/paja-rvovic/`}
            style={{
              backgroundColor: "rgb(66, 135, 245)",
              color: "white",
              textDecoration: "none",
              display: "flex",
              paddingLeft:'8px',
              paddingRight:'8px',
              borderRadius: '5px',
              marginRight: 7,
              height:'10vh'
            }}
          >
            <LinkedInIcon sx={{mt:2, mr:1, fontSize: '40px'}}/>
            <Typography sx={{ textDecoration: "none", mt:2.5}} variant="h5">
              Pavle Rvovic
            </Typography>
          </NavLink>
        </Stack>

        <Stack direction="row">
          <IconButton component={Link} to={"/login"} sx={{ color: "green" }}>
            <AccountCircleIcon sx={{ mt: 1, fontSize: "34px" }} />
          </IconButton>
          {loggedIn && (
            <Typography
              component={NavLink}
              to={"/register"}
              onClick={() => dispatch(signOut())}
              sx={{
                ...navStyles,
                marginTop: '3%',
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
