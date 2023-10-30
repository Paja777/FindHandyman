import { LoadingButton } from "@mui/lab";
import { Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useAppDispatch } from "../../app/store/configureStore";
import { createAd } from "./adSlice";

const CreateAd = () => {
  const [serviceInputCount, setServiceInputCount] = useState([1, 2, 3]);
  const [userInfo, setUserInfo] = useState({
    contact: "0656449929",
    category: "Painting",
    name: "Marko",
  });
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({ mode: "all" });

  const dispatch = useAppDispatch();

  async function submitForm(data: FieldValues) {
    try {
      console.log({ ...data, ...userInfo });
      dispatch(createAd({ ...data, ...userInfo }));
    } catch (error) {
      console.log(error);
    }
  }
  const clickHandler = () => {
    setServiceInputCount((prev) => [...prev, prev[prev.length - 1] + 1]);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} style={{ marginLeft: "30%" }}>
      <Typography variant="body1" color="secondary" sx={{ m: 2 }}>
        Services
      </Typography>
      <Stack direction="row">
        <TextField
          error={!!errors.seviceName}
          sx={{ mr: 1, mt: 1 }}
          placeholder="service name"
          {...register("serviceName", { required: "Field is required" })}
        ></TextField>
        <TextField
          sx={{ mt: 1 }}
          placeholder="service price"
          {...register("servicePrice", { required: "Field is required" })}
        ></TextField>
      </Stack>
      {serviceInputCount.map((num) => (
        <Stack direction="row" key={num}>
          <TextField
            sx={{ mr: 1, mt: 1 }}
            placeholder="service name"
            {...register(`serviceName${num}`)}
          ></TextField>
          <TextField
            sx={{ mt: 1 }}
            placeholder="service price"
            {...register(`servicePrice${num}`)}
          ></TextField>
        </Stack>
      ))}

      <LoadingButton type="button" onClick={clickHandler}>
        add service +
      </LoadingButton>
      <Typography variant="body1" color="secondary" sx={{ m: 2 }}>
        Description
      </Typography>
      <TextField
        multiline
        rows="5"
        style={{ marginRight: 1, marginTop: 1, width: 450 }}
        placeholder="Describe your services (maximum 300 caracters)"
        {...register("description", { minLength: 20, maxLength: 300 })}
      ></TextField>
      <Typography variant="body1" color="secondary" sx={{ m: 2 }}>
        Note
      </Typography>
      <TextField
        multiline
        rows="5"
        sx={{ mr: 1, mt: 1, width: 450 }}
        placeholder="If you have any notes, type it here (maximum 200 caracters)"
        {...register("alert", { maxLength: 200 })}
      ></TextField>
      <br />
      <LoadingButton
        loading={isSubmitting}
        disabled={!isValid}
        type="submit"
        variant="contained"
        sx={{ mt: 4, mb: 2, ml: 20 }}
      >
        Create
      </LoadingButton>
    </form>
  );
};

export default CreateAd;
