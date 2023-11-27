import { Grid } from "@mui/material";
import UserCard from "./UserCard";
import { UserModel } from "../models/UserModel";


const AdsList = ({ ads }: { ads: UserModel[] }) => {


  return (
    <Grid container spacing={2.5} sx={{ mt: 0.1, ml:0.5 }}>
      {ads.map((ad: any) => (
        <Grid item key={ad.id}>
          <UserCard user={ad} key={ad.id} /> 
        </Grid>
      ))}
    </Grid>
  );
};

export default AdsList;
