import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Ribbon from "../components/Ribbon";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
  marginRight: "17px",
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
        spacing={1}
        p={0}
        sx={{
          position: "sticky",
          zIndex: 22,
          background: "white",
          top: "0",
          justifyContent: "space-between",
          marginRigth: "30px",
        }}
      >
        <Box sx={{ pl: 0 }}>
          <Link
            to={"/"}
            style={{
              textDecoration: "none",
              fontSize: "43px",
              color: "red",
              padding: 0,
              marginLeft: "3px",
              marginBottom: "2%",
              marginTop: "5%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h3">FindHandyman</Typography>
          </Link>
        </Box>

        <Stack direction="row" sx={{ mr: 7 }}>
          <NavLink
            to={`https://github.com/Paja777`}
            style={{
              opacity: 0.7,
              backgroundColor: "rgb(41, 41, 41)",
              color: "white",
              textDecoration: "none",
              display: "flex",
              paddingLeft: "9px",
              paddingRight: "9px",
              borderRadius: "5px",
              marginRight: 7,
              height: "10vh",
            }}
          >
            <GitHubIcon sx={{ mt: 2, mr: 1, fontSize: "40px" }} />
            <Typography sx={{ textDecoration: "none", mt: 2.5 }} variant="h5">
              github Paja777
            </Typography>
          </NavLink>
          <NavLink
            to={`https://www.linkedin.com/in/paja-rvovic/`}
            style={{
              backgroundColor: "rgb(66, 135, 245)",
              color: "white",
              opacity: 0.7,
              textDecoration: "none",
              display: "flex",
              paddingLeft: "8px",
              paddingRight: "8px",
              borderRadius: "5px",
              marginRight: 7,
              height: "10vh",
            }}
          >
            <LinkedInIcon sx={{ mt: 2, mr: 1, fontSize: "40px" }} />
            <Typography sx={{ textDecoration: "none", mt: 2.5 }} variant="h5">
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
                marginTop: "3%",
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
