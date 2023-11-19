import { Fragment } from "react";
import ReactDOM from "react-dom";
import { LoadingButton, Rating } from "@mui/lab";

import classes from "./Modal.module.css";
import { useNavigate } from "react-router";
import useFindAd from "../hooks/useFindAd";
import { Stack } from "@mui/material";

type ModalProps = {
  onClose: () => void;
  value: number;
};
const Backdrop = ({ onClose }: ModalProps) => {
  return <div className={classes.backdrop} onClick={() => onClose()}></div>;
};

const ModalOverlay = ({ onClose, value }: ModalProps) => {
 
  return (
    <Stack className={classes.modal}>
      <Rating
        name="half-rating"
        readOnly
        value={value}
        precision={0.5}
        sx={{ ml: "34%", mt: 3, mb: 3, fontSize: "34px" }}
      />
      <LoadingButton
        onClick={() => onClose()}
        variant="contained"
        sx={{
          mt: 1,
          mb: 2,
          ml: "29%",
          p: 3,
          width: "40%",
          bgcolor: "red",
          "&:hover": { bgcolor: "rgb(129, 212, 28)" },
        }}
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
