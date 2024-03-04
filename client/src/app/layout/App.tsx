import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Container } from "@mui/material";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    < >
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <Navbar data-testid="navbar"/>
      <Container  maxWidth='xl' sx={{backgroundColor: 'white'}}>
        <Outlet />
      </Container>
      <Footer data-testid="footer"/>
    </>
  );
}

export default App;
