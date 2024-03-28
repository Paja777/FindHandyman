import { Box, Rating, Stack, Typography } from "@mui/material";
import { ImageSlider } from "../components/ImageSlider";
import SideBar from "../components/SideBar";
import { useAppDispatch, useAppSelector } from "../store/configureStore";
import {
  AdSelector,
  changeRating,
  fetchAdAsync,
  updateAdAsync,
} from "../features/ads/adSlice";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const boxStyle = {
  display: "grid",
  gridAutoColumns: "1fr",
  gap: 1,
  mt: 2,
  pb: "6%",
};

const DetailPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [ratingValue, setRatingValue] = useState(4);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // Collecting user data from local storage or empty obj if there is no user
  const user = JSON.parse(localStorage.getItem("user") ?? "{}");
  const { role = null } = user;
  const { id } = useParams<{ id: any }>();
  const ad = useAppSelector((state) => AdSelector.selectById(state, id!));
  const { errorText } = useAppSelector((state) => state.ad);

  useEffect(() => {
    if (!ad && id) dispatch(fetchAdAsync(id));
  }, [id, dispatch, ad]);

  const handleCHangeRating = (e: any, newValue: any) => {
    if (!role) {
      navigate("/register");
      toast.error("Unregistered user cannot rate");
    } else {
      dispatch(updateAdAsync({ creatorId: ad?.user_id, payload: newValue }));
      setRatingValue(newValue);
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} value={ratingValue} />
      )}
      <Box sx={boxStyle}>
        <SideBar />
        <Box sx={{ gridRow: "1", gridColumn: "span 3", ml: -2, mt: "1.5%" }}>
          <Stack direction="row" sx={{ mt: 2 }}>
            <ImageSlider images={ad?.images || []} />
            <Stack sx={{ width: "30vw", ml: 3 }}>
              <Typography variant="h3" color="green" sx={{ ml: 4 }}>
                {ad?.category}
              </Typography>
              <Rating
                name="half-rating"
                onChange={handleCHangeRating}
                value={ad?.rating || 0}
                precision={0.5}
                sx={{ ml: 4, mt: 3, mb: -3 }}
              />
              <Typography variant="h5" color="grey" sx={{ ml: 4, mt: 6 }}>
                name:
                <span style={{ marginLeft: "12%", color: "green" }}>
                  {" "}
                  {ad?.name}
                </span>
              </Typography>
              <Typography variant="h5" color="grey" sx={{ ml: 4, mt: 2 }}>
                contact:{" "}
                <span style={{ color: "green", marginLeft: "7%" }}>
                  063434343
                </span>
              </Typography>
              <Typography
                variant="h5"
                color="grey"
                sx={{ ml: 4, mt: 2, mb: 4 }}
              >
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

              {ad?.adRole === "handyman" && (
                <Typography
                  variant="h5"
                  color="grey"
                  sx={{ ml: 4, mt: 2, mb: 4 }}
                >
                  Services: <br />
                  {ad?.services.map((service: any, index) => (
                    <span
                      key={index}
                      style={{
                        color: "green",
                        marginLeft: "7%",
                        fontSize: "18px",
                        textAlign: "justify",
                        marginTop: 4,
                      }}
                    >
                      {service}
                      <br />
                    </span>
                  ))}
                </Typography>
              )}
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default DetailPage;
