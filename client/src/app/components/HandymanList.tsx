import { Grid } from "@mui/material";
import { UserModel } from "../models/UserModel";
import { useState } from "react";
import plumbing from "../../assets/plumbing.jpg";
import electricity from "../../assets/electricity.jpg";
import painting from "../../assets/painter.jpg";
import { useAppSelector } from "../store/configureStore";
import UserCard from "./UserCard";

const list = [
  {
    id: Math.random(),
    name: "Milos",
    description: "Majssads dasdadsasd asda ad asdasdasd adsasd ",
    category: "painting",
    contact: "065225252",
    img: painting,
  },
  {
    id: Math.random(),
    name: "Dragan",
    description: "Majssads dasdadsas asda ad asdasdasd adsasd ",
    category: "electricity",
    contact: "06522000",
    img: electricity,
  },
  {
    id: Math.random(),
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
  // finish logic for checking localStorage for contain(ad) and push to list

  ad &&
    localStorage.setItem(`ad1`,JSON.stringify(ad));
    
  return (
    <Grid container spacing={2} sx={{ mt: 0.1 }}>
      {users.map((user) => (
        <Grid item key={user.contact}>
          <UserCard user={user} key={user.contact} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HandymanList;
