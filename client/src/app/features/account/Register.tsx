import { FieldValues, Form, useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/configureStore";
import { registerUser } from "./accountSlice";
import { FormHelperText } from '@mui/material';
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";

export default function Register() {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState(`handyman`);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "all",
  });
  const dispatch = useAppDispatch();

  async function submitForm(data: FieldValues) {
    try {
      await dispatch(registerUser(data));
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container
      component={Paper}
      elevation={10}
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
        mt: 2,
        pb: 7,
      }}
    >
      <Box component="form" onSubmit={handleSubmit(submitForm)}>
        <Stack>
        <Typography variant="h3" sx={{ ml: "20%" }}>
            Register
          </Typography>
          <Stack direction="row" sx={{ mt: 6 }}>
            <Typography variant="h6" color="grey" sx={{ mr: 2, mt: 1 }}>
              Username
            </Typography>
            <TextField
              error={!!errors.username}
              {...register("username", { required: "Username is required" })}
              
            ></TextField>
            <br/>
            <FormHelperText sx={{color: 'red', ml: -24, mt:7}}>{errors?.username?.message as string}</FormHelperText>
          </Stack>
          <Stack direction="row" sx={{ mt: 6 }}>
            <Typography variant="h6" color="grey" sx={{ mr: 2, mt: 1 }}>
              Password
            </Typography>
            <TextField
              error={!!errors.email}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+[\w.-]*@\w+(-\w+)*(\.\w{2,3})+$/,
                  message: "Not a valid email address",
                },
              })}
              helperText={errors?.email?.message as string}
            ></TextField>
          </Stack>
          <Stack direction="row" sx={{ mt: 6 }}>
            <Typography variant="h6" color="grey" sx={{ mr: 2, mt: 1 }}>
              Password
            </Typography>
            <TextField
              error={!!errors.password}
              type="password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_+=<>?]).{8,}$/,
                  message: "Password does not meet complexity requirements",
                },
              })}
              helperText={errors?.password?.message as string}
            ></TextField>
          </Stack>
          <RadioGroup
            sx={{ mt: 6, mb: 4 }}
            value={selectedValue}
            {...register("role", { required: "Role is required" })}
            onChange={(event: any) => setSelectedValue(event.target.value)}
          >
            <FormControlLabel
              value={`handyman`}
              control={<Radio />}
              label={`handyman`}
            />
            <FormControlLabel
              value={`user`}
              control={<Radio />}
              label={`user`}
            />
          </RadioGroup>
        </Stack>

        <Stack direction="row">
          <LoadingButton
            loading={isSubmitting}
            disabled={!isValid}
            type="submit"
            variant="contained"
            sx={{
              mt: 1,
              mb: 2,
              ml: "-12%",
              width: "55%",
              height: "50px",
              bgcolor: "red",
              color: "white",
              "&:hover": { bgcolor: "rgb(129, 212, 28)" },
            }}
          >
            Submit
          </LoadingButton>
          <Typography
            component={Link}
            to={"/login"}
            variant="body1"
            color="blue"
            sx={{ ml: 2, mr: -2, mt: 2 }}
          >
            You have an account?
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}
