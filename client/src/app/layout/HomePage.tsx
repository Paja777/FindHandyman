
import RoleHandyman from "../features/roleHandyman/RoleHandyman";
import { useAppSelector } from "../store/configureStore";

const HomePage = () => {
  const {role} = useAppSelector(state => state.account);
  console.log(role)
  return (
    <>
    {role === `handyman` && <RoleHandyman />}
    
    </>
  );
};

export default HomePage;
