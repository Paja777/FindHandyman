import { Card, CardMedia, CardContent, Typography, Button, CardActionArea, CardActions, Rating } from "@mui/material"
import { UserModel } from "../models/UserModel";
import avatar from "../../assets/avatar.jpg";
import { useAppSelector } from "../store/configureStore";

interface Props{
    user: UserModel;
} 
const UserCard = ({user: {category, name, description, images}}: Props) => {
    const {displayedAds} = useAppSelector(state => state.account); 
  return (
    <Card sx={{ width: 460, maxHeight: 440 , height: 440, opacity: '1', mt: 0 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        sx={{ height: 280, maxHeight: 280, width: 500, backgroundSize: 'contain', bgcolor: 'primary.light' }}
        image={images? images[0] : avatar}
        alt={category}
      />
      <CardContent sx={{height: 53, maxHeight: 53}}>
        <Typography gutterBottom variant="h5" component="div">
          {displayedAds === 'handyman'? `${category} : ${name}` : `${name} is looking for help in category: ${category}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions   sx={{height:'7vh', justifyContent: 'space-between'}}>
    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Button size="small" color="primary" sx={{mr: '10%'}}>
      {'>>'} more
      </Button>
    </CardActions>
  </Card>

  )
}

export default UserCard;