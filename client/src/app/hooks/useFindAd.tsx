import React from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";

const useFindAd = () => {
  const { handymanAds, userAds } = useAppSelector((state) => state.ad);
  const { id } = useParams<{ id: string }>();
  const ads = [...handymanAds, ...userAds];
  const ad = ads.find((ad) => ad.id === id);
  return ad;
};

export default useFindAd;
