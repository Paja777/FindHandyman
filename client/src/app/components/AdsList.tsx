import { Grid } from "@mui/material";
import UserCard from "./UserCard";
import { Ad } from "../models/ad";


const AdsList = ({ ads }: { ads: Ad[] }) => {
//  console.log(ads);

  return (
    <Grid container spacing={2.5} sx={{ mt: 0.1, ml:0.5 }}>
      {ads.map((ad: any) => (
        <Grid item key={ad._id}>
          <UserCard user={ad} key={ad._id} /> 
        </Grid>
      ))}
    </Grid>
  );
};

export default AdsList;
