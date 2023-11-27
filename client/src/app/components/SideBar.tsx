import { Box, Typography } from '@mui/material'
import BigButton from './BigButton'
import { useAppSelector } from '../store/configureStore';
import classes from '../features/roleHandyman/RoleHandyman.module.css';

const SideBar = () => {
  const { username, role} = useAppSelector(state => state.account);
  const pathRole = role === 'handyman'? "/createad" : "/createuserad";
  return (
    <Box sx={{ gridRow: "1", gridColumn: "1", height: "20vh", mt:1, width:'100%' }}>
    <div className={classes.ultra} style={{fontSize: '36px', color: 'grey'}} >{`Welcome Handyman ${username}!`} </div>
    <Typography variant="h6" color="text.secondary">Choose options: </Typography>
    <BigButton path={pathRole} title={"Create your ad "} />
    <BigButton path={"/"}  title={"Search customer ads"} />
    <Typography variant="h6" color="text.secondary">Looking for handyman ads? </Typography>
    <BigButton path={"/"} title={"Search handyman ads"} />
  </Box>
  )
}

export default SideBar;