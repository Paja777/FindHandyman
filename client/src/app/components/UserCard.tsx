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
import { useNavigate } from "react-router-dom";
import { Ad } from "../models/ad";

const cardMediaStyle = {
  height: 280,
  maxHeight: 280,
  width: 500,
  backgroundSize: "contain",
  bgcolor: "primary.light",
};

type UserCardProps = {
  ad: Ad; 
}
const UserCard = ({
  ad: { category, name, images, _id, rating, adRole },
}: UserCardProps) => {
  const navigate = useNavigate();
  const adTitle = adRole === "user" ? `${name} is looking for help in category: ${category}` : `${category} : ${name}`;
  
  return (
    <Card sx={{ width: 460, maxHeight: 440, height: 440, opacity: "1", mt: 0 }}>
      <CardActionArea onClick={() => navigate(`/${_id}`)}>
        <CardMedia
          component="img"
          sx={cardMediaStyle}
          image={images[0] ||  avatar}
          alt={category}
        />
        <CardContent sx={{ height: 53, maxHeight: 53, overflow: "hidden" }}>
          <Typography gutterBottom variant="h5" component="div">
            {adTitle}
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
