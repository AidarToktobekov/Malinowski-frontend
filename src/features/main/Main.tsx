import Grid from "@mui/material/Grid2";
import video1 from "../../assets/Malinowskiego_Hero_1-1.mp4";
import video2 from "../../assets/Malinowskiego_Hero_1-2.mp4";
import video3 from "../../assets/Malinowskiego_Hero_4-2.mp4";
import video4 from "../../assets/Malinowskiego_Hero_2-1.mp4";
import { useEffect, useRef, useState } from "react";
import { Container, styled, Typography } from "@mui/material";
import { WhiteButton } from "../../ui/header/Header.tsx";

export const TitleLocation = styled(Typography)({
  color: "#fff",
  fontSize: "20px",
  fontWeight: "600",
  fontFamily: "Poppins",

  "@media (min-width: 1024px)": {
    fontSize: "25px",
  },
});

export const TextLocation = styled(Typography)({
  color: "#d1d1d1",
  fontSize: "16px",
  fontFamily: "Inter",
  letterSpacing: "-0.03em",

  "@media (min-width: 1024px)": {
    fontSize: "18px",
  },
});

interface Props {
  language: string;
}
const Main: React.FC<Props> = ({ language }) => {
  const [video, setVideo] = useState(video3);

  const videoRef2 = useRef<HTMLVideoElement | null>(null);
  const videoRef4 = useRef<HTMLVideoElement | null>(null);

  let videoProps = {
    autoPlay: true,
    muted: true,
    preload: "auto",
    controlsList: "nodownload nofullscreen",
    disablePictureInPicture: true,
    playsInline: true,
  };

  // useEffect(() => {
  //     const handleScroll = () => {
  //         const scrollTop = window.scrollY || document.documentElement.scrollTop;
  //
  //         if (scrollTop < 300 && video === video3) {
  //             setVideo(video4);
  //         } else if (scrollTop >= 300 && video !== video3 ) {
  //             setVideo(video2);
  //         }
  //     };
  //
  //     window.addEventListener("scroll", handleScroll);
  //
  //     return () => {
  //         window.removeEventListener("scroll", handleScroll);
  //     };
  // }, [video]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "section1") {
              setVideo(video4);
            } else if (entry.target.id === "section2") {
              setVideo(video2);
            }
          }
        });
      },
      { threshold: 0.5 },
    );
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");

    if (section1) observer.observe(section1);
    if (section2) observer.observe(section2);

    return () => {
      if (section1) observer.unobserve(section1);
      if (section2) observer.unobserve(section2);
    };
  }, []);

  useEffect(() => {
    if (videoRef2.current && video === video2) {
      videoRef2.current.currentTime = 0;
      videoRef2.current.play();
    } else if (videoRef4.current && video === video4) {
      videoRef4.current.currentTime = 0;
      videoRef4.current.play();
    }
  }, [video]);

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
              display: video === video1 ? "block" : "none",
              top: "50%",
              transform: "translate(0, -50%)",
              width: "100%",
              transition: "125ms ease-in",
              objectFit: "cover",
            }}
            {...videoProps}
            src={video1}
            loop
          />
          <video
            style={{
              position: "absolute",
              display: video === video2 ? "block" : "none",
              top: "50%",
              transform: "translate(0, -50%)",
              width: "100%",
              transition: "125ms ease-in",
              objectFit: "cover",
            }}
            ref={videoRef2}
            onEnded={() => {
              if (video === video2) setVideo(video3);
            }}
            src={video2}
            {...videoProps}
          />
          <video
            style={{
              position: "absolute",
              display: video === video3 ? "block" : "none",
              top: "50%",
              transform: "translate(0, -50%)",
              width: "100%",
              transition: "125ms ease-in",
              objectFit: "cover",
            }}
            {...videoProps}
            src={video3}
            loop
          />
          <video
            style={{
              position: "absolute",
              display: video === video4 ? "block" : "none",
              top: "50%",
              transform: "translate(0, -50%)",
              width: "100%",
              transition: "125ms ease-in",
              objectFit: "cover",
            }}
            {...videoProps}
            onEnded={() => {
              if (video === video4) setVideo(video1);
            }}
            src={video4}
            ref={videoRef4}
          />
        </Grid>
      </Grid>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          maxWidth: "1350px",
          px: 2,
        }}
      >
        <Grid
          id="section1"
          sx={{
            width: "100%",
            padding: "95px 0",
            lineHeight: "110%",
            letterSpacing: "-0.03em",
            "@media (min-width: 1024px)": {
              width: "40%",
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "48px",
              fontWeight: "600",
              color: "white",
              fontFamily: "Poppins",
              marginBottom: "12.8px",

              "@media (min-width: 1024px)": {
                fontSize: "64px",
              },
            }}
          >
            {language === "eng" && "Malinowski housing estate"}
            {language === "pl" && "Osiedle Malinowskiego"}
            {language === "esp" && "Urbanización Malinowski"}
            {language === "pt" && "Condomínio residencial Malinowski"}
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "140%",
              letterSpacing: "-0.03em",
              fontFamily: "Inter",
              color: "#d1d1d1",
              maxWidth: "400px",

              "@media (min-width: 1024px)": {
                fontSize: "18px",
              },
            }}
          >
            {language === "eng" &&
              "A quiet place in a great neighborhood. Enjoy unlimited nature and the charms of city life in Józefów."}
            {language === "pl" &&
              "Zaciszne miejsce w doskonałym sąsiedztwie. Korzystaj z nieograniczonej przyrody oraz uroków miejskiego życia w Józefowie."}
            {language === "esp" &&
              "Un lugar tranquilo en un excelente vecindario. Disfruta de la naturaleza ilimitada y los encantos de la vida urbana en Józefów."}
            {language === "pt" &&
              "Um lugar tranquilo em um ótimo bairro. Desfrute natureza ilimitada e os encantos da vida urbana em Józefów."}
          </Typography>
          <Grid
            sx={{
              display: "flex",
              maxWidth: "558px",
              mt: 4,
              pb: 7,
              borderBottom: "1px solid #888",
              gap: "20px",
            }}
          >
            <WhiteButton
              variant="contained"
              onClick={() => {
                window.scrollTo({
                  top: 500,
                  behavior: "smooth",
                });
              }}
            >
              {language === "eng" && "Pick a house"}
              {language === "pl" && "Wybierz dom"}
              {language === "esp" && "Elige casa"}
              {language === "pt" && "Escolha casa"}
            </WhiteButton>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  width: "fit-content",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "9999px",
                  border: "1px solid #888",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  p: "12px",
                }}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  color="#e5e7eb"
                  viewBox="0 0 24 24"
                  className="Header___StyledCiLocationOn-sc-1r2raak-0 jngcSZ"
                  height="24px"
                  width="24px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Location_On">
                    <g>
                      <path d="M12,21.933a1.715,1.715,0,0,1-1.384-.691L5.555,14.5a7.894,7.894,0,1,1,12.885-.009L13.385,21.24A1.717,1.717,0,0,1,12,21.933ZM11.992,3.066A6.81,6.81,0,0,0,7.414,4.815a6.891,6.891,0,0,0-1.05,9.1l5.051,6.727a.725.725,0,0,0,.584.292h0a.732.732,0,0,0,.586-.292l5.044-6.734A6.874,6.874,0,0,0,12.81,3.113,7.277,7.277,0,0,0,11.992,3.066Z"></path>
                      <path d="M12,12.5A2.5,2.5,0,1,1,14.5,10,2.5,2.5,0,0,1,12,12.5Zm0-4A1.5,1.5,0,1,0,13.5,10,1.5,1.5,0,0,0,12,8.5Z"></path>
                    </g>
                  </g>
                </svg>
              </Grid>
              <Typography
                variant={"h5"}
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  fontFamily: "Poppins",
                  textTransform: "uppercase",
                  ml: "12px",
                  color: "#fff",
                  maxWidth: "218px",
                }}
              >
                Józefów, <br />
                "księdza malinowskiego 38 Poland"
              </Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              mt: "40px",
              gap: "48px",
            }}
          >
            <Grid
              sx={{
                "@media (min-width: 1024px)": {
                  maxWidth: "130px",
                },
              }}
            >
              <TitleLocation variant={"h5"}>
                <Typography
                  component={"span"}
                  sx={{
                    fontSize: "36px",
                    fontWeight: "600",
                    fontFamily: "Poppins",
                  }}
                >
                  {language === "pl" ? "0,5" : "0.5"}
                </Typography>{" "}
                km
              </TitleLocation>
              <TextLocation>
                {language === "eng" && "to shops and bus stops"}
                {language === "pl" && "do sklepów i przystanków"}
                {language === "esp" && "a tiendas y paradas de autobús"}
                {language === "pt" && "para lojas e pontos de ônibus"}
              </TextLocation>
            </Grid>
            <Grid
              sx={{
                "@media (min-width: 1024px)": {
                  maxWidth: "130px",
                },
              }}
            >
              <TitleLocation variant={"h5"}>
                <Typography
                  component={"span"}
                  sx={{
                    fontSize: "36px",
                    fontWeight: "600",
                    fontFamily: "Poppins",
                  }}
                >
                  3
                </Typography>{" "}
                km
              </TitleLocation>
              <TextLocation>
                {language === "eng" && "to Warsaw ring road"}
                {language === "pl" && "do obwodnicy Warszawy"}
                {language === "esp" &&
                  "a la carretera de circunvalación de Varsovia"}
                {language === "pt" && "para o anel viário de Varsóvia"}
              </TextLocation>
            </Grid>
            <Grid
              sx={{
                "@media (min-width: 1024px)": {
                  maxWidth: "130px",
                },
              }}
            >
              <TitleLocation variant={"h5"}>
                <Typography
                  component={"span"}
                  sx={{
                    fontSize: "36px",
                    fontWeight: "600",
                    fontFamily: "Poppins",
                  }}
                >
                  {language === "pl" ? "0,3" : "0.3"}
                </Typography>{" "}
                km
              </TitleLocation>
              <TextLocation>
                {language === "eng" && "to forests"}
                {language === "pl" && "do terenów leśnych"}
                {language === "esp" && "a bosques"}
                {language === "pt" && "para florestas"}
              </TextLocation>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Main;
