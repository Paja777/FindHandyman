import { Fragment } from "react";
import ReactDOM from "react-dom";
import { LoadingButton, Rating } from "@mui/lab";
import classes from "./Modal.module.css";
import { Stack } from "@mui/material";
import { useAppSelector } from "../store/configureStore";
import { toast } from "react-toastify";

const loadingButtonStyle = {
  mt: 1,
  mb: 2,
  ml: "15%",
  p: 3,
  width: "70%",
  bgcolor: "red",
  "&:hover": { bgcolor: "rgb(129, 212, 28)" },
};

type ModalProps = {
  onClose: () => void;
  value: number;
};
const Backdrop = ({ onClose }: ModalProps) => {
  return <div className={classes.backdrop} onClick={() => onClose()}></div>;
};

const ModalOverlay = ({ onClose, value }: ModalProps) => {
  const { errorText } = useAppSelector((state) => state.ad);

  const clickHandler = () => {
    onClose();
    if (errorText !== "") {
      toast.error(errorText);
    } else {
      toast.success("User rating successfully updated!");
      setTimeout(() => window.location.reload(), 2000);
    }
  };
  return (
    <Stack className={classes.modal}>
      <Rating
        name="half-rating"
        readOnly
        value={value}
        precision={0.5}
        sx={{ ml: "31%", mt: 3, mb: 3, fontSize: "34px" }}
      />
      <LoadingButton
        onClick={clickHandler}
        variant="contained"
        sx={loadingButtonStyle}
      >
        Confirm Rating
      </LoadingButton>
    </Stack>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ onClose, value }: ModalProps) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} value={value} />,
        portalElement!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={onClose} value={value} />,
        portalElement!
      )}
    </Fragment>
  );
};

export default Modal;
