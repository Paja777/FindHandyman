import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Container } from "@mui/material";


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
