import { Box } from "@mui/material";
import AdsList from "../components/AdsList";
import { useAppSelector } from "../store/configureStore";
import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const { displayedAds } = useAppSelector((state) => state.account);
  const { handymanAds, userAds, searchTerm } = useAppSelector((state) => state.ad);

  const [ads, setAds] = useState(userAds);
  useEffect(() => {
    let filteredAds = [];
    if (searchTerm === '') {
      filteredAds = (displayedAds === "user") ? userAds : handymanAds;
    } else {
      filteredAds = (displayedAds === 'handyman')
        ? handymanAds.filter(ad => ad.category.includes(searchTerm))
        : userAds.filter(ad => ad.category.includes(searchTerm));
    }
    setAds(filteredAds);
  }, [displayedAds, handymanAds, userAds, searchTerm]);

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridAutoColumns: "1fr",
          gap: 0.7,
        }}
      >
        <SideBar />
        <Box sx={{ gridRow: "1", gridColumn: "span 5", ml: 2 }}>
          <SearchBar />
          <AdsList ads={ads} />
        </Box>
        <Box sx={{ gridRow: "1", gridColumn: "span 1", mt: "10%" }}>
          <img
            src={`https://marketplace.canva.com/EADapBco-Fc/1/0/427w/canva-colorful-black-friday-discount-wide-skyscraper-ad-_AIWdH-_7Kk.jpg`}
            width="200px"
            height="700px"
          />
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
