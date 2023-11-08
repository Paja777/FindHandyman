import { Grid } from "@mui/material";
import { UserModel } from "../models/UserModel";
import { useEffect, useState } from "react";
import plumbing from "../../assets/plumbing.jpg";
import electricity from "../../assets/electricity.jpg";
import painting from "../../assets/painter.jpg";
import { useAppSelector } from "../store/configureStore";
import UserCard from "./UserCard";
import { v4 as uuidv4 } from 'uuid';



const list = [
  {
    id: uuidv4(),
    name: "Milos",
    description: "Majssads dasdadsasd asda ad asdasdasd adsasd ",
    category: "painting",
    contact: "065225252",
    img: painting,
  },
  {
    id: uuidv4(),
    name: "Dragan",
    description: "Majssads dasdadsas asda ad asdasdasd adsasd ",
    category: "electricity",
    contact: "06522000",
    img: electricity,
  },
  {
    id: uuidv4(),
    name: "Bora",
    description: "Majssads dasdadsasd asda ad asdasdasd adsasd ",
    category: "plumbing",
    contact: "065225588",
    img: plumbing,
  },
];

const HandymanList = () => {
  const ad = useAppSelector((state) => state.ad);

  const [users, setUsers] = useState<UserModel[]>(list);
  console.log(users);
 

  useEffect(() => {
    if (ad.servicePrice !== '') {
      const newAd = {
        id: uuidv4(),
        name: ad.name,
        description: ad.description,
        category: "painting",
        contact: ad.contact,
        img: "",
      };
      console.log(newAd);
      setUsers((prevUsers) => [...prevUsers, newAd]);
      
    }
  }, []);

  return (
    <Grid container spacing={2} sx={{ mt: 0.1 }}>
      {users.map((user) => (
        <Grid item key={user.id}>
          <UserCard user={user} key={user.id} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HandymanList;
