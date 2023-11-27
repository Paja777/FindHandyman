import { Box, IconButton, Paper, debounce } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { setSearchTerm } from "../features/roleHandyman/adSlice";

const SearchBar = () => {
  const { searchTerm } = useAppSelector((state) => state.ad);
  const [inputTerm, setInputTerm] = useState(searchTerm);
  console.log(searchTerm, inputTerm)
  const dispatch = useAppDispatch();

  useEffect(() => {
    setInputTerm(searchTerm || ''); // Reset inputTerm on searchTerm change
  }, [searchTerm]);

  const debouncedSearch = debounce((event: any) => {
    dispatch(setSearchTerm(event.target.value))
}, 1000)

  return (
    <Box
      sx={{
        height: "10vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        component="form"
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          width: "30%",
          height: "30px",
          mx: "auto",
          justifyContent: "right",
          pb: "2px",
          mt: 2,
        }}
      >
        <input
          onChange={(event: any) => {
            setInputTerm(event.target.value);
            debouncedSearch(event);
          }}
          type="text"
          value={inputTerm || ''}
          placeholder="...Search Category"
          style={{
            paddingLeft: "30px",
            border: "none",
            outline: "none",
            marginLeft: "13 %",
            marginTop: "-10%",
            marginBottom: "10%",
            fontSize: "16px",
            width: "210px",
          }}
        />
        <IconButton type="submit" sx={{ mb: "2px", ml: 0 }}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default SearchBar;
