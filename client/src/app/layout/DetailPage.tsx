import { Box, Card, IconButton, Stack, Typography } from "@mui/material";
import { ImageSlider } from "../components/ImageSlider";
import SideBar from "../components/SideBar";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";

const DetailPage = () => {
  const {handymanAds, userAds} = useAppSelector(state => state.ad)  
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const ads = [...handymanAds, ...userAds];
  console.log(ads);
  const ad = ads.find(ad => ad.id === id);
  console.log(ad);

  const lorelIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Nulla vehicula turpis nec ipsum varius viverra. Sed lobortis mi in odio 
  interdum, in consectetur dui vestibulum. Duis posuere, leo at efficitur 
  porttitor, elit eros vestibulum ex, a posuere purus orci vel libero.`;

  return (
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
                {lorelIpsum}
              </span>
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default DetailPage;
