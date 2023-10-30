import { Card, CardMedia, CardContent, Typography, Button, CardActionArea, CardActions, Rating } from "@mui/material"
import { UserModel } from "../models/UserModel";
import avatar from "../../assets/avatar.jpg";




interface Props{
    user: UserModel;
} 
const UserCard = ({user: {category, name, description, img}}: Props) => {
    console.log(name);
  return (
    <Card sx={{ width: 500, maxHeight: 450 , opacity: '1', mt: 0 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        sx={{ height: 280, width: 500, backgroundSize: 'contain', bgcolor: 'primary.light' }}
        image={img? img : avatar}
        alt={category}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {img? `${category} : ${name}` : `${name} is looking for help in category: ${category}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions   sx={{height:'5vh', justifyContent: 'space-between'}}>
    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Button size="small" color="primary" sx={{mr: '10%'}}>
      {'>>'} more
      </Button>
    </CardActions>
  </Card>

  )
}

export default UserCard;