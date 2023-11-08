import { FieldValues, Form, useForm } from "react-hook-form";
import { useAppDispatch } from "../../store/configureStore";
import { registerUser } from "./accountSlice";
import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
    <Container component={Paper} sx={{ padding: 4 }}>
      <Box component="form" onSubmit={handleSubmit(submitForm)}>
        <TextField
          error={!!errors.username}
          {...register("username", { required: "Username is required" })}
          helperText={errors?.username?.message as string}
        ></TextField>
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

        <RadioGroup
          value={selectedValue}
          {...register("role", { required: "Role is required" })}
          onChange={(event: any) => setSelectedValue(event.target.value)}
        >
          <FormControlLabel
            value={`handyman`}
            control={<Radio />}
            label={`handyman`}
          />
          <FormControlLabel value={`user`} control={<Radio />} label={`user`} />
        </RadioGroup>

        <button type="submit">Register</button>
      </Box>
    </Container>
  );
}
