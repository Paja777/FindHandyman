import { FieldValues, useForm } from "react-hook-form";
import { useAppSelector } from "../../store/configureStore";
import { FormHelperText } from "@mui/material";
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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { useRegister } from "../../hooks/useRegister";

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const { registration, isLoading, error } = useRegister();
  const [selectedValue, setSelectedValue] = useState(`handyman`);
  const {user} = useAppSelector(state => state.ad)

  const {
    register,
    unregister,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({
    mode: "all",
  });
  // conditionaly rendering category input field
  useEffect(() => {
    if (selectedValue === "handyman") {
      register("category", { required: "Category field is required" });
    } else {
      unregister("category");
    }
  }, [selectedValue, unregister, register]);
  // checking if user is register for relocation
  useEffect(() => {
    if (user) {
      navigate(from.pathname);
    }
  }, [user]);
  // submit function
  async function submitForm(data: FieldValues) {
    try {
      await registration({
        email: data.email,
        password: data.password,
        category: data.category || '',
        username: data.username,
        role: selectedValue,
      });
      // navigate("/");
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
            <br />
            <FormHelperText sx={{ color: "red", ml: -24, mt: 7 }}>
              {errors?.username?.message as string}
            </FormHelperText>
          </Stack>
          <Stack direction="row" sx={{ mt: 6 }}>
            <Typography variant="h6" color="grey" sx={{ mr: 7, mt: 1 }}>
              Email
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
                  message: "Password not strong enough",
                },
              })}
              helperText={errors?.password?.message as string}
            ></TextField>
          </Stack>
          <RadioGroup
            sx={{ mt: 6, mb: 2 }}
            value={selectedValue}
            {...register("role", { minLength: 4 })}
            onChange={(event: any) => setSelectedValue(event.target.value)}
          >
            <FormControlLabel
              value={`user`}
              control={<Radio />}
              label={`user`}
            />
            <FormControlLabel
              value={`handyman`}
              control={<Radio />}
              label={`handyman`}
            />
          </RadioGroup>
        </Stack>

        {selectedValue === "handyman" && (
          <TextField
            sx={{ mb: 3 }}
            label="category"
            error={!!errors.category}
            {...register("category", { minLength: 4 })}
          ></TextField>
        )}

        <Stack direction="row" sx={{ ml: 4 }}>
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
