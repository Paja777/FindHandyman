import { Stack, Typography } from "@mui/material"
import { NavLink } from "react-router-dom"

const midLinks = [
    { name: "Home", location: "/" },
    { name: "About", location: "about" },
    { name: "Contact", location: "contact" },
  ];

const Ribbon = () => {
  return (
    <Stack
        direction="row"
        sx={{ backgroundColor: "red", height: "6vh", justifyContent: "center", position:'sticky', top: 80, zIndex: '23' }}
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
              fontSize: "21px",
              fontWeight: "bolder",
              color: "white",
              "&:hover": {
                color: "red",
                backgroundColor: 'white'
              },
              "&.active": {
                color: "red",
                backgroundColor: 'white'
              },
            }}
          >
            {link.name}
          </Typography>
        ))}
      </Stack>
  )
}

export default Ribbon