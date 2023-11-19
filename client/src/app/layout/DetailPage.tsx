import { Box, Card, IconButton, Rating, Stack, Typography } from "@mui/material";
import { ImageSlider } from "../components/ImageSlider";
import SideBar from "../components/SideBar";
import { useAppDispatch } from "../store/configureStore";
import { changeRating } from "../features/roleHandyman/adSlice";
import useFindAd from "../hooks/useFindAd";
import { useState } from "react";
import Modal from "../components/Modal";

const DetailPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [ratingValue, setRatingValue] = useState(4);
  const dispatch = useAppDispatch();
  const ad = useFindAd();
  const handleCHangeRating = (e: any, newValue: any) => {
   setShowModal(true);
   setRatingValue(newValue);
   dispatch(changeRating(newValue));
  }
  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <>
    {showModal && (<Modal onClose={handleCloseModal} value={ratingValue}/>)}
    <Box
      sx={{
        display: "grid",
        gridAutoColumns: "1fr",
        gap: 1,
        mt: 2,
      }}
    >
      <SideBar />
      <Box sx={{ gridRow: "1", gridColumn: "span 3", ml: -2 }}>
        <Stack direction="row" sx={{ mt: 2 }}>
          <ImageSlider images={ad?.images || []}/>
          <Stack sx={{ width: "30vw", ml: 3 }}>
            <Typography variant="h3" color="green" sx={{ ml: 4 }}>
              {ad?.category}
            </Typography>
            <Rating name="half-rating" onChange={ handleCHangeRating} value={ad?.rating} precision={0.5} sx={{ ml: 4 , mt:3, mb:-3}}/>
            <Typography variant="h5" color="grey" sx={{ ml: 4, mt: 6 }}>
              name:
              <span style={{ marginLeft: "12%", color: "green" }}> {ad?.name}</span>
            </Typography>
            <Typography variant="h5" color="grey" sx={{ ml: 4, mt: 2 }}>
              contact:{" "}
              <span style={{ color: "green", marginLeft: "7%" }}>
                {ad?.contact}
              </span>
            </Typography>
            <Typography variant="h5" color="grey" sx={{ ml: 4, mt: 2, mb: 4 }}>
              description: <br />
              <span
                style={{
                  color: "green",
                  marginLeft: "7%",
                  fontSize: "18px",
                  textAlign: "justify",
                  marginTop: 4,
                }}
              >
                {ad?.description}
              </span>
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
    </>
  );
};

export default DetailPage;
