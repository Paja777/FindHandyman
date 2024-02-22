import { Box } from "@mui/material";
import AdsList from "../components/AdsList";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { useEffect } from "react";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import { AdSelector, fetchAdsAsync } from "../features/roleHandyman/adSlice";

const HomePage = () => {

  const { productsLoaded } = useAppSelector((state) => state.ad);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchAdsAsync());
  }, [productsLoaded, dispatch]);

  const ads = useAppSelector(AdSelector.selectAll);
  console.log(ads);


  if (!productsLoaded) return <div>UNDEFINED</div>;
  
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
