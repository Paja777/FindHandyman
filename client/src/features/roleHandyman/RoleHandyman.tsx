import { Box, Typography } from "@mui/material";
import HandymanList from "../../app/components/HandymanList";
import BigButton from "../../app/components/BigButton";
import CustomerList from "../../app/components/CustomerList";

const RoleHandyman = () => {

  return (
    <Box
      sx={{
        display: "grid",
        gridAutoColumns: "1fr",
        gap: 1,
      }}
    >
      <Box sx={{ gridRow: "1", gridColumn: "1", height: "20vh", mt:1 }}>
        <Typography variant='h3' color='black'>Welcome Handyman Marko! </Typography>
        <Typography variant="h6" color="text.secondary">Choose options: </Typography>
        <BigButton path={"/createadd"} title={"Create your ad "} />
        <BigButton path={"/createadd"} title={"Search customer ads"} />
        <BigButton path={"/createadd"} title={"Check calendar"} />
        <Typography variant="h6" color="text.secondary">Looking for handyman ads? </Typography>
        <BigButton path={"/createadd"} title={"Search handyman ads"} />
      </Box>
      <Box sx={{ gridRow: "1", gridColumn: "span 3", ml:2 }}>
    < HandymanList/>
      </Box>
    </Box>
  );
};

export default RoleHandyman;
