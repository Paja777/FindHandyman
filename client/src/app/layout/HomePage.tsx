import { Box, Typography } from "@mui/material";
import AdsList from "../components/AdsList";
import BigButton from "../components/BigButton";
import { useAppSelector } from "../store/configureStore";
import classes from '../features/roleHandyman/RoleHandyman.module.css';
import { useEffect, useState } from "react";

const HomePage = () => {
 const {username, displayedAds} = useAppSelector(state => state.account);
 const {handymanAds, userAds} = useAppSelector(state => state.ad);

 const [ads, setAds] = useState(handymanAds);
 useEffect(() => {
  if (displayedAds === 'handyman') {
    setAds(userAds);
  } else {
    setAds(handymanAds);
  }
}, [displayedAds, handymanAds, userAds]);

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
        <BigButton path={"/createad"} title={"Create your ad "} />
        <BigButton path={"/"}  title={"Search customer ads"} />
        <BigButton path={"/createad"} title={"Check calendar"} />
        <Typography variant="h6" color="text.secondary">Looking for handyman ads? </Typography>
        <BigButton path={"/"} title={"Search handyman ads"} />
      </Box>
      <Box sx={{ gridRow: "1", gridColumn: "span 4", ml:2 }}>
    < AdsList ads={ads}/>
      </Box>
    </Box>
  );
};

export default HomePage;
