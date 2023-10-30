import { Grid } from "@mui/material";
import { useState } from "react";
import { UserModel } from "../models/UserModel";
import UserCard from "./UserCard";

const list = [
  {
    id: Math.random(),
    name: "Marko",
    description: "Majssads dasdadsasd asda ad asdasdasd adsasd ",
    category: "painting",
    contact: "06522522",
    
  },
  {
    id: Math.random(),
    name: "Petar",
    description: "Majssads dasdadsas asda ad asdasdasd adsasd ",
    category: "electricity",
    contact: "065220300",
    
  },
  {
    id: Math.random(),
    name: "Pavle",
    description: "Majssads dasdadsasd asda ad asdasdasd adsasd ",
    category: "plumbing",
    contact: "065225488",
    
  },
];

const CustomerList = () => {
  const [users, setUsers] = useState<UserModel[]>(list);
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

export default CustomerList;
