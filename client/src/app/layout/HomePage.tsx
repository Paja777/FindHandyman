import { Box } from "@mui/material";
import AdsList from "../components/AdsList";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import { dummyListHandyman, dummyListUser } from "../lib/data";
import { fetchProductsAsync } from "../features/roleHandyman/adSlice";


const HomePage = () => {
  const { displayedAds } = useAppSelector((state) => state.account);
  const { productsLoaded } = useAppSelector((state) => state.ad);
  const searchTerm = '' 
  const [ads, setAds] = useState(dummyListUser);
  const dispatch = useAppDispatch()

  // fetching products from db
  useEffect(() => {
    if(!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]); 
 

  // dummy products
  useEffect(() => {
    let filteredAds = [];
    if (searchTerm === "") {
      filteredAds = displayedAds === "user" ? dummyListUser : dummyListHandyman;
    } else {
      filteredAds =
        displayedAds === "handyman"
          ? dummyListHandyman.filter((ad) => ad.category.includes(searchTerm))
          : dummyListUser.filter((ad) => ad.category.includes(searchTerm));
    }
    setAds(filteredAds);
  }, [displayedAds, dummyListHandyman, dummyListUser, searchTerm]);

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


