import Grid from "@mui/material/Grid2";
import HouseCard from "./HouseCard.tsx";
import {IHouseShowing} from "../../../types/malinowskiTypes.ts";
import {Button, Link, styled, Typography} from "@mui/material";
import {WhiteButton} from "../../../ui/header/Header.tsx";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import houseA1 from "../../../assets/houseA-1.jpg";
import houseA2 from "../../../assets/houseA-2.jpg";
import houseA3 from "../../../assets/houseA-3.jpg";
import houseA4 from "../../../assets/houseA-4.jpg";
import houseA5 from "../../../assets/houseA-5.jpg";
import houseA6 from "../../../assets/houseA-6.jpg";
import gallery from "../../../assets/galery.jpg";

export const Title = styled(Typography)({
    color: "#aeaeae",
    fontSize: '10px',
    fontFamily: "Poppins",
    textTransform: "uppercase",
});

export const Title2 = styled(Typography)({
    color: "#fff",
    fontSize: '14px',
    fontFamily: "Poppins",
    textTransform: "uppercase",
    fontWeight: "bold",
    paddingBottom: '8px',
    borderBottom: "1px solid #fff"
});


export const Info = styled(Typography)({
    color: "#ffffffde",
    fontSize: '16px',
    fontFamily: "Inter",
});

const HouseShowing:React.FC<IHouseShowing> = ({
                                          houseNumber,
                                          plot,
                                          house,
                                          price,
                                          sold,
                                          language,
    setShowHouse,
    video,
    nowVideo,
    setVideo

                                      })=>{
    return(
        <>
            <Grid sx={{
                width: '520px',
            }}  >
                <Grid sx={{
                    py: "15px"
                }}>
                    <Button variant={"text"} onClick={()=> {
                        setVideo(video.back);
                        setShowHouse({
                            houseNumber: '',
                            plot: '',
                            house: '',
                            price: '',
                            sold: true,
                            language: '',
                            video: {
                                back: '',
                                exterior1_1: '',
                                exterior1_2: '',
                                exterior1_3: '',
                                exterior1_4: '',
                                exterior2_1: '',
                                exterior2_2: '',
                                exterior3_1: '',
                                exterior3_2: '',
                                exterior4_1: '',
                                exterior4_2: '',
                                interior1_1: '',
                                interior1_2: '',
                                interior2_1: '',
                                interior2_2: '',
                            }
                        })
                    }} sx={{
                        textTransform: 'uppercase',
                        fontWeight: "600",
                        fontSize: "14px",
                        fontFamily: "Poppins",
                        color: '#fff',
                        p: 0,
                        width: '155px',
                        height: '38px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Grid className="arrow" sx={{
                            width: '36px',
                            height: '36px',
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '9999px',
                            transition: '0.5s',
                            "&:hover":{
                                width: '38px',
                                height: '38px',
                            }
                        }}>
                            <ArrowBackIcon sx={{
                                fontSize: "14px",
                                color: '#000',
                            }}/>
                        </Grid>
                        To house list
                    </Button>
                </Grid>
                <HouseCard houseNumber={houseNumber} plot={plot} house={house} price={price} sold={sold} language={language} size="big"/>
                <Grid sx={{
                    mt: 0.5,
                    width: "100%",
                    background: "rgba(0, 0, 0, 0.3)",
                    borderRadius: "8px",
                    border: "1px solid #404040",
                    padding:  "8px 16px",
                    opacity: sold ? "0.6" : "1",
                }}>
                    <Grid sx={{
                        display: "flex",
                    }}>
                        <Grid sx={{
                            minWidth: "97px",
                            padding: "20px 32px 0 0",
                        }}>
                            <Title>
                                {language === "eng" && "Date"}
                                {language === "pl" && "Termin"}
                                {language === "esp" && "Fecha"}
                                {language === "pt" && "Data"}
                            </Title>
                            <Info sx={{
                                "@media (min-width: 1024px)":{
                                    fontSize: "18px",
                                }
                            }}>
                                3Q/2023
                            </Info>
                        </Grid>
                        <Grid sx={{
                            padding: "12px 16px 12px 24px",
                            display: 'flex',
                            flexWrap: "wrap",
                            gap: '16px 12px',
                            "& > div":{
                                width: "108px",
                            }
                        }}>
                            <Grid>
                                <Title>
                                    {language === "eng" && "Kitchen"}
                                    {language === "pl" && "Kuchnia"}
                                    {language === "esp" && "Cocina"}
                                    {language === "pt" && "Kitchen"}
                                </Title>
                                <Info>
                                    7 м²
                                </Info>
                            </Grid>
                            <Grid>
                                <Title>
                                    {language === "eng" && "Garage"}
                                    {language === "pl" && "Garaż"}
                                    {language === "esp" && "Cochera"}
                                    {language === "pt" && "Garage"}
                                </Title>
                                <Info>
                                    7 м²
                                </Info>
                            </Grid>
                            <Grid>
                                <Title>
                                    {language === "eng" && "Living room"}
                                    {language === "pl" && "Pokój Gościnny"}
                                    {language === "esp" && "Sala de estar"}
                                    {language === "pt" && "Living room"}
                                </Title>
                                <Info>
                                    7 м²
                                </Info>
                            </Grid>
                            <Grid>
                                <Title>
                                    {language === "eng" && "Bedroom 1"}
                                    {language === "pl" && "Sypialnia 1"}
                                    {language === "esp" && "Dormitorio 1"}
                                    {language === "pt" && "Bedroom 1"}
                                </Title>
                                <Info>
                                    7 м²
                                </Info>
                            </Grid>
                            <Grid>
                                <Title>
                                    {language === "eng" && "Bedroom 2"}
                                    {language === "pl" && "Sypialnia 2"}
                                    {language === "esp" && "Dormitorio 2"}
                                    {language === "pt" && "Bedroom 2"}
                                </Title>
                                <Info>
                                    7 м²
                                </Info>
                            </Grid>
                            <Grid>
                                <Title>
                                    {language === "eng" && "Wardrobe"}
                                    {language === "pl" && "Garderoba"}
                                    {language === "esp" && "Armario"}
                                    {language === "pt" && "Wardrobe"}
                                </Title>
                                <Info>
                                    7 м²
                                </Info>
                            </Grid>
                            <Grid>
                                <Title>
                                    {language === "eng" && "Cabinet"}
                                    {language === "pl" && "Gabinet"}
                                    {language === "esp" && "Gabinete"}
                                    {language === "pt" && "Cabinet"}
                                </Title>
                                <Info>
                                    7 м²
                                </Info>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sx={{
                        display: "flex",
                        padding: '8px 0 12px',
                        justifyContent: 'space-between',
                        borderTop: '1px solid #333',
                    }}>
                        <Grid>
                            <Title>
                                {language === "eng" && "House documentation"}
                                {language === "pl" && "Dokumentacja domu"}
                                {language === "esp" && "Documentación de la casa"}
                                {language === "pt" && "Documentação da casa"}
                            </Title>
                            <Link style={{
                                color: "#ffffffde",
                                fontFamily: "Inter",
                                fontSize: "12px",
                                textTransform: "uppercase",
                                textDecoration: 'none',
                            }} href={sold? undefined : "https://api.malinowskiego.com/uploads/house_a_0475b53b22.pdf"}>
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
            <Grid sx={{
                position: 'absolute',
                bottom: "24px",
                left: "50%",
                transform:  "translate(-50%, 0)",
                display: 'flex',
                gap: '16px',
            }}>
              <Button>
                  <ArrowBackIosIcon></ArrowBackIosIcon>
              </Button>
                <Grid sx={{
                    width: '273px',
                }}>
                    <Title2 variant="h5">
                        {language === "eng" && "Exterior"}
                        {language === "pl" && "Otoczenie"}
                        {language === "esp" && "Exterior"}
                        {language === "pt" && "Exterior"}
                    </Title2>
                    <Grid sx={{
                        display: 'flex',
                        gap: '10px',
                        marginTop: '8px',
                    }}>
                        <Grid sx={{
                            width: "65px",
                            height: '65px',
                            borderWidth: "1px",
                            borderColor: 'transparent',
                            borderStyle: "solid",
                            cursor: "pointer",
                            borderRadius: '6px',
                            overflow: 'hidden',
                        }}>
                            <img src={houseA1} width="100%" height="100%" alt="house"/>
                        </Grid>
                        <Grid sx={{
                            width: "65px",
                            height: '65px',
                            borderWidth: "1px",
                            borderColor: 'transparent',
                            borderStyle: "solid",
                            cursor: "pointer",
                            borderRadius: '6px',
                            overflow: 'hidden',
                        }}>
                            <img src={houseA2} width="100%" height="100%" alt="house"/>
                        </Grid>
                        <Grid sx={{
                            width: "65px",
                            height: '65px',
                            borderWidth: "1px",
                            borderColor: 'transparent',
                            borderStyle: "solid",
                            cursor: "pointer",
                            borderRadius: '6px',
                            overflow: 'hidden',
                        }}>
                            <img src={houseA3} width="100%" height="100%" alt="house"/>
                        </Grid>
                        <Grid sx={{
                            width: "65px",
                            height: '65px',
                            borderWidth: "1px",
                            borderColor: 'transparent',
                            borderStyle: "solid",
                            cursor: "pointer",
                            borderRadius: '6px',
                            overflow: 'hidden',
                        }}>
                            <img src={houseA4} width="100%" height="100%" alt="house"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{
                    width: '140px',
                }}>
                    <Title2 variant="h5" sx={{
                        color: "#fff",
                        fontWeight: "bold",
                    }}>
                        {language === "eng" && "Interior"}
                        {language === "pl" && "Wnętrze"}
                        {language === "esp" && "Interior"}
                        {language === "pt" && "Interior"}
                    </Title2>
                    <Grid sx={{
                        display: 'flex',
                        gap: '10px',
                        marginTop: '8px',
                    }}>
                        <Grid sx={{
                            width: "65px",
                            height: '65px',
                            borderWidth: "1px",
                            borderColor: 'transparent',
                            borderStyle: "solid",
                            cursor: "pointer",
                            borderRadius: '6px',
                            overflow: 'hidden',
                        }}>
                            <img src={houseA5} width="100%" height="100%" alt="house"/>
                        </Grid>
                        <Grid sx={{
                            width: "65px",
                            height: '65px',
                            borderWidth: "1px",
                            borderColor: 'transparent',
                            borderStyle: "solid",
                            cursor: "pointer",
                            borderRadius: '6px',
                            overflow: 'hidden',
                        }}>
                            <img src={houseA6} width="100%" height="100%" alt="house"/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid>
                    <Title2 variant="h5" sx={{
                        color: "#fff",
                        fontWeight: "bold",
                    }}>
                        {language === "eng" && "Gallery"}
                        {language === "pl" && "Galeria"}
                        {language === "esp" && "Galería"}
                        {language === "pt" && "Gallery"}
                    </Title2>
                    <Grid sx={{
                        width: "65px",
                        height: '65px',
                        borderWidth: "1px",
                        borderColor: 'transparent',
                        borderStyle: "solid",
                        cursor: "pointer",
                        borderRadius: '6px',
                        overflow: 'hidden',
                        marginTop: '8px',
                    }}>
                        <img src={gallery} width="100%" height="100%" alt="house"/>
                    </Grid>
                </Grid>
                <Button>
                    <ArrowForwardIosIcon></ArrowForwardIosIcon>
                </Button>
            </Grid>
        </>
    );
};

export default HouseShowing;