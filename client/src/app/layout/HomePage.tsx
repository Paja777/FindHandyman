import { Box, Typography } from "@mui/material";
import AdsList from "../components/AdsList";
import BigButton from "../components/BigButton";
import { useAppSelector } from "../store/configureStore";

import { useEffect, useState } from "react";
import DetailPage from "./DetailPage";
import ImageSlider from "../components/ImageSlider";
import SideBar from "../components/SideBar";

const HomePage = () => {
  const { displayedAds } = useAppSelector((state) => state.account);
  const { handymanAds, userAds } = useAppSelector((state) => state.ad);

  const [ads, setAds] = useState(userAds);
  useEffect(() => {
    if (displayedAds === "user") {
      setAds(userAds);
    } else {
      setAds(handymanAds);
    }
  }, [displayedAds, handymanAds, userAds]);

  return (
    <Box
      sx={{
        display: "grid",
        gridAutoColumns: "1fr",
        gap: 1,
      }}
    >
      <SideBar />
      <Box sx={{ gridRow: "1", gridColumn: "span 4", ml: 2 }}>
        <AdsList ads={ads} />
      </Box>
    </Box>
  );
};

export default HomePage;
