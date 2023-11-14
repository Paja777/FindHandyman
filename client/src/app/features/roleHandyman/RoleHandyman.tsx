import { Box, Typography } from "@mui/material";
import HandymanList from "../../components/HandymanList";
import BigButton from "../../components/BigButton";
import { useAppSelector } from "../../store/configureStore";
import classes from './RoleHandyman.module.css';

const RoleHandyman = () => {
 const {username} = useAppSelector(state => state.account);
 console.log(`Role handyman render`);
  return (
    <Box  
      sx={{
        display: "grid", 
        gridAutoColumns: "1fr",
        gap: 1,
      }}
    >
      <Box sx={{ gridRow: "1", gridColumn: "1", height: "20vh", mt:1 }}>
        <div className={classes.ultra} style={{fontSize: '36px', color: 'grey'}} >{`Welcome Handyman ${username}!`} </div>
        <Typography variant="h6" color="text.secondary">Choose options: </Typography>
        <BigButton path={"/createadd"} title={"Create your ad "} />
        <BigButton path={"/createadd"} title={"Search customer ads"} />
        <BigButton path={"/createadd"} title={"Check calendar"} />
        <Typography variant="h6" color="text.secondary">Looking for handyman ads? </Typography>
        <BigButton path={"/createadd"} title={"Search handyman ads"} />
      </Box>
      <Box sx={{ gridRow: "1", gridColumn: "span 4", ml:2 }}>
    < HandymanList/>
      </Box>
    </Box>
  );
};

export default RoleHandyman;
