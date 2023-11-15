import { LoadingButton } from "@mui/lab";
import { Container, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import { createAd } from "./adSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ImageUploadButton from "../../components/ImageUploadButton";

const CreateAd = () => {
  const navigate = useNavigate();
  const [serviceInputCount, setServiceInputCount] = useState([1, 2, 3]);
  const { username } = useAppSelector((state) => state.account);
  const { images } = useAppSelector((state) => state.ad);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({ mode: "all" });

  const dispatch = useAppDispatch();

  async function submitForm(data: FieldValues) {
    try {
      console.log({ ...data, name: username });
      dispatch(createAd({ ...data, name: username, id: uuidv4()  }));
      navigate("/");
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
      <LoadingButton type="button" sx={{color: 'purple'}} onClick={clickHandler}>
        add service +
      </LoadingButton>

      <Stack direction="row">
        <ImageUploadButton />
        {images?.length !== 0 && (
          <Typography  sx={{mt:2, ml:'10%'}} variant="h4" fontWeight="bolder" color="green">
            {images?.length}
          </Typography>
        )}
      </Stack>

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
        sx={{ mt: 4, mb: 2, ml: 20, bgcolor: "red" }}
      >
        Create
      </LoadingButton>
    </form>
  );
};

export default CreateAd;
