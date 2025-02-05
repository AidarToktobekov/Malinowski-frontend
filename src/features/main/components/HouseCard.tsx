import Grid from "@mui/material/Grid2";
import { Typography } from "@mui/material";

interface Props {
  houseNumber: string;
  plot: string;
  house: string;
  price: string;
  sold: boolean;
  language: string;
}
const HouseCard: React.FC<Props> = ({
  houseNumber,
  house,
  sold,
  price,
  plot,
  language,
}) => {
  return (
    <Grid
      sx={{
        width: "370px",
        background: "rgba(0, 0, 0, 0.3)",
        borderRadius: "8px",
        transform: "translate(scaleX(1) scaleY(1))",
        cursor: "pointer",
        border: "1px solid #404040",
        padding: "12px 28px",
        transitionProperty:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDuration: "300ms",
        color: sold ? "rgba(174, 174, 174, 1)" : "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        "&:hover": {
          background: "rgba(255, 255, 255, 0.8)",
          color: sold ? "rgba(174, 174, 174, 1)" : "#000",
        },
      }}
    >
      <Grid
        sx={{
          width: "60px",
          borderRight: "1px solid #404040",
          paddingRight: "24px",
        }}
      >
        <Typography
          component="span"
          sx={{
            fontSize: "10px",
            mb: "4px",
            textTransform: "uppercase",
            fontFamily: "Inter",
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
          }}
        >
          {houseNumber}
        </Typography>
      </Grid>
      <Grid>
        <Typography
          component="span"
          sx={{
            fontSize: "10px",
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
            fontSize: "10px",
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
            fontSize: "10px",
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
