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
import { UserModel } from "../models/UserModel";
import avatar from "../../assets/avatar.jpg";
import { useAppSelector } from "../store/configureStore";
import { useNavigate } from "react-router-dom";

type UserCardProps = {
  user: UserModel;
}
const UserCard = ({
  user: { category, name, images, id, rating },
}: UserCardProps) => {
  const { displayedAds } = useAppSelector((state) => state.account);
  const navigate = useNavigate();
  console.log(category);
  return (
    <Card sx={{ width: 460, maxHeight: 440, height: 440, opacity: "1", mt: 0 }}>
      <CardActionArea onClick={() => navigate(`/${id}`)}>
        <CardMedia
          component="img"
          sx={{
            height: 280,
            maxHeight: 280,
            width: 500,
            backgroundSize: "contain",
            bgcolor: "primary.light",
          }}
          image={images ? images[0] : avatar}
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
          onClick={() => navigate(`/${id}`)}
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
