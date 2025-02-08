import Grid from "@mui/material/Grid2";
import {Typography} from "@mui/material";
import {IHouseCard} from "../../../types/malinowskiTypes.ts";

const HouseCard: React.FC<IHouseCard> = ({
  houseNumber,
  house,
  sold,
  price,
  plot,
  language, isHovered, setIsHovered,
    setVideo,
    video,
                                        size,
    setShowHouse,
    allVideo,
}) => {
  return (
    <Grid
        onClick={()=> {
            if(setVideo && video && setShowHouse && allVideo){
                setShowHouse({
                    houseNumber: houseNumber,
                    plot: plot,
                    house: house,
                    price: price,
                    sold: sold,
                    language: language,
                    video: allVideo,
                });
                setVideo(video);
            }
        }}
        onMouseEnter={() => {
            if (setIsHovered){
                setIsHovered(houseNumber);
            }
        }}
        onMouseLeave={() => {
            if (setIsHovered){
                setIsHovered('');
            }
        }}
      sx={{
        width: "100%",
        background: isHovered === houseNumber ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.3)",
        borderRadius: "8px",
        transform: "translate(scaleX(1) scaleY(1))",
        cursor: size === "small" ? "pointer" : "default",
        border: "1px solid #404040",
        padding: size === "small" ? "12px 28px" : "8px 24px",
        transitionProperty:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "300ms",
        color: size === "small" ? (isHovered === houseNumber ?  (sold ? "rgba(174, 174, 174, 1)" : "#000") : (sold ? "rgba(174, 174, 174, 1)" : "#ffffffde")) : "#ffffffde",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Grid
        sx={{
          borderRight: "1px solid #404040",
          paddingRight: "24px",
        }}
      >
        <Typography
          component="span"
          sx={{
            fontSize: size === "small" ? "10px" : "14px",
            mb: "4px",
            textTransform: "uppercase",
            fontFamily: "Inter",
              display: size === "small" ? "inline-block" : "none"
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
            }}
          >
            Sold
          </Grid>
        ) : (
          <Typography
            sx={{
              textTransform: "uppercase",
              fontFamily: "Inter",
            }}
          >
            {price}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default HouseCard;
