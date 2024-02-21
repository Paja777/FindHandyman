import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Rating,
} from "@mui/material";
import avatar from "../../assets/avatar.jpg";
import { useAppSelector } from "../store/configureStore";
import { useNavigate } from "react-router-dom";
import { Ad } from "../models/ad";

type UserCardProps = {
  user: Ad; 
}
const UserCard = ({
  user: { category, name, images, _id, rating },
}: UserCardProps) => {
  const { displayedAds } = useAppSelector((state) => state.account);
  const navigate = useNavigate();
  console.log(images)
  
  return (
    <Card sx={{ width: 460, maxHeight: 440, height: 440, opacity: "1", mt: 0 }}>
      <CardActionArea onClick={() => navigate(`/${_id}`)}>
        <CardMedia
          component="img"
          sx={{
            height: 280,
            maxHeight: 280,
            width: 500,
            backgroundSize: "contain",
            bgcolor: "primary.light",
          }}
          image={images[0] ||  avatar}
          alt={category}
        />
        <CardContent sx={{ height: 53, maxHeight: 53, overflow: "hidden" }}>
          <Typography gutterBottom variant="h5" component="div">
            {displayedAds === "user"
              ? `${name} is looking for help in category: ${category}`
              : `${category} : ${name}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ height: "7vh", justifyContent: "space-between" }}>
        <Rating name="half-rating" defaultValue={rating} precision={0.5} readOnly/>
        <Button
          onClick={() => navigate(`/${_id}`)}
          size="small"
          color="primary"
          sx={{ mr: "10%" }}
        >
          {">>"} more
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
