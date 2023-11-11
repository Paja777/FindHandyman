import { Grid } from "@mui/material";
import { useAppSelector } from "../store/configureStore";
import UserCard from "./UserCard";


const HandymanList = () => {
  const {ads} = useAppSelector((state) => state.ad);
 console.log(ads)


  return (
    <Grid container spacing={2} sx={{ mt: 0.1 }}>
      {ads.map((ad) => (
        <Grid item key={ad.id}>
          <UserCard user={ad} key={ad.id} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HandymanList;
