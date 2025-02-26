import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";
import { IHouseCard } from "../../../types/malinowskiTypes.ts";

const HouseCard: React.FC<IHouseCard> = ({
  houseNumber,
  house,
  sold,
  price,
  plot,
  language,
  isHovered,
  setIsHovered,
  setVideo,
  video,
  size,
  setShowHouse,
  allVideo,
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
  return (
    <Grid
      onClick={() => {
        if (
          setVideo &&
          video &&
          setShowHouse &&
          allVideo &&
          photo &&
          date &&
          kitchen &&
          garage &&
          livingRoom &&
          bedroom1 &&
          bedroom2 &&
          wardrobe &&
          cabinet
        ) {
          setShowHouse({
            houseNumber: houseNumber,
            plot: plot,
            house: house,
            price: price,
            sold: sold,
            language: language,
            video: allVideo,
            photo: photo,
            date: date,
            kitchen: kitchen,
            garage: garage,
            livingRoom: livingRoom,
            bedroom1: bedroom1,
            bedroom2: bedroom2,
            wardrobe: wardrobe,
            cabinet: cabinet,
          });
          setVideo(video);
        }
      }}
      onMouseEnter={() => {
        if (setIsHovered) {
          setIsHovered(houseNumber);
        }
      }}
      onMouseLeave={() => {
        if (setIsHovered) {
          setIsHovered("");
        }
      }}
      sx={{
        width: "100%",
        background:
          isHovered === houseNumber
            ? "rgba(255, 255, 255, 0.8)"
            : "rgba(0, 0, 0, 0.3)",
        borderRadius: "8px",
        transform: "scaleX(1) scaleY(1)",
        cursor: size === "small" ? "pointer" : "default",
        border: "1px solid #404040",
        transitionProperty:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "300ms",
        display: "flex",
        overflow: "hidden",
        color:
          size === "small"
            ? isHovered === houseNumber
              ? sold
                ? "rgba(174, 174, 174, 1)"
                : "#000"
              : sold
                ? "rgba(174, 174, 174, 1)"
                : "#ffffffde"
            : "#ffffffde",

        "@media (max-width: 1024px)": {
          maxWidth: "448px",
          minWidth: "0аа",
          color: "#888",
          margin: "0 auto",
          border: "none",
          borderRadius: "12px",
          background: "#1b1b1b",
        },
      }}
    >
      <Grid
        sx={{
          width: "140px",
          height: "140px",
          "@media (min-width: 1025px)": {
            display: "none",
          },
        }}
      >
        <img
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
          src={"src/assets/HouseCardImage.jpg"}
          alt="HouseCardImage"
        />
      </Grid>
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: size === "small" ? "12px 28px" : "8px 24px",
          "@media (max-width: 1024px)": {
            padding: "16px",
            flexWrap: "wrap",
            width: "unset",
          },
        }}
      >
        <Grid
          sx={{
            borderRight: "1px solid #404040",
            paddingRight: "24px",
            "@media (max-width: 1024px)": {
              width: "100%",
              borderRight: "none",
            },
          }}
        >
          <Typography
            component="span"
            sx={{
              fontSize: size === "small" ? "10px" : "14px",
              mb: "4px",
              textTransform: "uppercase",
              fontFamily: "Inter",
              display: size === "small" ? "inline-block" : "none",
            }}
          >
            {language === "eng" && "House"}
            {language === "pl" && "Dom"}
            {language === "esp" && "Casa"}
            {language === "pt" && "Casa"}
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontFamily: "Inter",
              fontSize: size === "small" ? "16px" : "34px",
              "@media (max-width: 1024px)": {
                fontSize: "20px",
                fontWeight: "600",
                color: sold ? "#888" : "#EAEAEA",
              },
            }}
          >
            {houseNumber}
          </Typography>
        </Grid>
        <Grid>
          <Typography
            component="span"
            sx={{
              fontSize: size === "small" ? "10px" : "14px",
              mb: "4px",
              textTransform: "uppercase",
              fontFamily: "Inter",
            }}
          >
            {language === "eng" && "Plot, M²"}
            {language === "pl" && "Działka, M²"}
            {language === "esp" && "Parcela, M²"}
            {language === "pt" && "Lote, M²"}
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontFamily: "Inter",
              "@media (max-width: 1024px)": {
                fontSize: "12px",
                color: sold ? "#888" : "#EAEAEA",
              },
            }}
          >
            {plot}
          </Typography>
        </Grid>
        <Grid>
          <Typography
            component="span"
            sx={{
              fontSize: size === "small" ? "10px" : "14px",
              mb: "4px",
              textTransform: "uppercase",
              fontFamily: "Inter",
            }}
          >
            {language === "eng" && "House, M²"}
            {language === "pl" && "Dom, M²"}
            {language === "esp" && "Casa, M²"}
            {language === "pt" && "Casa, M²"}
          </Typography>
          <Typography
            sx={{
              textTransform: "uppercase",
              fontFamily: "Inter",
              "@media (max-width: 1024px)": {
                fontSize: "12px",
                color: sold ? "#888" : "#EAEAEA",
              },
            }}
          >
            {house}
          </Typography>
        </Grid>
        <Grid>
          <Typography
            component="span"
            sx={{
              fontSize: size === "small" ? "10px" : "14px",
              mb: "4px",
              textTransform: "uppercase",
              fontFamily: "Inter",
            }}
          >
            {language === "eng" && "Price, EUR"}
            {language === "pl" && "Cena, PLN"}
            {language === "esp" && "Precio, EUR"}
            {language === "pt" && "Preço, BRL"}
          </Typography>
          {sold ? (
            <>
              <Grid
                sx={{
                  width: "80px",
                  display: "flex",
                  justifyContent: "center",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                  p: "3px 8px",
                  borderRadius: "4px",
                  backgroundColor: "#404040",
                  color: "#aeaeae",
                  textTransform: "uppercase",
                  "@media (max-width: 1024px)": {
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    width: "42px",
                    height: "24px",
                    fontSize: "10px",
                    p: "5px 8px",
                    opacity: "0.9",
                  },
                }}
              >
                Sold
              </Grid>
              <Typography
                sx={{
                  textTransform: "uppercase",
                  fontFamily: "Inter",
                  "@media (min-width: 1024px)": {
                    display: "none",
                  },
                  "@media (max-width: 1024px)": {
                    fontSize: "12px",
                    color: sold ? "#888" : "#EAEAEA",
                  },
                }}
              >
                {price}
              </Typography>
            </>
          ) : (
            <Typography
              sx={{
                textTransform: "uppercase",
                fontFamily: "Inter",
                "@media (max-width: 1024px)": {
                  fontSize: "12px",
                  color: sold ? "#888" : "#EAEAEA",
                },
              }}
            >
              {price}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HouseCard;
