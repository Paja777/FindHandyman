import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
  { name: "Home", location: "/" },
  { name: "About", location: "about" },
  { name: "Contact", location: "contact" },
];
const stackStyle = {
  backgroundImage: 'url("https://i.pinimg.com/736x/f2/e9/b9/f2e9b991d62bf3ae442d43c52a734a06.jpg")',
  backgroundSize: "60vh", 
  backgroundRepeat: 'repeat-x',
  height: "6vh",
  justifyContent: "center",
  position: "sticky",
  top: 80,
  zIndex: "23",
};
const typographyStyle = {
  textDecoration: "none",
  px: "21px",
  my: "auto",
  fontSize: "22px",
  fontWeight: "bolder",
  color: "white",
  WebkitTextStroke: "0.5px red",
  "&:hover": {
    color: "red",
    backgroundColor: "white",
  },
  "&.active": {
    color: "red",
    backgroundColor: "white",
  },
};

const Ribbon = () => {
  return (
    <Stack
      direction="row"
      sx={stackStyle}
    >
      {midLinks.map((link) => (
        <Typography
          component={NavLink}
          to={link.location}
          key={link.location}
          sx={typographyStyle}
        >
          {link.name}
        </Typography>
      ))}
    </Stack>
  );
};

export default Ribbon;
