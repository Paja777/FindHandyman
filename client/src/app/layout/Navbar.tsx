import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Ribbon from "../components/Ribbon";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useLogout } from "../hooks/useLogout";
import hammerIcon from "../../assets/hammerIcon.svg";
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
import { fetchMyAdsAsync } from "../features/ads/adSlice";


const Navbar = () => {
  const { user } = useAppSelector((state) => state.ad);
  const { logout } = useLogout();
  const username = user ? user.username : "";
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(fetchMyAdsAsync());
  };

  return (
    <>
      <Stack direction="row" spacing={1} p={0} sx={stackStyle}>
        <Box sx={{ pl: 1 }}>
          <Link to={"/"} style={linkStyle}>
            <Typography variant="h3">FindHandyman</Typography>
            <img src={hammerIcon} alt="hammer-icon" style={{ width: "34px" }} />
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
          <IconButton
            onClick={handleClick}
            sx={{ color: "#FF0000", mt: 1 }}
          >
            <AccountCircleIcon sx={{ fontSize: "34px", mr: 1 }} />
            <Typography variant="h5">{username}</Typography>
          </IconButton>
          {user && (
            <Typography
              component={NavLink}
              to={"/register"}
              onClick={() => logout()}
              sx={{
                ...navStyles,
                marginTop: "3%",
              }}
            >
              {`Sign Out`}
            </Typography>
          )}
          {!user &&
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
