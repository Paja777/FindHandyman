import { Box } from "@mui/material";
import AdsList from "../components/AdsList";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import { AdSelector, fetchAdsAsync } from "../features/ads/adSlice";
import LoadingComponent from "../components/LoadingComponent";
import { image1 } from "../lib/data";


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
        <Box sx={{ gridRow: "1", gridColumn: "span 5", ml: 0 }}>
          <SearchBar />
          {isLoading ? (
            <LoadingComponent />
          ) : (
            <AdsList ads={ads} />
          )}
        </Box>
        <Box sx={{ gridRow: "1", gridColumn: "span 1", mt: "10%" }}>
          <img src={image1} width="190px" height="700px" />
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
