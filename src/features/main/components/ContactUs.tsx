import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import {
  Container,
  Link,
  styled,
  Typography,
  Button,
  Snackbar,
  Alert,
  Box,
} from "@mui/material";
import FileInput from "../../../ui/FileInput/FileInput";
import DeleteIcon from "@mui/icons-material/Delete";

interface Props {
  language: string;
}

export const Title = styled(Typography)({
  fontFamily: "Poppins",
  color: "#888",
  marginBottom: "10px",
  fontWeight: "300",
  textTransform: "uppercase",
});
const ContactUsPage: React.FC<Props> = ({ language }) => {
  const [state, setState] = useState<{
    name: string;
    email: string;
    message: string;
    file: File[];
  }>({
    name: "",
    email: "",
    message: "",
    file: [],
  });
  const [open, setOpen] = useState({
    open: false,
    type: "",
    message: "",
  });
  const handleClick = () => {
    if (state.email.includes("@") && state.email.includes(".")) {
      setOpen({
        open: true,
        type: "success",
        message: "Your message was sent successfully",
      });
    } else {
      setOpen({
        open: true,
        type: "error",
        message: "Email you provided is invalid",
      });
    }
  };
  const handleClose = () => {
    setOpen({
      open: false,
      type: "",
      message: "",
    });
  };

  const [helperText, setHelperText] = useState(false);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      state.name.trim() === "" ||
      state.email.trim() === "" ||
      state.message.trim() === ""
    ) {
      setHelperText(true);
    } else if (open.type === "success") {
      console.log(state);
      setState({
        name: "",
        email: "",
        message: "",
        file: [],
      });
    }
  };

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fileInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { files } = event.target;
    if (files && files[0]) {
      const file = state.file;
      file.push(files[0]);
      setState((prevState) => ({
        ...prevState,
        file: file,
      }));
    }
  };

  const [bgColor, setBgColor] = useState("#0f0f0f");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "contactUs") {
              setBgColor("#eaeaea");
            }
          } else {
            if (entry.target.id === "contactUs") {
              setBgColor("#0f0f0f");
            }
          }
        });
      },
      { threshold: 0.3 },
    );

    const contactUs = document.getElementById("contactUs");

    if (contactUs) observer.observe(contactUs);

    return () => {
      if (contactUs) observer.unobserve(contactUs);
    };
  }, []);

  const linkStyle = {
    fontFamily: "Poppins",
    fontSize: "28px",
    fontWeight: "600",
    color: "#333",
    textDecoration: "none",
    "@media (min-width: 1536px)": {
      fontSize: "34px",
    },
  };

  const styleButton = {
    minWidth: "250px",
    width: "100%",
    height: "60px",
    backgroundColor: "#333",
    color: "#e3e3e3",
    fontWeight: "bold",
    fontSize: "14px",
    borderRadius: "30px",
    "@media (min-width: 1536px)": {
      fontSize: "16px",
    },
  };
  return (
    <>
      <Grid
        id={"contactUs"}
        sx={{
          padding: "192px 0",
          backgroundColor: bgColor,
          color: bgColor === "#0f0f0f" ? "#eaeaea" : "#0f0f0f",
          transition: "2s",
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
          <Snackbar
            autoHideDuration={5000}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open.open}
            onClose={handleClose}
            message="I love snacks"
            sx={{
              width: "312px",
            }}
          >
            <Box sx={{ position: "relative", width: "100%" }}>
              <Alert
                severity={open.type === "error" ? "warning" : "success"}
                variant="filled"
                onClose={handleClose}
                sx={{
                  padding: "12px 8px",
                  backgroundColor: "#040316",
                  fontSize: "16px",
                  "& > div > button": {
                    position: "absolute",
                    top: 1,
                    right: 1,
                    fontSize: "16px",
                    color: "#262626",
                  },
                }}
              >
                {open.message}
              </Alert>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  height: 4,
                  width: open ? "0%" : "100%",
                  backgroundColor:
                    open.type === "error" ? "#E91E63" : "#008000",
                  animationName: "timeLine",
                  animationDuration: "5s",
                  animationDelay: "0s",
                }}
              />
            </Box>
          </Snackbar>
          <Typography
            variant="h3"
            sx={{
              fontSize: "48px",
              fontWeight: "600",
              fontFamily: "Poppins",
              marginBottom: "40px",

              "@media (min-width: 1024px)": {
                fontSize: "54px",
                marginBottom: "60px",
              },
            }}
          >
            {language === "eng" && "Let's talk!"}
            {language === "pl" && "Skontaktuj się z nami"}
            {language === "esp" && "¡Hablemos!"}
            {language === "pt" && "Vamos conversar!"}
          </Typography>
          <Grid
            onSubmit={onSubmit}
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Grid
              sx={{
                width: "100%",
                "@media (min-width: 1024px)": {
                  width: "50%",
                },
              }}
            >
              <Title
                sx={{
                  marginBottom: "16px",
                }}
              >
                {language === "eng" && "send the email"}
                {language === "pl" && "wyślij e-mail"}
                {language === "esp" && "enviar el correo electrónico"}
                {language === "pt" && "enviar o e-mail"}
              </Title>
              <Grid component={"form"}>
                <Grid
                  sx={{
                    marginBottom: "38px",
                    position: "relative",
                    "&::after": {
                      content: '"Please fill out this field"',
                      position: "absolute",
                      display:
                        helperText && state.name.trim() === ""
                          ? "block"
                          : "none",
                      top: "50px",
                      left: "0",
                      fontSize: "10px",
                      fontFamily: "Inter, italic",
                      transitionProperty: "all",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "300ms",
                      color: "#161616",
                    },
                  }}
                >
                  <input
                    type="text"
                    onChange={inputChangeHandler}
                    name={"name"}
                    value={state.name}
                    placeholder={`${language === "eng" ? "Name" : ""}${language === "pl" ? "Imię" : ""}${language === "esp" ? "Nombre" : ""}${language === "pt" ? "Nome" : ""}`}
                    className="form-input"
                  />
                </Grid>
                <Grid
                  sx={{
                    marginBottom: "38px",
                    position: "relative",
                    "&::after": {
                      content: '"Please fill out this field"',
                      position: "absolute",
                      display:
                        helperText && state.email.trim() === ""
                          ? "block"
                          : "none",
                      top: "50px",
                      left: "0",
                      fontSize: "10px",
                      fontFamily: "Inter, italic",
                      transitionProperty: "all",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "300ms",
                      color: "#161616",
                    },
                  }}
                >
                  <input
                    type="text"
                    onChange={inputChangeHandler}
                    value={state.email}
                    name={"email"}
                    placeholder={"Email"}
                    className="form-input"
                  />
                </Grid>
                <Grid
                  sx={{
                    position: "relative",
                    "&::after": {
                      content: '"Please fill out this field"',
                      position: "absolute",
                      display:
                        helperText && state.message.trim() === ""
                          ? "block"
                          : "none",
                      top: "50px",
                      left: "0",
                      fontSize: "10px",
                      fontFamily: "Inter, italic",
                      transitionProperty: "all",
                      transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      transitionDuration: "300ms",
                      color: "#161616",
                    },
                  }}
                >
                  <input
                    type="text"
                    onChange={inputChangeHandler}
                    name={"message"}
                    value={state.message}
                    placeholder={`${language === "eng" ? "Tell us about your project" : ""}${language === "pl" ? "Opowiedz nam o swoim projekcie" : ""}${language === "esp" ? "Cuéntanos sobre tu proyecto" : ""}${language === "pt" ? "Conte-nos sobre seu projeto" : ""}`}
                    className="form-input"
                  />
                </Grid>
                <Grid
                  sx={{
                    marginTop: "40px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <FileInput
                    onChange={fileInputChangeHandler}
                    name={"message"}
                    language={language}
                  ></FileInput>
                  <Grid>
                    {state.file.map((file, index) => {
                      return (
                        <Grid
                          key={index}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "end",
                            gap: "10px",
                          }}
                        >
                          <Typography
                            component={"span"}
                            sx={{
                              color: "#333",
                              fontFamily: "Inter",
                              fontSize: "10px",
                            }}
                          >
                            {`${file.name}(${String(file.size / 1000000).slice(0, 3)}mb)`}
                          </Typography>
                          <Button
                            onClick={() => {
                              let files = state.file;
                              if (files.length < 2) {
                                files = [];
                              } else {
                                files.splice(index, 1);
                              }
                              console.log(files);
                              setState((prev) => ({
                                ...prev,
                                file: files,
                              }));
                            }}
                            variant={"text"}
                            sx={{
                              color: "#333",
                              minWidth: "30px",
                              minHeight: "30px",
                              transition: "1s",
                              "&:hover": {
                                color: "#fff",
                                backgroundColor: "#333",
                              },
                            }}
                          >
                            <DeleteIcon></DeleteIcon>
                          </Button>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    gap: "20px",
                    marginTop: "40px",
                  }}
                >
                  <Button
                    onClick={() => {
                      if (
                        state.name.trim() !== "" &&
                        state.email.trim() !== "" &&
                        state.message.trim() !== ""
                      ) {
                        handleClick();
                      }
                    }}
                    type="submit"
                    sx={{
                      ...styleButton,
                    }}
                  >
                    Send
                  </Button>
                  <Button
                    sx={{
                      ...styleButton,
                      backgroundColor: "transparent",
                      color: "#333",
                      border: "1px solid #333",
                    }}
                  >
                    Book a call
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              sx={{
                width: "100%",
                "@media (min-width: 1024px)": {
                  width: "50%",
                  paddingLeft: "80px",
                },
              }}
            >
              <Grid
                sx={{
                  paddingLeft: "32px",
                  borderLeft: "1px solid #d1d1d1",
                }}
              >
                <Title>
                  {language === "eng" && "Write us"}
                  {language === "pl" && "Napisz do nas"}
                  {language === "esp" && "Escríbenos"}
                  {language === "pt" && "Escreva-nos"}
                </Title>
                <Link href={"mailto:contact@prographers.com"} sx={linkStyle}>
                  contact@prographers.com
                </Link>
                <Title
                  sx={{
                    marginTop: "40px",
                  }}
                >
                  {language === "eng" && "Write us"}
                  {language === "pl" && "Napisz do nas"}
                  {language === "esp" && "Escríbenos"}
                  {language === "pt" && "Escreva-nos"}
                </Title>
                <Link href={"tel:+48692223170"} sx={linkStyle}>
                  (+48) 692 223 170
                </Link>
                <Title
                  sx={{
                    marginTop: "40px",
                  }}
                >
                  {language === "eng" && "Write us"}
                  {language === "pl" && "Napisz do nas"}
                  {language === "esp" && "Escríbenos"}
                  {language === "pt" && "Escreva-nos"}
                </Title>
                <Link
                  href={"https://goo.gl/maps/AaVh8twf28wZme9b7"}
                  sx={linkStyle}
                >
                  {language === "eng" && "05-420, Józefów, Tadeusza 22 Poland"}
                  {language === "pl" && "05-420, Józefów, Tadeusza 22"}
                  {language === "esp" && "05-420, Józefów, Tadeusza 22 Polonia"}
                  {language === "pt" && "05-420, Józefów, Tadeusza 22 Polônia"}
                </Link>
              </Grid>
              <Typography
                sx={{
                  marginTop: "64px",
                  display: "none",
                  color: "#333",
                  fontFamily: "Inter",
                  fontSize: "10px",
                  fontWeight: "300",

                  "@media (min-width: 768px)": {
                    display: "block",
                  },
                }}
              >
                {language === "eng" &&
                  "I agree that my data in this form will be sent to contact@prographers.com and will be read by human beings. We will answer you as soon as possible. If you sent this form by mistake or want to remove your data, you can let us know by sending an email to contact@prographers.com. We will never send you any spam or share your data with third parties."}
                {language === "pl" &&
                  "Zgadzam się, aby moje dane z tego formularza zostały wysłane do kontakt@kamienmilowy.pl i zostały przeczytane przez ludzi. Odpowiemy Ci jak najszybciej. Jeśli wysłałeś ten formularz przez pomyłkę lub chcesz usunąć swoje dane, możesz nas o tym poinformować, wysyłając e-mail na adres contact@prographers.com. Nigdy nie wyślemy Ci spamu ani nie udostępnimy Twoich danych osobowych osobom trzecim."}
                {language === "esp" &&
                  "Acepto que mis datos en este formulario se enviarán a contact@prographers.com y serán leídos por seres humanos. Te responderemos lo más pronto posible. Si enviaste este formulario por error o quieres eliminar tus datos, puedes informarnos enviando un correo electrónico a contact@prographers.com. Nunca te enviaremos spam ni compartiremos tus datos con terceros."}
                {language === "pt" &&
                  "Concordo que meus dados neste formulário sejam enviados para contact@prographers.com e serão lidos por seres humanos. Responderemos o mais breve possível. Se você enviou este formulário por engano ou deseja para remover seus dados, você pode nos avisar enviando um e-mail para contact@prographers.com. Nunca lhe enviaremos spam ou compartilharemos seus dados com terceiros."}
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default ContactUsPage;
