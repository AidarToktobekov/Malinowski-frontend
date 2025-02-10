import Grid from "@mui/material/Grid2";
import HouseCard from "./HouseCard.tsx";
import { IHouseShowing } from "../../../types/malinowskiTypes.ts";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Link,
  styled,
  Typography,
} from "@mui/material";
import { WhiteButton } from "../../../ui/header/Header.tsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import houseA1 from "../../../assets/houseA-1.jpg";
import houseA2 from "../../../assets/houseA-2.jpg";
import houseA3 from "../../../assets/houseA-3.jpg";
import houseA4 from "../../../assets/houseA-4.jpg";
import houseA5 from "../../../assets/houseA-5.jpg";
import houseA6 from "../../../assets/houseA-6.jpg";
import ImageNotSupportedIcon from "@mui/icons-material/ImageNotSupported";
import { useEffect, useRef, useState } from "react";
import Close from "@mui/icons-material/Close";
export const Title = styled(Typography)({
  color: "#aeaeae",
  fontSize: "10px",
  fontFamily: "Poppins",
  textTransform: "uppercase",
});

export const Title2 = styled(Typography)({
  color: "#fff",
  fontSize: "14px",
  fontFamily: "Poppins",
  textTransform: "uppercase",
  fontWeight: "bold",
  paddingBottom: "8px",
  borderBottom: "1px solid #fff",
});

export const Info = styled(Typography)({
  color: "#ffffffde",
  fontSize: "16px",
  fontFamily: "Inter",
});

const HouseShowing: React.FC<IHouseShowing> = ({
  houseNumber,
  plot,
  house,
  price,
  sold,
  language,
  setShowHouse,
  video,
  nowVideo,
  setVideo,
  photo,
  date,
  kitchen,
  garage,
  livingRoom,
  bedroom1,
  bedroom2,
  wardrobe,
  cabinet,
}) => {
  window.scrollTo({
    top: 695,
  });

  const [focusAngle, setFocusAngle] = useState("ext1");
  const styleAngle = {
    width: "65px",
    height: "65px",
    borderWidth: "2px",
    borderStyle: "solid",
    cursor: "pointer",
    borderRadius: "6px",
    overflow: "hidden",
  };

  const buttonStyle = {
    minWidth: "34px",
    height: "34px",
    padding: "0px",
    borderRadius: "50%",
    border: "1px solid #888",
    background: "rgba(0,0,0, 0.3)",
    marginTop: "45px",
  };

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photo.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? photo.length - 1 : prevIndex - 1,
    );
  };

  const onClickLeft = () => {
    if (focusAngle === "ext1") {
      setFocusAngle("int2");
    } else if (focusAngle === "ext2") {
      setFocusAngle("ext1");
    } else if (focusAngle === "ext3") {
      setFocusAngle("ext2");
    } else if (focusAngle === "ext4") {
      setFocusAngle("ext3");
    } else if (focusAngle === "int1") {
      setFocusAngle("ext4");
    } else if (focusAngle === "int2") {
      setFocusAngle("int1");
    }
  };
  const onClickRight = () => {
    if (focusAngle === "ext1") {
      setFocusAngle("ext2");
    } else if (focusAngle === "ext2") {
      setFocusAngle("ext3");
    } else if (focusAngle === "ext3") {
      setFocusAngle("ext4");
    } else if (focusAngle === "ext4") {
      setFocusAngle("int1");
    } else if (focusAngle === "int1") {
      setFocusAngle("int2");
    } else if (focusAngle === "int2") {
      setFocusAngle("ext1");
    }
  };

  useEffect(() => {
    if (focusAngle === "ext2" && nowVideo === video.exterior1) {
      setVideo(video.exterior2_1);
    } else if (focusAngle === "ext3" && nowVideo === video.exterior2) {
      setVideo(video.exterior3_1);
    } else if (focusAngle === "ext4" && nowVideo === video.exterior3) {
      setVideo(video.exterior4_1);
    } else if (focusAngle === "ext4" && nowVideo === video.exterior1) {
      setVideo(video.exterior4_2);
    } else if (focusAngle === "ext3" && nowVideo === video.exterior4) {
      setVideo(video.exterior3_2);
    } else if (focusAngle === "ext2" && nowVideo === video.exterior3) {
      setVideo(video.exterior2_2);
    } else if (focusAngle === "ext1" && nowVideo === video.exterior2) {
      setVideo(video.exterior1_2);
    } else if (focusAngle === "ext1" && nowVideo === video.interior1) {
      setVideo(video.exterior1_3);
    } else if (focusAngle === "ext1" && nowVideo === video.interior2) {
      setVideo(video.exterior1_4);
    } else if (focusAngle === "ext1" && nowVideo === video.exterior4) {
      setVideo(video.exterior1_1);
    } else if (focusAngle === "int1" && nowVideo === video.exterior1) {
      setVideo(video.interior1_1);
    } else if (focusAngle === "int2" && nowVideo === video.exterior1) {
      setVideo(video.interior2_1);
    } else if (focusAngle === "int1" && nowVideo === video.interior2) {
      setVideo(video.interior1_2);
    } else if (focusAngle === "int2" && nowVideo === video.interior1) {
      setVideo(video.interior2_2);
    } else if (
      focusAngle === "ext1" &&
      nowVideo !== "/src/assets/Malinowskiego_HouseA_0-1.mp4" &&
      nowVideo !== "/src/assets/Malinowskiego_HouseB_0-1.mp4" &&
      nowVideo !== "/src/assets/Malinowskiego_HouseC_0-1.mp4" &&
      nowVideo !== "/src/assets/Malinowskiego_HouseD_0-1.mp4" &&
      nowVideo !== "/src/assets/Malinowskiego_HouseE_0-1.mp4" &&
      nowVideo !== "/src/assets/Malinowskiego_HouseF_0-1.mp4"
    ) {
      setVideo(video.exterior1);
    } else if (focusAngle === "ext2") {
      setVideo(video.exterior2);
    } else if (focusAngle === "ext3") {
      setVideo(video.exterior3);
    } else if (focusAngle === "ext4") {
      setVideo(video.exterior4);
    } else if (focusAngle === "int1") {
      setVideo(video.interior1);
    } else if (focusAngle === "int2") {
      setVideo(video.interior2);
    }
  }, [focusAngle]);

  const videoProps = {
    autoPlay: true,
    muted: true,
    preload: "auto",
    controlsList: "nodownload nofullscreen",
    disablePictureInPicture: true,
    playsInline: true,
  };

  const videoRefs = {
    [video.back]: useRef<HTMLVideoElement | null>(null),
    [video.exterior1_1]: useRef<HTMLVideoElement | null>(null),
    [video.exterior1_2]: useRef<HTMLVideoElement | null>(null),
    [video.exterior1_3]: useRef<HTMLVideoElement | null>(null),
    [video.exterior1_4]: useRef<HTMLVideoElement | null>(null),
    [video.exterior2_1]: useRef<HTMLVideoElement | null>(null),
    [video.exterior3_1]: useRef<HTMLVideoElement | null>(null),
    [video.exterior4_1]: useRef<HTMLVideoElement | null>(null),
    [video.exterior2_2]: useRef<HTMLVideoElement | null>(null),
    [video.exterior3_2]: useRef<HTMLVideoElement | null>(null),
    [video.exterior4_2]: useRef<HTMLVideoElement | null>(null),
    [video.interior1_1]: useRef<HTMLVideoElement | null>(null),
    [video.interior1_2]: useRef<HTMLVideoElement | null>(null),
    [video.interior2_1]: useRef<HTMLVideoElement | null>(null),
    [video.interior2_2]: useRef<HTMLVideoElement | null>(null),
  };

  useEffect(() => {
    if (videoRefs[nowVideo]?.current) {
      videoRefs[nowVideo].current.currentTime = 0;
      videoRefs[nowVideo].current.play();
    }
  }, [nowVideo]);
  const arrVideo: string[] = [];
  Object.keys(video).map((key) => {
    arrVideo.push(video[key as keyof typeof video]);
  });
  return (
    <>
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
            opacity: arrVideo.includes(nowVideo) ? "0.6" : "0",
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
          className="video"
          style={{
            display: nowVideo === video.exterior1 ? "block" : "none",
          }}
          {...videoProps}
          src={video.exterior1}
          loop
        />
        <video
          className="video"
          style={{
            display: nowVideo === video.exterior2 ? "block" : "none",
          }}
          {...videoProps}
          src={video.exterior2}
          loop
        />
        <video
          className="video"
          style={{
            display: nowVideo === video.exterior3 ? "block" : "none",
          }}
          {...videoProps}
          src={video.exterior3}
          loop
        />
        <video
          className="video"
          style={{
            display: nowVideo === video.exterior4 ? "block" : "none",
          }}
          {...videoProps}
          src={video.exterior4}
          loop
        />
        <video
          className="video"
          style={{
            display: nowVideo === video.interior1 ? "block" : "none",
          }}
          {...videoProps}
          src={video.interior1}
          loop
        />
        <video
          className="video"
          style={{
            display: nowVideo === video.interior2 ? "block" : "none",
          }}
          {...videoProps}
          src={video.interior2}
          loop
        />
        <video
          style={{
            display: nowVideo === video.exterior1_1 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (nowVideo === video.exterior1_1) setVideo(video.exterior1);
          }}
          src={video.exterior1_1}
          ref={videoRefs[video.exterior1_1]}
        />
        <video
          style={{
            display: nowVideo === video.exterior1_2 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (nowVideo === video.exterior1_2) setVideo(video.exterior1);
          }}
          src={video.exterior1_2}
          ref={videoRefs[video.exterior1_2]}
        />
        <video
          style={{
            display: nowVideo === video.exterior1_3 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (nowVideo === video.exterior1_3) setVideo(video.exterior1);
          }}
          src={video.exterior1_3}
          ref={videoRefs[video.exterior1_3]}
        />
        <video
          style={{
            display: nowVideo === video.exterior1_4 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (nowVideo === video.exterior1_4) setVideo(video.exterior1);
          }}
          src={video.exterior1_4}
          ref={videoRefs[video.exterior1_4]}
        />
        <video
          style={{
            display: nowVideo === video.exterior2_1 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (nowVideo === video.exterior2_1) setVideo(video.exterior2);
          }}
          src={video.exterior2_1}
          ref={videoRefs[video.exterior2_1]}
        />
        <video
          style={{
            display: nowVideo === video.exterior2_2 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (nowVideo === video.exterior2_2) setVideo(video.exterior2);
          }}
          src={video.exterior2_2}
          ref={videoRefs[video.exterior2_2]}
        />
        <video
          style={{
            display: nowVideo === video.exterior3_1 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (nowVideo === video.exterior3_1) setVideo(video.exterior3);
          }}
          src={video.exterior3_1}
          ref={videoRefs[video.exterior3_1]}
        />
        <video
          style={{
            display: nowVideo === video.exterior3_2 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (nowVideo === video.exterior3_2) setVideo(video.exterior3);
          }}
          src={video.exterior3_2}
          ref={videoRefs[video.exterior3_2]}
        />
        <video
          style={{
            display: nowVideo === video.exterior4_1 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (nowVideo === video.exterior4_1) setVideo(video.exterior4);
          }}
          src={video.exterior4_1}
          ref={videoRefs[video.exterior4_1]}
        />
        <video
          style={{
            display: nowVideo === video.exterior4_2 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (nowVideo === video.exterior4_2) setVideo(video.exterior4);
          }}
          src={video.exterior4_2}
          ref={videoRefs[video.exterior4_2]}
        />
        <video
          style={{
            display: nowVideo === video.interior1_1 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (nowVideo === video.interior1_1) setVideo(video.interior1);
          }}
          src={video.interior1_1}
          ref={videoRefs[video.interior1_1]}
        />
        <video
          style={{
            display: nowVideo === video.interior1_2 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (nowVideo === video.interior1_2) setVideo(video.interior1);
          }}
          src={video.interior1_2}
          ref={videoRefs[video.interior1_2]}
        />
        <video
          style={{
            display: nowVideo === video.interior2_1 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (nowVideo === video.interior2_1) setVideo(video.interior2);
          }}
          src={video.interior2_1}
          ref={videoRefs[video.interior2_1]}
        />
        <video
          style={{
            display: nowVideo === video.interior2_2 ? "block" : "none",
          }}
          className="video"
          {...videoProps}
          onEnded={() => {
            if (nowVideo === video.interior2_2) setVideo(video.interior2);
          }}
          src={video.interior2_2}
          ref={videoRefs[video.interior2_2]}
        />
      </Grid>
      <Grid
        sx={{
          width: "520px",
        }}
      >
        <Grid
          sx={{
            py: "15px",
          }}
        >
          <Button
            variant={"text"}
            onClick={() => {
              setVideo(video.back);
              setShowHouse({
                photo: [],
                houseNumber: "",
                plot: "",
                house: "",
                price: "",
                sold: true,
                language: "",
                video: {
                  back: "",
                  exterior1_1: "",
                  exterior1_2: "",
                  exterior1_3: "",
                  exterior1_4: "",
                  exterior2_1: "",
                  exterior2_2: "",
                  exterior3_1: "",
                  exterior3_2: "",
                  exterior4_1: "",
                  exterior4_2: "",
                  interior1_1: "",
                  interior1_2: "",
                  interior2_1: "",
                  interior2_2: "",
                  exterior1: "",
                  exterior2: "",
                  exterior3: "",
                  exterior4: "",
                  interior1: "",
                  interior2: "",
                },
                date: "",
                kitchen: "",
                garage: "",
                livingRoom: "",
                bedroom1: "",
                bedroom2: "",
                wardrobe: "",
                cabinet: "",
              });
            }}
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
              fontSize: "14px",
              fontFamily: "Poppins",
              color: "#fff",
              p: 0,
              width: "155px",
              height: "38px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              "&:hover > div": {
                width: "38px",
                height: "38px",
                margin: "0px",
              },
            }}
          >
            <Grid
              className="arrow"
              sx={{
                width: "36px",
                height: "36px",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "9999px",
                transition: "0.3s",
                margin: "0 2px",
              }}
            >
              <ArrowBackIcon
                sx={{
                  fontSize: "14px",
                  color: "#000",
                }}
              />
            </Grid>
            To house list
          </Button>
        </Grid>
        <HouseCard
          houseNumber={houseNumber}
          plot={plot}
          house={house}
          price={price}
          sold={sold}
          language={language}
          size="big"
        />
        <Grid
          sx={{
            mt: 0.5,
            width: "100%",
            background: "rgba(0, 0, 0, 0.3)",
            borderRadius: "8px",
            border: "1px solid #404040",
            padding: "8px 16px",
            opacity: sold ? "0.6" : "1",
          }}
        >
          <Grid
            sx={{
              display: "flex",
            }}
          >
            <Grid
              sx={{
                minWidth: "97px",
                padding: "20px 32px 0 0",
              }}
            >
              <Title>
                {language === "eng" && "Date"}
                {language === "pl" && "Termin"}
                {language === "esp" && "Fecha"}
                {language === "pt" && "Data"}
              </Title>
              <Info
                sx={{
                  "@media (min-width: 1024px)": {
                    fontSize: "18px",
                  },
                }}
              >
                {date}
              </Info>
            </Grid>
            <Grid
              sx={{
                padding: "12px 16px 12px 24px",
                display: "flex",
                flexWrap: "wrap",
                gap: "16px 12px",
                "& > div": {
                  width: "108px",
                },
              }}
            >
              <Grid>
                <Title>
                  {language === "eng" && "Kitchen"}
                  {language === "pl" && "Kuchnia"}
                  {language === "esp" && "Cocina"}
                  {language === "pt" && "Kitchen"}
                </Title>
                <Info>{kitchen}</Info>
              </Grid>
              <Grid>
                <Title>
                  {language === "eng" && "Garage"}
                  {language === "pl" && "Garaż"}
                  {language === "esp" && "Cochera"}
                  {language === "pt" && "Garage"}
                </Title>
                <Info>{garage}</Info>
              </Grid>
              <Grid>
                <Title>
                  {language === "eng" && "Living room"}
                  {language === "pl" && "Pokój Gościnny"}
                  {language === "esp" && "Sala de estar"}
                  {language === "pt" && "Living room"}
                </Title>
                <Info>{livingRoom}</Info>
              </Grid>
              <Grid>
                <Title>
                  {language === "eng" && "Bedroom 1"}
                  {language === "pl" && "Sypialnia 1"}
                  {language === "esp" && "Dormitorio 1"}
                  {language === "pt" && "Bedroom 1"}
                </Title>
                <Info>{bedroom1}</Info>
              </Grid>
              <Grid>
                <Title>
                  {language === "eng" && "Bedroom 2"}
                  {language === "pl" && "Sypialnia 2"}
                  {language === "esp" && "Dormitorio 2"}
                  {language === "pt" && "Bedroom 2"}
                </Title>
                <Info>{bedroom2}</Info>
              </Grid>
              <Grid>
                <Title>
                  {language === "eng" && "Wardrobe"}
                  {language === "pl" && "Garderoba"}
                  {language === "esp" && "Armario"}
                  {language === "pt" && "Wardrobe"}
                </Title>
                <Info>{wardrobe}</Info>
              </Grid>
              <Grid>
                <Title>
                  {language === "eng" && "Cabinet"}
                  {language === "pl" && "Gabinet"}
                  {language === "esp" && "Gabinete"}
                  {language === "pt" && "Cabinet"}
                </Title>
                <Info>{cabinet}</Info>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              padding: "8px 0 12px",
              justifyContent: "space-between",
              borderTop: "1px solid #333",
            }}
          >
            <Grid>
              <Title>
                {language === "eng" && "House documentation"}
                {language === "pl" && "Dokumentacja domu"}
                {language === "esp" && "Documentación de la casa"}
                {language === "pt" && "Documentação da casa"}
              </Title>
              <Link
                style={{
                  color: "#ffffffde",
                  fontFamily: "Inter",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
                href={
                  sold
                    ? undefined
                    : "https://api.malinowskiego.com/uploads/house_a_0475b53b22.pdf"
                }
              >
                {language === "eng" && "House_Documentation.pdf"}
                {language === "pl" && "Dokumentacja_Domu.pdf"}
                {language === "esp" && "Documentación_de_la_casa.pdf"}
                {language === "pt" && "Documentacao_casa.pdf"}
              </Link>
            </Grid>
            <WhiteButton disabled={sold}>
              {language === "eng" && "Book a call"}
              {language === "pl" && "Umów się"}
              {language === "esp" && "Pedir cita"}
              {language === "pt" && "Agendar uma chamada"}
            </WhiteButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        sx={{
          position: "absolute",
          bottom: "24px",
          left: "50%",
          transform: "translate(-50%, 0)",
          display: "flex",
          gap: "16px",
        }}
      >
        <Button
          onClick={onClickLeft}
          sx={{
            ...buttonStyle,
          }}
        >
          <ArrowBackIosNewIcon
            sx={{
              fontSize: "13px",
              color: "white",
            }}
          ></ArrowBackIosNewIcon>
        </Button>
        <Grid
          sx={{
            width: "273px",
          }}
        >
          <Title2 variant="h5">
            {language === "eng" && "Exterior"}
            {language === "pl" && "Otoczenie"}
            {language === "esp" && "Exterior"}
            {language === "pt" && "Exterior"}
          </Title2>
          <Grid
            sx={{
              display: "flex",
              gap: "10px",
              marginTop: "8px",
            }}
          >
            <Grid
              onClick={() => setFocusAngle("ext1")}
              sx={{
                ...styleAngle,
                borderColor: focusAngle === "ext1" ? "#fff" : "transparent",
              }}
            >
              <img src={houseA1} width="100%" height="100%" alt="house" />
            </Grid>
            <Grid
              onClick={() => setFocusAngle("ext2")}
              sx={{
                ...styleAngle,
                borderColor: focusAngle === "ext2" ? "#fff" : "transparent",
              }}
            >
              <img src={houseA2} width="100%" height="100%" alt="house" />
            </Grid>
            <Grid
              onClick={() => setFocusAngle("ext3")}
              sx={{
                ...styleAngle,
                borderColor: focusAngle === "ext3" ? "#fff" : "transparent",
              }}
            >
              <img src={houseA3} width="100%" height="100%" alt="house" />
            </Grid>
            <Grid
              onClick={() => setFocusAngle("ext4")}
              sx={{
                ...styleAngle,
                borderColor: focusAngle === "ext4" ? "#fff" : "transparent",
              }}
            >
              <img src={houseA4} width="100%" height="100%" alt="house" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          sx={{
            width: "140px",
          }}
        >
          <Title2
            variant="h5"
            sx={{
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {language === "eng" && "Interior"}
            {language === "pl" && "Wnętrze"}
            {language === "esp" && "Interior"}
            {language === "pt" && "Interior"}
          </Title2>
          <Grid
            sx={{
              display: "flex",
              gap: "10px",
              marginTop: "8px",
            }}
          >
            <Grid
              onClick={() => setFocusAngle("int1")}
              sx={{
                ...styleAngle,
                borderColor: focusAngle === "int1" ? "#fff" : "transparent",
              }}
            >
              <img src={houseA5} width="100%" height="100%" alt="house" />
            </Grid>
            <Grid
              onClick={() => setFocusAngle("int2")}
              sx={{
                ...styleAngle,
                borderColor: focusAngle === "int2" ? "#fff" : "transparent",
              }}
            >
              <img src={houseA6} width="100%" height="100%" alt="house" />
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Title2
            variant="h5"
            sx={{
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            {language === "eng" && "Gallery"}
            {language === "pl" && "Galeria"}
            {language === "esp" && "Galería"}
            {language === "pt" && "Gallery"}
          </Title2>
          <Grid
            onClick={handleOpen}
            sx={{
              width: "65px",
              height: "65px",
              borderWidth: "1px",
              borderColor: "transparent",
              borderStyle: "solid",
              cursor: "pointer",
              borderRadius: "6px",
              overflow: "hidden",
              marginTop: "8px",
              background: "#ccc",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ImageNotSupportedIcon
              sx={{
                display: photo.length > 0 ? "none" : "block",
                fontSize: "30px",
              }}
            ></ImageNotSupportedIcon>
            <img src={photo[0]} width="100%" height="100%" alt="house" />
          </Grid>
        </Grid>
        <Button
          onClick={onClickRight}
          sx={{
            ...buttonStyle,
          }}
        >
          <ArrowForwardIosIcon
            sx={{
              fontSize: "13px",
              color: "white",
            }}
          ></ArrowForwardIosIcon>
        </Button>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        sx={{
          background: "none",
          alignItems: "center",
          height: "100%",
        }}
      >
        <DialogContent
          sx={{
            padding: "0",
          }}
        >
          <Box
            sx={{
              position: "relative",
              maxWidth: "900px",
              height: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <DialogActions
              sx={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                border: "1px solid #888",
                background: "rgba(0,0,0,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&:hover": {
                  background: "#fff",
                },
              }}
            >
              <IconButton
                sx={{
                  color: "#000",
                }}
                onClick={handleClose}
              >
                <Close />
              </IconButton>
            </DialogActions>
            <img
              src={photo[currentIndex]}
              alt={`Photo ${currentIndex + 1}`}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                backgroundColor: "#fff",
                opacity: "0.9",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&: hover": {
                  backgroundColor: "#fff",
                },
              }}
            >
              <ArrowBackIosNewIcon
                sx={{
                  color: "#000",
                  fontSize: "16px",
                }}
              />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                opacity: "0.9",
                "&: hover": {
                  backgroundColor: "#fff",
                },
              }}
            >
              <ArrowForwardIosIcon
                sx={{
                  color: "#000",
                  fontSize: "16px",
                }}
              />
            </IconButton>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HouseShowing;
