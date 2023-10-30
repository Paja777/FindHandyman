import { Box, IconButton, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Box sx={{ width: "20%", position: "absolute", top: "30%", left: "37%" }}>
      <Paper
        component="form"
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          width: "100%",
          height: "30px",
          mx: "auto",
          justifyContent:'right',
          pb: '2px'
        }}
      >
        <input
          type="text"
          
          placeholder="...Search"
          style={{
            paddingLeft:'30px',
            border: "none",
            outline: "none",
            marginLeft: "18%",
            marginTop: "-10%",
            marginBottom:'10%',
            fontSize:'16px',
            width: "160px",
          }}
        />
        <IconButton sx={{mb:'-4px'}}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default SearchBar;
