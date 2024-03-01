import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Container } from "@mui/material";
import Footer from "./Footer";


function App() {
  return (
    < >
      <Navbar data-testid="navbar"/>
      <Container   sx={{backgroundColor: 'white'}}>
        <Outlet />
      </Container>
      <Footer data-testid="footer"/>
    </>
  );
}

export default App;
