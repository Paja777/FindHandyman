import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import BuildIcon from "@mui/icons-material/Build";
import { Link, NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logo from "../../../src/assets/Logo.png";
import Ribbon from "../components/Ribbon";
import baner1 from '../../assets/ban1part2.jpg';
import baner2 from '../../assets/ban1part1.jpg';
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import classes from '../features/roleHandyman/RoleHandyman.module.css';

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
          marginRigth: "50px",
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
            Handy<span style={{ color: "black", WebkitTextStroke: '0.3px red' }}>man</span>
            <BuildIcon sx={{ color: "red", ml: 0, mt: 1, fontSize: "40px" }} />
          </Link>
        </Box>

        <Stack direction='row' component={Link} to={"https://www.corkco.ca/"}>
         <img src={baner1} alt='banner1' height='80' width='300' style={{marginRight: '11%'}}/>
         <img src={baner2} alt='banner2' height='80' width='230' />
        </Stack>
          
        
        <Stack direction="row">
          <IconButton component={Link} to={"/login"}  sx={{color: 'green', }}>
            <AccountCircleIcon sx={{mt:0, fontSize: '34px'}}/>
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
