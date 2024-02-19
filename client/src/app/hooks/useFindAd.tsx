import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import { dummyListHandyman as handymanAds, dummyListUser as userAds } from "../lib/data";

const useFindAd = () => {
  const { id } = useParams<{ id: string }>();
  const ads = [...handymanAds, ...userAds];
  const ad = ads.find((ad) => ad.id === id);
  return ad;
};

export default useFindAd;
