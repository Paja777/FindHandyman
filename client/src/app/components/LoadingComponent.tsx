import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

interface LoadingComponentProps {
    message?: string;
}

export default function LoadingComponent({message = 'Loading...'}: LoadingComponentProps) {
    return (
        <Backdrop open={true} invisible={true}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
                <CircularProgress size={100} color="success"/>
                <Typography variant="h4" sx={{justifyContent: 'center', position: 'fixed', top: '60%'}}>{message}</Typography>
            </Box>
        </Backdrop>
    )
}