import Grid from "@mui/material/Grid2";
import video1 from "../../assets/Malinowskiego_Hero_1-1.mp4";
import video2 from "../../assets/Malinowskiego_Hero_1-2.mp4";
import video3 from "../../assets/Malinowskiego_Hero_2-1.mp4";
import { useState } from "react";

const Main = () => {
  const [video, setVideo] = useState(video1);

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop < 300 && video === video2) {
      setVideo(video3);
    }

    if (scrollTop >= 300) {
      setVideo(video2);
    }
  });

  const handleVideoEnd = () => {
    if (video === video3) {
      setVideo(video1);
    }
  };
  return (
    <>
      <Grid>
        <Grid
          sx={{
            position: "fixed",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: "-1",
            "&::after": {
              zIndex: "1",
              content: '""',
              opacity: "0.6",
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(269.91deg, rgba(0, 0, 0, 0) 11.86%, rgba(0, 0, 0, 0.93) 110.84%)",
            },
          }}
        >
          <video
            style={{
              position: "absolute",
              top: "50%",
              transform: "translate(0, -50%)",
              width: "100%",
              transition: "125ms ease-in",
              objectFit: "cover",
            }}
            autoPlay
            muted
            loop={video === video1}
            onEnded={handleVideoEnd}
            preload={"auto"}
            src={video}
            controlsList="nodownload nofullscreen"
            disablePictureInPicture={true}
            playsInline={true}
          />
        </Grid>
        <Grid
          sx={{
            position: "fixed",
            color: "#fff",
          }}
        >
          {video}
        </Grid>
        <Grid
          sx={{
            width: "100px",
            height: "1000px",
          }}
        ></Grid>
      </Grid>
    </>
  );
};

export default Main;
