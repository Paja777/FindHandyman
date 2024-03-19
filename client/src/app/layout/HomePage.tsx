import { Box } from "@mui/material";
import AdsList from "../components/AdsList";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import { AdSelector, fetchAdsAsync } from "../features/ads/adSlice";
import LoadingComponent from "../components/LoadingComponent";

const image1 = `https://marketplace.canva.com/EADapBco-Fc/1/0/427w/canva-colorful-
black-friday-discount-wide-skyscraper-ad-_AIWdH-_7Kk.jpg`;

const HomePage = () => {
  const { productsLoaded, searchTerm, status, displayedAds } = useAppSelector((state) => state.ad);
  const dispatch = useAppDispatch();
  const isLoading = !productsLoaded || status === 'pendingFetchProducts' ? true : null;

  useEffect(() => {
    if (!productsLoaded || searchTerm || searchTerm==='') dispatch(fetchAdsAsync());
  }, [productsLoaded, dispatch, searchTerm, displayedAds]);

  const ads = useAppSelector(AdSelector.selectAll);

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridAutoColumns: "1fr",
          gap: 0.7,
        }}
      >
        <SideBar data-testid="sideBar" />
        <Box sx={{ gridRow: "1", gridColumn: "span 5", ml: 2 }}>
          <SearchBar />
          {isLoading ? (
            <LoadingComponent />
          ) : (
            <AdsList ads={ads} />
          )}
        </Box>
        <Box sx={{ gridRow: "1", gridColumn: "span 1", mt: "10%" }}>
          <img src={image1} width="200px" height="700px" />
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
