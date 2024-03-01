import { Container, Paper, Stack, TextField, Typography } from "@mui/material";
import { useForm, FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/configureStore";
import { createAd } from "./adSlice";
import ImageUploadButton from "../../components/ImageUploadButton";
import { LoadingButton } from "@mui/lab";

const CreateUserAd = () => {
  const navigate = useNavigate();
  const { username } = JSON.parse(localStorage.getItem("user")!);
  const { images } = useAppSelector((state) => state.ad);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({ mode: "all" });

  // onSubmit sending data to redux storage and navigate to homepage
  async function submitForm({note, description, category}: FieldValues) {
    const adRole = JSON.parse(localStorage.getItem("user")!).role;
    try {
      dispatch(createAd({ note, description, category, name: username, adRole}));
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
      <form onSubmit={handleSubmit(submitForm)} style={{ marginLeft: "10%" }}>
        <Typography variant="h3" color="green" sx={{ ml: "12%", mb: 4 }}>
          Create Your Ad
        </Typography>
        <Typography variant="body1" color="rgb(181, 58, 27)" sx={{ m: 2 }}>
          Category that you looking for
        </Typography>
        <TextField
          sx={{
            mb: 3,
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "green",
              },
            },
          }}
          placeholder="Painting?"
          error={!!errors.category}
          {...register("category", {
            required: "This field is required",
            minLength: 4,
          })}
        ></TextField>
        <Typography variant="body1" color="rgb(181, 58, 27)" sx={{ m: 2 }}>
          Description
        </Typography>
        <TextField
          multiline
          rows="5"
          sx={{
            marginRight: 1,
            marginTop: 1,
            width: 450,
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "green",
              },
            },
          }}
          placeholder="Describe what you looking for (maximum 300 caracters)"
          {...register("description", {
            required: "This field is required",
            minLength: 20,
            maxLength: 300,
          })}
        ></TextField>

        <Stack direction="row" sx={{ mt: 4 }}>
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
          Note
        </Typography>
        <TextField
          multiline
          rows="5"
          sx={{
            mr: 1,
            mt: 1,
            width: 450,
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "green",
              },
            },
          }}
          placeholder="If you have any notes, type it here (maximum 200 caracters)"
          {...register("note", { maxLength: 200 })}
        ></TextField>

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

export default CreateUserAd;
