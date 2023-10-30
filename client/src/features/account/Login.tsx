import { FieldValues, useForm } from "react-hook-form";
import { useAppDispatch } from "../../app/store/configureStore";
import { loginUser, registerUser } from "./accountSlice";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
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
      const storedUserData = JSON.parse(localStorage.getItem(`${data.username}`)!);
      console.log(storedUserData.password);
      if (storedUserData && storedUserData.password) {
        navigate("/");
        dispatch(loginUser(data));
      } else {
        navigate("/register");
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitForm)}>
        <TextField
          error={!!errors.username}
          {...register("username", { required: "Username is required" })}
          helperText={errors?.username?.message as string}
        ></TextField>
        <TextField
          error={!!errors.username}
          type="password"
          {...register("password", { required: "Password is required" })}
          helperText={errors?.password?.message as string}
        ></TextField>
        <button disabled={!isValid} type="submit">
          Log in
        </button>
      </form>
    </>
  );
}
