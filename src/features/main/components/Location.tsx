import Grid from "@mui/material/Grid2";
import { Container, styled, Typography } from "@mui/material";
import MapPlaceholder from "../../../assets/map_placeholder.jpg";
import { useState } from "react";

interface Props {
  language: string;
}

export const LocationBlock = styled(Grid)({
  display: "flex",
  gap: "18px",
  alignItems: "center",
  maxWidth: "260px",
  width: "100%",
  "& > div > p": {
    fontFamily: "Inter",
    color: "#eaeaea",
  },
  "& > div > p > span": {
    fontSize: "20px",
    fontWeight: "700",
  },
  "@media (max-width: 1024px)": {
    flexDirection: "column",
    maxWidth: "300px",
    alignItems: "start",
  },
});
const Location: React.FC<Props> = ({ language }) => {
  const [mapPlaceholderOpacity, setMapPlaceholderOpacity] = useState(true);

  return (
    <>
      <Grid
        sx={{
          py: "40px",
          backgroundColor: "#0f0f0f",
          position: "relative",
        }}
      >
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            maxWidth: "1350px",
            px: 2,
          }}
        >
          <Grid
            sx={{
              width: "100%",
              paddingBottom: "96px",
              "@media (min-width: 1024px)": {
                width: "50%",
                paddingRight: "64px",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: "48px",
                fontWeight: "600",
                color: "white",
                fontFamily: "Poppins",
                padding: "80px 0 64px",
                borderBottom: "none",

                "@media (min-width: 1024px)": {
                  fontSize: "64px",
                  borderBottom: "1px solid #333",
                  padding: "80px 0 24px",
                },
              }}
            >
              {language === "eng" && "Location"}
              {language === "pl" && "Lokalizacja"}
              {language === "esp" && "Ubicación"}
              {language === "pt" && "Location"}
            </Typography>
            <Grid
              sx={{
                width: "50%",
                height: "100%",
                position: "absolute",
                top: "0",
                right: "0",
                "@media (max-width: 1024px)": {
                  position: "relative",
                  width: "100%",
                  height: "400px",
                },
              }}
            >
              <Grid
                onClick={() => {
                  setMapPlaceholderOpacity(false);
                }}
                sx={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%",
                  background: `url(${MapPlaceholder}) center center / cover no-repeat`,
                  zIndex: "2",
                  display: mapPlaceholderOpacity ? "flex" : "none",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid
                  sx={{
                    width: "160px",
                    height: "160px",
                    borderRadius: "100%",
                    backgroundColor: "#000",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mouse"
                    width="40"
                    height="58"
                    viewBox="0 0 40 58"
                  >
                    <g fill="#FFFFFF" fillRule="evenodd">
                      <polygon
                          fillRule="nonzero"
                        points="38.275 23 9.045 23 9.045 25 38.275 25"
                      ></polygon>
                      <polygon
                        fillRule="nonzero"
                        points="22.667 10.139 22.667 23.5 24.667 23.5 24.667 10.139"
                      ></polygon>
                      <path
                        fillRule="nonzero"
                        d="M23.66,55.3612689 C31.1635892,55.3612689 37.2751259,49.7250913 37.2751259,42.8664131 L37.2751259,23.5804576 C37.2751259,16.7673171 31.1551908,11.1387311 23.66,11.1387311 C16.1648092,11.1387311 10.0448741,16.7673171 10.0448741,23.5804576 L10.0448741,42.9195424 C10.0448741,49.7326829 16.1648092,55.3612689 23.66,55.3612689 Z M23.66,57.3612689 C15.0958825,57.3612689 8.04487413,50.8763623 8.04487413,42.9195424 L8.04487413,23.5804576 C8.04487413,15.6236377 15.0958825,9.13873106 23.66,9.13873106 C32.2241175,9.13873106 39.2751259,15.6236377 39.2751259,23.5804576 L39.2751259,42.8664131 C39.2751259,50.8674505 32.2336144,57.3612689 23.66,57.3612689 Z"
                      ></path>
                      <path
                        className="mouse-small-click"
                        fillRule="nonzero"
                        d="M6.57820747,20.1259121 C6.57820747,13.448275 14.2805453,6.82054924 21.9266667,6.82054924 L21.9266667,4.82054924 C13.2371205,4.82054924 4.57820747,12.2713911 4.57820747,20.1259121 L6.57820747,20.1259121 Z"
                      ></path>
                      <path
                        className="mouse-large-click"
                        fillRule="nonzero"
                        d="M2.37820747,21.1259121 C2.37820747,11.5705676 12.1430608,2.63873106 22.9266667,2.63873106 L22.9266667,0.638731061 C11.0763312,0.638731061 0.378207465,10.4242229 0.378207465,21.1259121 L2.37820747,21.1259121 Z"
                      ></path>
                      <path
                        className="mouse-click"
                        d="M9.64178282,24.1387311 C9.64178282,24.1387311 8.4864369,9.65181073 24.0836068,10.1513597 C24.0836068,14.1477515 24.0836068,23.6391821 24.0836068,23.6391821 L24.0836068,24.1387311 L9.64178282,24.1387311 Z"
                      ></path>
                    </g>
                  </svg>
                  <Typography
                    sx={{
                      width: "80%",
                      color: "white",
                      textAlign: "center",
                      fontSize: "12px",
                      lineHeight: "1.4",
                      marginTop: "15px",
                      fontFamily: "Poppins",
                    }}
                  >
                    {language === "eng" && "Click and drag to move image"}
                    {language === "pl" &&
                      "Kliknij i przeciągnij, aby przesunąć mapę"}
                    {language === "esp" &&
                      "Arrastra el mapa para ver la ubicación"}
                    {language === "pt" &&
                      "Clique e arraste para mover a imagem"}
                  </Typography>
                </Grid>
              </Grid>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6924.770170336099!2d21.18890150036193!3d52.14749071027975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47192b5a191cea1d%3A0x2bf9c31e6740c303!2sKsi%C4%99dza%20Wincentego%20Malinowskiego%2038%2C%2005-410%20J%C3%B3zef%C3%B3w!5e0!3m2!1sen!2spl!4v1677579952705!5m2!1sen!2spl"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="Location___StyledIframe-sc-yv44hd-4 gZZeKP"
                style={{ width: "100%", height: "100%", border: "none" }}
              ></iframe>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                paddingTop: "48px",
                gap: "48px 64px",
              }}
            >
              <LocationBlock>
                <img
                  src="https://api.malinowskiego.com/uploads/highway_d273884955.svg"
                  alt="#"
                />
                <Grid>
                  <Typography>
                    {language === "eng" && "Warsaw Ring Road"}
                    {language === "pl" && "Obwodnica Warszawy"}
                    {language === "esp" &&
                      "Carretera de Circunvalación de Varsovia"}
                    {language === "pt" &&
                      "Carretera de Circunvalación de Varsovia"}
                  </Typography>
                  <Typography>
                    <Typography component={"span"}>3</Typography> km
                  </Typography>
                </Grid>
              </LocationBlock>
              <LocationBlock>
                <img
                  src="https://api.malinowskiego.com/uploads/bus_656c5eb86d.svg"
                  alt="#"
                />
                <Grid>
                  <Typography>
                    {language === "eng" && "Bus Stop"}
                    {language === "pl" && "Przystanek autobusowy"}
                    {language === "esp" && "Parada de Autobús"}
                    {language === "pt" && "Ponto de ônibus"}
                  </Typography>
                  <Typography>
                    <Typography component={"span"}>0.4</Typography> km
                  </Typography>
                </Grid>
              </LocationBlock>
              <LocationBlock>
                <img
                  src="https://api.malinowskiego.com/uploads/slide_4f6cbcc2e9.svg"
                  alt="#"
                />
                <Grid>
                  <Typography>
                    {language === "eng" && "Playground"}
                    {language === "pl" && "Plac zabaw"}
                    {language === "esp" && "Parque Infantil"}
                    {language === "pt" && "Parque Infantil"}
                  </Typography>
                  <Typography>
                    <Typography component={"span"}>0.2</Typography> km
                  </Typography>
                </Grid>
              </LocationBlock>
              <LocationBlock>
                <img
                  src="https://api.malinowskiego.com/uploads/graduation_cap_33630b93ae.svg"
                  alt="#"
                />
                <Grid>
                  <Typography>
                    {language === "eng" && "Primary School"}
                    {language === "pl" && "Szkoła Podstawowa"}
                    {language === "esp" && "Escuela Primaria"}
                    {language === "pt" && "Escuela Primaria"}
                  </Typography>
                  <Typography>
                    <Typography component={"span"}>1.5</Typography> km
                  </Typography>
                </Grid>
              </LocationBlock>
              <LocationBlock>
                <img
                  src="https://api.malinowskiego.com/uploads/online_shopping_9473de2709.svg"
                  alt="#"
                />
                <Grid>
                  <Typography>
                    {language === "eng" && "Grocery Store"}
                    {language === "pl" && "Sklep spożywczy"}
                    {language === "esp" && "Tienda de comestibles"}
                    {language === "pt" && "Tienda de comestibles"}
                  </Typography>
                  <Typography>
                    <Typography component={"span"}>0.4</Typography> km
                  </Typography>
                </Grid>
              </LocationBlock>
              <LocationBlock>
                <img
                  src="https://api.malinowskiego.com/uploads/medicine_0e18502f65.svg"
                  alt="#"
                />
                <Grid>
                  <Typography>
                    {language === "eng" && "Clinic"}
                    {language === "pl" && "Przychodnia"}
                    {language === "esp" && "Clínica"}
                    {language === "pt" && "Clinic"}
                  </Typography>
                  <Typography>
                    <Typography component={"span"}>0.5</Typography> km
                  </Typography>
                </Grid>
              </LocationBlock>
              <LocationBlock>
                <img
                  src="https://api.malinowskiego.com/uploads/hospital_eda4262b65.svg"
                  alt="#"
                />
                <Grid>
                  <Typography>
                    {language === "eng" && "Pharmacy"}
                    {language === "pl" && "Apteka"}
                    {language === "esp" && "Farmacia"}
                    {language === "pt" && "Farmacia"}
                  </Typography>
                  <Typography>
                    <Typography component={"span"}>0.5</Typography> km
                  </Typography>
                </Grid>
              </LocationBlock>
              <LocationBlock>
                <img
                  src="https://api.malinowskiego.com/uploads/trees_9e1fde7c01.svg"
                  alt="#"
                />
                <Grid>
                  <Typography>
                    {language === "eng" && "Woods and Lake"}
                    {language === "pl" && "Lasy i jezioro"}
                    {language === "esp" && "Bosques y Lago"}
                    {language === "pt" && "Parque Infantil"}
                  </Typography>
                  <Typography>
                    <Typography component={"span"}>0.4</Typography> km
                  </Typography>
                </Grid>
              </LocationBlock>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Location;
