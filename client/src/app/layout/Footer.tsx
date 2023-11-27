import { Box, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box
        sx={{
          height: "39vh",
          backgroundColor: "rgb(41, 41, 41)",
          pt: 2,
          mt:'5%'
        }}
      >
        <Stack>
          <Stack direction="row" sx={{ py: 3, pt:6 }}>
            <Typography
              variant="h4"
              color="white"
              sx={{ mr: 20, ml: 10, px: 2 }}
            >
              {`FindHandyman.com`}
            </Typography>{" "}
            <Typography color="white" sx={{ mr: 10, ml: 10, px: 2 }}>
            Check my github profile <br /> Paja777
              
            </Typography>{" "}
            <Typography color="white" sx={{ mr: 10, ml: 13, px: 2 }}>
            Contact me at LinkedIn <br /> Pavle Rvovic
            </Typography>
          </Stack>
          <Box
            sx={{
              backgroundColor: "white",
              height: "0.08vh",
              width: "80%",
              mx: "auto",
              mt: 4,
            }}
          ></Box>
          <Stack direction="row" sx={{ mx: "auto", mt: 2 }}>
            <Box sx={{mr:4,}} component={Link} to={'https://github.com/Paja777'}>
              <GitHubIcon sx={{fontSize: '40px', color: 'white'}}
              />
            </Box>
            <Box component={Link} to={`https://www.linkedin.com/in/paja-rvovic/`}>
              <LinkedInIcon sx={{fontSize: '40px', color: 'white'}}
              />
            </Box>
          </Stack>
        </Stack>
      </Box>
  )
}

export default Footer