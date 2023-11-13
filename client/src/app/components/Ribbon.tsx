import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
  { name: "Home", location: "/" },
  { name: "About", location: "about" },
  { name: "Contact", location: "contact" },
];

const Ribbon = () => {
  return (
    <Stack
      direction="row"
      sx={{
        backgroundImage: 'url("https://i.pinimg.com/736x/f2/e9/b9/f2e9b991d62bf3ae442d43c52a734a06.jpg")',
        backgroundSize: "60vh", // You may adjust this based on your needs
        backgroundPosition: "center",
        height: "6vh",
        justifyContent: "center",
        position: "sticky",
        top: 80,
        zIndex: "23",
      }}
    >
      {midLinks.map((link) => (
        <Typography
          component={NavLink}
          to={link.location}
          key={link.location}
          sx={{
            textDecoration: "none",
            px: "21px",
            my: "auto",
            fontSize: "23px",
            fontWeight: "bolder",
            color: "white",
            WebkitTextStroke: "1px red",
            "&:hover": {
              color: "red",
              backgroundColor: "white",
            },
            "&.active": {
              color: "red",
              backgroundColor: "white",
            },
          }}
        >
          {link.name}
        </Typography>
      ))}
    </Stack>
  );
};

export default Ribbon;
