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
  const [serviceInputCount, setServiceInputCount] = useState([2, 3, 4]);
  const { username, category } = useAppSelector((state) => state.account);
  const { images } = useAppSelector((state) => state.ad);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({ mode: "all" });

  const dispatch = useAppDispatch();

  async function submitForm(data: FieldValues) {
    const formatedData = {
      description: data.description,
      note: data.alert,
      name: username,
      category: category,
      services: Array.from({ length: 10 }, (_, i) => data[`serviceName${i+1}`]),
      prices: Array.from({ length: 10 }, (_, i) => data[`servicePrice${i+1}`]),
    };
    try {
      dispatch(createAd(formatedData));
      console.log('after dispatch createAd function')
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  const clickHandler = () => {
    setServiceInputCount((prev) => {
      if (prev.length > 8) return prev;
      return [...prev, prev[prev.length - 1] + 1];
    });
  };

  return (
    <Container
      component={Paper}
      elevation={10}
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: " center",
        alignContent: "center",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
        mt: 2,
        pb: 7,
      }}
    >
      <form onSubmit={handleSubmit(submitForm)} style={{ marginLeft: "3%" }}>
        <Typography variant="h3" color="green" sx={{ ml: "12%", mb: 4 }}>
          Create Your Ad
        </Typography>
        <Typography variant="body1" color="rgb(181, 58, 27)" sx={{ m: 2 }}>
          Services
        </Typography>
        <Stack direction="row">
          <TextField
            error={!!errors.seviceName}
            sx={{
              mr: 1,
              mt: 1,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "green",
                },
              },
            }}
            placeholder="service name"
            {...register("serviceName1", { required: "Field is required" })}
          ></TextField>
          <TextField
            sx={{
              mt: 1,
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "green",
                },
              },
            }}
            placeholder="service price"
            {...register("servicePrice1", { required: "Field is required" })}
          ></TextField>
        </Stack>
        {serviceInputCount.map((num) => (
          <Stack direction="row" key={num}>
            <TextField
              sx={{
                mr: 1,
                mt: 1,
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "green",
                  },
                },
              }}
              placeholder="service name"
              {...register(`serviceName${num}`)}
            ></TextField>
            <TextField
              sx={{
                mt: 1,
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "green",
                  },
                },
              }}
              placeholder="service price"
              {...register(`servicePrice${num}`)}
            ></TextField>
          </Stack>
        ))}
        <LoadingButton
          type="button"
          sx={{ color: "rgb(181, 58, 27)" }}
          onClick={clickHandler}
        >
          add service +
        </LoadingButton>

        <Stack direction="row">
          <ImageUploadButton />
          {images?.length !== 0 && (
            <Typography
              sx={{ mt: 2, ml: "10%" }}
              variant="h4"
              fontWeight="bolder"
              color="green"
            >
              {images?.length}
            </Typography>
          )}
        </Stack>

        <Typography variant="body1" color="rgb(181, 58, 27)" sx={{ m: 2 }}>
          Description
        </Typography>
        <TextField
          multiline
          rows="5"
          style={{ marginRight: 1, marginTop: 1, width: 450 }}
          placeholder="Describe your services (maximum 300 caracters)"
          {...register("description", { minLength: 20, maxLength: 300 })}
        ></TextField>
        <Typography variant="body1" color="rgb(181, 58, 27)" sx={{ m: 2 }}>
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
          sx={{
            mt: 4,
            mb: 2,
            ml: 20,
            bgcolor: "red",
            "&:hover": { bgcolor: "rgb(129, 212, 28)" },
          }}
        >
          Create
        </LoadingButton>
      </form>
    </Container>
  );
};

export default CreateAd;
