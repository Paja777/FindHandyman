import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Box, Container } from "@mui/material";
import Wall1 from '../src/assets/wall1.png';

function App() {
  return (
    < >
      <Navbar />
      <Container maxWidth="xl" sx={{backgroundColor: 'white', backgroundRepeat:'repeat-x'}}>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
