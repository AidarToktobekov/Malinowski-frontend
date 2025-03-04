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
import mobileStaticImage from "../../../assets/mobile-static.jpg";
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
import { useEffect, useState } from "react";
import Close from "@mui/icons-material/Close";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import HouseShowingVideos from "./HouseShowingVideos.tsx";
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
export const ButtonAngleHouse = styled(Button)({
  padding: "0 6px 12px",
  textTransform: "uppercase",
  color: "#fff",
  transition: "0.3s ease-in-out",
  fontSize: "14px",
  fontWeight: "600",
  letterSpacing: "0.02857em",
  fontFamily: "Poppins",
  "&:after": {
    content: "''",
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "2px",
    backgroundColor: "#fff",
    transition: "transform 0.3s ease-in-out",
    transform: "scaleX(0)",
  },
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

  const [swiperSlide, setSwiperSlide] = useState(0);

  useEffect(() => {
    if (swiperSlide === 0) {
      setFocusAngle("ext1");
    } else if (swiperSlide === 1) {
      setFocusAngle("ext2");
    } else if (swiperSlide === 2) {
      setFocusAngle("ext3");
    } else if (swiperSlide === 3) {
      setFocusAngle("ext4");
    } else if (swiperSlide === 4) {
      setFocusAngle("int1");
    } else if (swiperSlide === 5) {
      setFocusAngle("int2");
    }
  }, [swiperSlide]);

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

  const arrVideo: string[] = [];
  Object.keys(video).map((key) => {
    arrVideo.push(video[key as keyof typeof video]);
  });

  const handleAngleHouse = (slide: number) => {
    setSwiperSlide(slide);
  };

  return (
    <>
      <Grid
        sx={{
          height: "100%",
          "@media (max-width: 1024px)": {
            display: "none",
          },
        }}
      >
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
          <HouseShowingVideos
            video={video}
            setVideo={setVideo}
            nowVideo={nowVideo}
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
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
                      come: "",
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
                <Button
                  disabled={sold}
                  sx={{
                    borderRadius: "9999px",
                    padding: "12px 28px",
                    fontFamily: "Poppins",
                    textTransform: "uppercase",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#262626",
                    height: "42px",
                    border: "0.8px solid rgba(229, 231, 235, 1)",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 1)",
                      boxShadow: "none",
                    },
                  }}
                >
                  {language === "eng" && "Book a call"}
                  {language === "pl" && "Umów się"}
                  {language === "esp" && "Pedir cita"}
                  {language === "pt" && "Agendar uma chamada"}
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            sx={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
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
        </Grid>
      </Grid>

      <Grid
        sx={{
          display: "none",
          "@media (max-width: 1024px)": {
            display: "block",
          },
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
                come: "",
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
            height: "38px",
            display: "flex",
            gap: "12px",
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
          Malinowskiego {houseNumber}
        </Button>
        <Grid
          sx={{
            position: "absolute",
            top: "75px",
            left: "0",
            zIndex: "1",
            width: "100%",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              gap: "12px",
              marginBottom: "16px",
              padding: "0 18px",
            }}
          >
            <ButtonAngleHouse
              onClick={() => handleAngleHouse(0)}
              sx={{
                "&:after": {
                  transform:
                    swiperSlide === 0 ||
                    swiperSlide === 1 ||
                    swiperSlide === 2 ||
                    swiperSlide === 3
                      ? "scaleX(1)"
                      : "scaleX(0)",
                },
              }}
            >
              Exterior
            </ButtonAngleHouse>
            <ButtonAngleHouse
              onClick={() => handleAngleHouse(4)}
              sx={{
                "&:after": {
                  transform:
                    swiperSlide === 4 || swiperSlide === 5
                      ? "scaleX(1)"
                      : "scaleX(0)",
                },
              }}
            >
              Interior
            </ButtonAngleHouse>
            <ButtonAngleHouse
              onClick={handleOpen}
              sx={{
                "&:after": {
                  transform: open ? "scaleX(1)" : "scaleX(0)",
                },
              }}
            >
              Gallery
            </ButtonAngleHouse>
          </Grid>
          <Grid
            sx={{
              position: "relative",
              background: `url(${mobileStaticImage}) center center / cover no-repeat`,
              height: "calc(-60px + 50vh)",
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
            <Grid
              sx={{
                position: "absolute",
                bottom: "16px",
                display: "flex",
                width: "100%",
                padding: "0 10px",
                gap: "10px",
                zIndex: "3",
                "&>button": {
                  width: "100%",
                  height: "3px",
                  padding: "0",
                  borderRadius: "6px",
                  transition: "background 0.5s",
                  minWidth: "0",
                },
              }}
            >
              <Button
                onClick={() => setSwiperSlide(0)}
                sx={{
                  background:
                    swiperSlide === 0
                      ? "rgba(255, 255, 255, 1)"
                      : "rgba(255, 255, 255, 0.3)",
                }}
              ></Button>
              <Button
                onClick={() => setSwiperSlide(1)}
                sx={{
                  background:
                    swiperSlide === 1
                      ? "rgba(255, 255, 255, 1)"
                      : "rgba(255, 255, 255, 0.3)",
                }}
              ></Button>
              <Button
                onClick={() => setSwiperSlide(2)}
                sx={{
                  background:
                    swiperSlide === 2
                      ? "rgba(255, 255, 255, 1)"
                      : "rgba(255, 255, 255, 0.3)",
                }}
              ></Button>
              <Button
                onClick={() => setSwiperSlide(3)}
                sx={{
                  background:
                    swiperSlide === 3
                      ? "rgba(255, 255, 255, 1)"
                      : "rgba(255, 255, 255, 0.3)",
                }}
              ></Button>
              <Button
                onClick={() => setSwiperSlide(4)}
                sx={{
                  background:
                    swiperSlide === 4
                      ? "rgba(255, 255, 255, 1)"
                      : "rgba(255, 255, 255, 0.3)",
                }}
              ></Button>
              <Button
                onClick={() => setSwiperSlide(5)}
                sx={{
                  background:
                    swiperSlide === 5
                      ? "rgba(255, 255, 255, 1)"
                      : "rgba(255, 255, 255, 0.3)",
                }}
              ></Button>
            </Grid>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                margin: "auto",
                opacity: 0,
                position: "absolute",
                zIndex: "2",
              }}
            >
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={false}
                autoplay={false}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                onSlideChange={(swiper) => {
                  setSwiperSlide(swiper.realIndex);
                }}
              >
                <SwiperSlide key={1}></SwiperSlide>
                <SwiperSlide key={2}></SwiperSlide>
                <SwiperSlide key={3}></SwiperSlide>
                <SwiperSlide key={4}></SwiperSlide>
                <SwiperSlide key={5}></SwiperSlide>
                <SwiperSlide key={6}></SwiperSlide>
              </Swiper>
            </Box>
            <HouseShowingVideos
              video={video}
              setVideo={setVideo}
              nowVideo={nowVideo}
            />
          </Grid>
        </Grid>
        <Grid
          sx={{
            margin: "calc(28px + 50vh) auto 16px",
            maxWidth: "640px",
            width: "100%",
            padding: "8px",
            background: "#161616",
            border: "0.5px solid #333",
            borderRadius: "8px",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              padding: "12px 8px",
              maxWidth: "396px",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Grid
              sx={{
                width: "69px",
                paddingRight: "16px",
                borderRight: "1px solid #262626",
              }}
            >
              <Title>
                {language === "eng" && "House"}
                {language === "pl" && "Dom"}
                {language === "esp" && "Casa"}
                {language === "pt" && "Casa"}
              </Title>
              <Info
                sx={{
                  fontSize: "20px",
                  color: "#fff",
                }}
              >
                {houseNumber}
              </Info>
            </Grid>
            <Grid>
              <Title>
                {language === "eng" && "Plot, M²"}
                {language === "pl" && "Działka, M²"}
                {language === "esp" && "Parcela, M²"}
                {language === "pt" && "Lote, M²"}
              </Title>
              <Info>
                {plot} m² / {house}
              </Info>
            </Grid>
            <Grid>
              <Title>
                {language === "eng" && "Price, EUR"}
                {language === "pl" && "Cena, PLN"}
                {language === "esp" && "Precio, EUR"}
                {language === "pt" && "Preço, BRL"}
              </Title>
              <Info>{price}</Info>
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "20px",
              maxWidth: "446px",
              width: "100%",
              opacity: sold ? "0.6" : "1",
              padding: "20px 16px 12px",
              "& > div": {
                width: "90px",
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
              <Info
                sx={{
                  fontSize: "14px",
                }}
              >
                {kitchen}
              </Info>
            </Grid>
            <Grid>
              <Title>
                {language === "eng" && "Garage"}
                {language === "pl" && "Garaż"}
                {language === "esp" && "Cochera"}
                {language === "pt" && "Garage"}
              </Title>
              <Info
                sx={{
                  fontSize: "14px",
                }}
              >
                {garage}
              </Info>
            </Grid>
            <Grid>
              <Title>
                {language === "eng" && "Living room"}
                {language === "pl" && "Pokój Gościnny"}
                {language === "esp" && "Sala de estar"}
                {language === "pt" && "Living room"}
              </Title>
              <Info
                sx={{
                  fontSize: "14px",
                }}
              >
                {livingRoom}
              </Info>
            </Grid>
            <Grid>
              <Title>
                {language === "eng" && "Bedroom 1"}
                {language === "pl" && "Sypialnia 1"}
                {language === "esp" && "Dormitorio 1"}
                {language === "pt" && "Bedroom 1"}
              </Title>
              <Info
                sx={{
                  fontSize: "14px",
                }}
              >
                {bedroom1}
              </Info>
            </Grid>
            <Grid>
              <Title>
                {language === "eng" && "Bedroom 2"}
                {language === "pl" && "Sypialnia 2"}
                {language === "esp" && "Dormitorio 2"}
                {language === "pt" && "Bedroom 2"}
              </Title>
              <Info
                sx={{
                  fontSize: "14px",
                }}
              >
                {bedroom2}
              </Info>
            </Grid>
            <Grid>
              <Title>
                {language === "eng" && "Wardrobe"}
                {language === "pl" && "Garderoba"}
                {language === "esp" && "Armario"}
                {language === "pt" && "Wardrobe"}
              </Title>
              <Info
                sx={{
                  fontSize: "14px",
                }}
              >
                {wardrobe}
              </Info>
            </Grid>
            <Grid>
              <Title>
                {language === "eng" && "Cabinet"}
                {language === "pl" && "Gabinet"}
                {language === "esp" && "Gabinete"}
                {language === "pt" && "Cabinet"}
              </Title>
              <Info
                sx={{
                  fontSize: "14px",
                }}
              >
                {cabinet}
              </Info>
            </Grid>
          </Grid>
          <Grid
            sx={{
              borderTop: "1px solid #333",
              padding: "0 16px 16px",
              maxWidth: "446px",
              width: "100%",
              opacity: sold ? "0.6" : "1",
            }}
          >
            <Title
              sx={{
                mt: 1,
              }}
            >
              {language === "eng" && "House documentation"}
              {language === "pl" && "Dokumentacja domu"}
              {language === "esp" && "Documentación de la casa"}
              {language === "pt" && "Documentação da casa"}
            </Title>
            <Link
              style={{
                display: "block",
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
            <Button
              disabled={sold}
              sx={{
                width: "100%",
                borderRadius: "9999px",
                padding: "12px 28px",
                fontFamily: "Poppins",
                textTransform: "uppercase",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                fontSize: "14px",
                fontWeight: "600",
                color: "#262626",
                height: "42px",
                border: "0.8px solid rgba(229, 231, 235, 1)",
                boxShadow: "none",
                mt: 1,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 1)",
                  boxShadow: "none",
                },
              }}
            >
              {language === "eng" && "Book a call"}
              {language === "pl" && "Umów się"}
              {language === "esp" && "Pedir cita"}
              {language === "pt" && "Agendar uma chamada"}
            </Button>
          </Grid>
        </Grid>
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
