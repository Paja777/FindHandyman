import { Grid } from "@mui/material";
import UserCard from "./UserCard";
import { Ad } from "../models/ad";


const AdsList = ({ ads }: { ads: Ad[] }) => {

  return (
    <Grid container spacing={1.5} sx={{ mt: 0.1, ml:0.5 }}>
      {ads.map((ad: any, index) => (
        <Grid item key={ad._id}>
          <UserCard ad={ad} key={ad._id} data-testid={`card-${index}`}/> 
        </Grid>
      ))}
    </Grid>
  );
};

export default AdsList;
