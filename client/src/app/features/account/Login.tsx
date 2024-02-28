import { FieldValues, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import { loginUser, registerUser } from "./accountSlice";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {
  Box,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLogin } from "../../hooks/useLogin";
import { useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };
  const {user} = useAppSelector(state => state.ad)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "all",
  });
  const { login, error, isLoading } = useLogin();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user) {
      navigate(from.pathname);
    }
  },[user])

  async function submitForm(data: FieldValues) {
    login({ email: data.email, password: data.password });
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
      <form onSubmit={handleSubmit(submitForm)}>
        <Stack>
          <PersonOutlineIcon
            sx={{ ml: "23%", fontSize: "134px", color: "grey" }}
          />
          <Typography variant="h5" sx={{ ml: "20%" }}>
            Welcome back!
          </Typography>
          <Stack direction="row" sx={{ mt: 6 }}>
            <Typography variant="h6" color="grey" sx={{ mr: 2, mt: 1 }}>
              Email
            </Typography>
            <TextField
              error={!!errors.username}
              {...register("email", { required: "Email is required" })}
              helperText={errors?.username?.message as string}
            ></TextField>
          </Stack>
          <Stack direction="row" sx={{ mt: 6 }}>
            <Typography variant="h6" color="grey" sx={{ mr: 2, mt: 1 }}>
              Password
            </Typography>
            <TextField
              error={!!errors.username}
              type="password"
              {...register("password", { required: "Password is required" })}
              helperText={errors?.password?.message as string}
            ></TextField>
          </Stack>
        </Stack>
        <Stack direction="row">
          <LoadingButton
            loading={isSubmitting}
            disabled={!isValid}
            type="submit"
            variant="contained"
            sx={{
              mt: 6,
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
            to={"/register"}
            variant="body1"
            color="blue"
            sx={{ ml: 2, mr: -2, mt: 7.4 }}
          >
            You dont have an account?
          </Typography>
        </Stack>
      </form>
    </Container>
  );
}
