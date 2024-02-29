import { useState } from "react";
import { Card, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { v4 as uuidv4 } from "uuid";

const sideButtonStyle = {
  width: "3vw",
  ml: -5.7,
  height: "60vh",
  opacity: 0.5,
  bgcolor: "grey",
  zIndex: 12,
  "&:hover": { bgcolor: "black" },
};
const mainCardStyle = {
  position: "relative",
  width: "40vw",
  maxWidth: "40vw",
  maxHeight: "60vh",
  height: "60vh",
  minHeight: "60vh",
};
const arowBackIconStyle = {
  position: "absolute",
  left: 0,
  top: "50%",
  transform: "translateY(-50%)",
  ml: 1,
  zIndex: 13,
  color: "white",
};
const arowForwardIconStyle = {
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 13,
  mr: 1,
  color: "white",
};
const smallCardStyle = {
  position: "relative",
  width: "7vw",
  maxWidth: "7vw",
  maxHeight: "10vh",
  height: "10vh",
  minHeight: "10vh",
  ml: 1,
};

export interface ImageSliderProps {
  images: any;
}

export const ImageSlider = ({ images }: ImageSliderProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  console.log(currentImage);

  const nextSlide = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const prevSlide = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };
  return (
    <Stack sx={{ ml: 10 }}>
      <Stack direction="row">
        <Card
          data-testid="sideButton"
          onClick={prevSlide}
          sx={sideButtonStyle}
        />
        <Card sx={mainCardStyle}>
          <ArrowBackIcon onClick={prevSlide} sx={arowBackIconStyle} />
          <img
            data-testid="current-image"
            src={images[currentImage]}
            alt={`Slide ${currentImage}`}
            style={{ width: "100%", height: "100%" }}
          />
          <ArrowForwardIcon onClick={nextSlide} sx={arowForwardIconStyle} />
        </Card>
        <Card
          data-testid="sideButton"
          onClick={nextSlide}
          sx={sideButtonStyle}
        />
      </Stack>
      <Stack direction="row" sx={{ mt: 1 }}>
        {images.map((image: any, index: number) => (
          <Card
            key={uuidv4()}
            sx={{
              ...smallCardStyle,
              border: `${currentImage === index ? "3px solid red" : ""}`,
            }}
          >
            <img
              src={image}
              alt={`Slide ${currentImage}`}
              style={{ width: "100%", height: "100%" }}
            />
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};

export default ImageSlider;
