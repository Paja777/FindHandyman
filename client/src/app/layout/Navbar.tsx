import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Ribbon from "../components/Ribbon";
import { useAppSelector } from "../store/configureStore";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useLogout } from "../hooks/useLogout";
import {
  rightLinks,
  navStyles,
  stackStyle,
  linkStyle,
  navLinkStyle1,
  navLinkStyle2,
  gitLink,
  lnLink,
} from "../lib/data";

const Navbar = () => {
  const { user } = useAppSelector((state) => state.ad);
  const { logout } = useLogout();

  return (
    <>
      <Stack direction="row" spacing={1} p={0} sx={stackStyle}>
        <Box sx={{ pl: 0 }}>
          <Link to={"/"} style={linkStyle}>
            <Typography variant="h3">FindHandyman</Typography>
          </Link>
        </Box>

        <Stack direction="row" sx={{ mr: 7 }}>
          <NavLink to={gitLink} style={navLinkStyle1}>
            <GitHubIcon sx={{ mt: 2, mr: 1, fontSize: "40px" }} />
            <Typography sx={{ textDecoration: "none", mt: 2.5 }} variant="h5">
              github Paja777
            </Typography>
          </NavLink>
          <NavLink to={lnLink} style={navLinkStyle2}>
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
          {user !== null && (
            <Typography
              component={NavLink}
              to={"/register"}
              onClick={() => logout()}
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
          {user === null &&
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
