import { Box, IconButton, Paper, debounce } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { setLoadingStatus, setSearchTerm } from "../features/ads/adSlice";

const boxStyle = {
  height: "10vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const paperStyle = {
  position: "relative",
  borderRadius: 20,
  border: "1px solid #e3e3e3",
  width: "30%",
  height: "30px",
  mx: "auto",
  justifyContent: "right",
  pb: "2px",
  mt: 2,
};
const inputStyle = {
  paddingLeft: "30px",
  border: "none",
  outline: "none",
  marginLeft: "8%",
  marginTop: 5,
  marginBottom: "10%",
  fontSize: "16px",
  width: "210px",
};


const SearchBar = () => {
  const { searchTerm } = useAppSelector((state) => state.ad);
  const [inputTerm, setInputTerm] = useState(searchTerm);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Reset inputTerm on searchTerm change
    setInputTerm(searchTerm || ''); 
  }, [searchTerm]);

  const debouncedSearch = debounce((event: any) => {
    console.log(event.target.value)
    dispatch(setSearchTerm(event.target.value || ''));
    
}, 1000)

  return (
    <Box
      sx={boxStyle}
    >
      <Paper
        component="form"
        sx={paperStyle}
      >
        <input
          onChange={(event: any) => {
            setInputTerm(event.target.value);
            debouncedSearch(event);
          }}
          type="text"
          value={inputTerm || ''}
          placeholder="...Search Category"
          style={inputStyle}
        />
        <IconButton type="submit" sx={{position: "absolute", right:0, top: 0.5 }}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default SearchBar;
