import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { setDisplayedAds, setSearchTerm } from "../features/ads/adSlice";
import { toast } from "react-toastify";

const boxStyle = {
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
  borderRadius: "7px",
  "&:hover": {
    bgcolor: "rgb(171, 184, 204)",
    color: "rgb(76, 85, 99)",
  },
};

interface BigButtonProps {
  path: string;
  title: string;
}

const BigButton = ({ path, title }: BigButtonProps) => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.ad);
  const handleClick = () => {
    if (!user) {
      return toast.error("Unregistered user cannot create ad");
    }
    dispatch(setSearchTerm(""));
    if (title.includes("Search")) dispatch(setDisplayedAds("user"));
    if (title.includes("handyman") && title.includes("Search"))
      dispatch(setDisplayedAds("handyman"));
  };
  return (
    <Box component={Link} to={path} onClick={handleClick} sx={boxStyle}>
      <Typography
        data-testid="text"
        sx={{
          mx: "auto",
          my: "auto",
          fontSize: "13px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </Typography>
      <IconButton
        data-testid="icon"
        sx={{ posistion: "absolute", left: "20%", rigth: "5%", color: "white" }}
      >
        {title.includes("Create") ? <AddIcon /> : <SearchIcon />}
      </IconButton>
    </Box>
  );
};

export default BigButton;
export type { BigButtonProps };
