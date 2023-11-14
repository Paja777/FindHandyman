import { LoadingButton } from "@mui/lab";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from '@mui/icons-material/Add';

interface Props {
  path: string;
  title: string;
}

const BigButton = ({ path, title }: Props) => {
  return (
    <Box
      component={Link}
      to={path}
      sx={{
        backgroundColor: "grey",
        color: "white",
        p: 2,
        px: 8,
        m: 1,
        mr: 0,
        ml: 0,
        maxWidth: "11vw",
        display: "flex",
        position: "relative",
        textDecoration: "none",
        borderRadius: "4px",
      }}
    >
      <Typography
        sx={{
          mx: "auto",
          my: "auto",
          fontSize: "13px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>

      <IconButton sx={{ posistion: "absolute", left: "20%", rigth: "5%", color:'white' }}>
        {title.includes('Create')? (<AddIcon />) : (<SearchIcon />)}
      </IconButton>
    </Box>
  );
};

export default BigButton;
