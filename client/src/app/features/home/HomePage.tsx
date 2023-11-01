import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import RoleHandyman from "../roleHandyman/RoleHandyman";

const HomePage = () => {
  const [showRole1, setShowRole1] = useState(false);
  const clickHandler = () =>{
    setShowRole1(!showRole1);
  }
  return (
    <>
    {showRole1 && <RoleHandyman />}
    <LoadingButton
    size="large"
    onClick={clickHandler}
    >
      {showRole1? 'Back' : 'Show Role 1'}
    </LoadingButton>
    </>
  );
};

export default HomePage;
