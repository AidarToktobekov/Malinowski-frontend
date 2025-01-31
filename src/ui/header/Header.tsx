import {
  AppBar,
  Button,
  Container,
  Link,
  Popover,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const StyledLink = styled(Link)({
  position: "relative",
  color: "white",
  textDecoration: "none",
  cursor: "pointer",
  padding: "16px",
  fontWeight: "600",
  "&::after": {
    content: '""',
    position: "absolute",
    height: "1px",
    width: "85%",
    backgroundColor: "rgb(255, 255, 255)",
    transform: "scaleX(0)",
    transition: "transform 0.1s ease-in",
    left: "6%",
    bottom: "10px",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
  },
});

export const StyledButton = styled(Button)({
  color: "#000",
  cursor: "pointer",
  padding: "12px 20px",
  fontWeight: "600",
  fontSize: "14px",
  border: "none",
  borderRadius: "9999px",
  width: "100%",
  textTransform: "none",
  fontFamily: "Poppins",
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
});

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <AppBar position="sticky" color="inherit" sx={{ boxShadow: "none" }}>
        <Toolbar>
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
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Link sx={{ width: "125px", display: "block" }} href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 99 34"
                  fill="none"
                >
                  <path
                    d="M8.31392 9.13636C8.31392 10.0455 8.15199 10.8366 7.82812 11.5099C7.50426 12.1804 7.05824 12.7003 6.49006 13.0696C5.92472 13.4361 5.27415 13.6193 4.53835 13.6193C3.80256 13.6193 3.15057 13.4361 2.58239 13.0696C2.01705 12.7003 1.57244 12.1804 1.24858 11.5099C0.927557 10.8366 0.767045 10.0455 0.767045 9.13636C0.767045 8.22727 0.927557 7.4375 1.24858 6.76705C1.57244 6.09375 2.01847 5.57386 2.58665 5.20739C3.15483 4.83807 3.8054 4.65341 4.53835 4.65341C5.27415 4.65341 5.92472 4.83807 6.49006 5.20739C7.05824 5.57386 7.50426 6.09375 7.82812 6.76705C8.15199 7.4375 8.31392 8.22727 8.31392 9.13636ZM7.53835 9.13636C7.53835 8.35511 7.40767 7.68608 7.14631 7.12926C6.88494 6.5696 6.52841 6.14205 6.0767 5.84659C5.625 5.55114 5.11222 5.40341 4.53835 5.40341C3.96733 5.40341 3.45597 5.55114 3.00426 5.84659C2.55256 6.14205 2.1946 6.56818 1.9304 7.125C1.66903 7.68182 1.53835 8.35227 1.53835 9.13636C1.53835 9.91761 1.66903 10.5866 1.9304 11.1435C2.19176 11.7003 2.5483 12.1278 3 12.4261C3.4517 12.7216 3.96449 12.8693 4.53835 12.8693C5.11222 12.8693 5.625 12.7216 6.0767 12.4261C6.53125 12.1307 6.8892 11.7045 7.15057 11.1477C7.41193 10.5881 7.54119 9.91761 7.53835 9.13636ZM14.3798 6.95455C14.3315 6.46875 14.117 6.08239 13.7363 5.79545C13.3556 5.50852 12.8769 5.36506 12.3002 5.36506C11.894 5.36506 11.536 5.43466 11.2263 5.57386C10.9195 5.71307 10.6781 5.90625 10.5019 6.15341C10.3286 6.39773 10.242 6.67614 10.242 6.98864C10.242 7.21875 10.2917 7.42045 10.3911 7.59375C10.4906 7.76705 10.6241 7.91619 10.7917 8.04119C10.9621 8.16335 11.1496 8.26847 11.3542 8.35653C11.5616 8.4446 11.7704 8.51847 11.9806 8.57812L12.9011 8.84233C13.1795 8.91903 13.4579 9.01705 13.7363 9.13636C14.0147 9.25568 14.269 9.40625 14.4991 9.58807C14.732 9.76705 14.9181 9.98722 15.0573 10.2486C15.1994 10.5071 15.2704 10.8182 15.2704 11.1818C15.2704 11.6477 15.1496 12.0668 14.9082 12.4389C14.6667 12.8111 14.3201 13.1065 13.8684 13.3253C13.4167 13.5412 12.8755 13.6491 12.2448 13.6491C11.6511 13.6491 11.1354 13.5511 10.6979 13.3551C10.2604 13.1562 9.91669 12.8821 9.66669 12.5327C9.41669 12.1832 9.27606 11.7784 9.24481 11.3182H10.063C10.0914 11.6619 10.205 11.9531 10.4039 12.1918C10.6028 12.4304 10.8613 12.6122 11.1795 12.7372C11.4977 12.8594 11.8528 12.9205 12.2448 12.9205C12.6795 12.9205 13.0658 12.848 13.4039 12.7031C13.7448 12.5554 14.0119 12.3509 14.205 12.0895C14.4011 11.8253 14.4991 11.5185 14.4991 11.169C14.4991 10.8736 14.4224 10.6264 14.269 10.4276C14.1156 10.2259 13.9011 10.0568 13.6255 9.92045C13.3528 9.78409 13.036 9.66335 12.6752 9.55824L11.6312 9.25142C10.9465 9.04687 10.4153 8.7642 10.0374 8.40341C9.65959 8.04261 9.47067 7.58239 9.47067 7.02273C9.47067 6.55398 9.59567 6.14205 9.84567 5.78693C10.0985 5.42898 10.4394 5.15057 10.8684 4.9517C11.3002 4.75 11.7846 4.64915 12.3215 4.64915C12.8641 4.64915 13.3442 4.74858 13.7619 4.94744C14.1795 5.14631 14.5104 5.42045 14.7548 5.76989C15.0019 6.11648 15.134 6.51136 15.1511 6.95455H14.3798ZM17.3849 4.77273V13.5H16.588V4.77273H17.3849ZM19.1052 13.5V4.77273H24.1677V5.48864H19.9021V8.77415H23.8992V9.49006H19.9021V12.7841H24.2529V13.5H19.1052ZM28.187 13.5H25.6302V4.77273H28.3404C29.1728 4.77273 29.8844 4.94602 30.4754 5.29261C31.0691 5.6392 31.5237 6.13636 31.839 6.78409C32.1543 7.43182 32.312 8.20881 32.312 9.11506C32.312 10.0298 32.1501 10.8153 31.8262 11.4716C31.5052 12.125 31.0364 12.6264 30.42 12.9759C29.8063 13.3253 29.062 13.5 28.187 13.5ZM26.4271 12.7841H28.1401C28.8901 12.7841 29.518 12.6364 30.0237 12.3409C30.5293 12.0455 30.9086 11.6236 31.1614 11.0753C31.4143 10.527 31.5407 9.87358 31.5407 9.11506C31.5379 8.36222 31.4129 7.71449 31.1657 7.17188C30.9214 6.62926 30.5577 6.21307 30.0748 5.9233C29.5947 5.63352 29.0009 5.48864 28.2935 5.48864H26.4271V12.7841ZM33.6435 13.5V4.77273H34.4403V12.7841H38.5994V13.5H33.6435ZM39.7935 13.5V4.77273H44.856V5.48864H40.5903V8.77415H44.5875V9.49006H40.5903V12.7841H44.9412V13.5H39.7935ZM0.758523 21.7727H3.03409L5.4375 27.6364H5.53977L7.94318 21.7727H10.2188V30.5H8.42898V24.8196H8.35653L6.09801 30.4574H4.87926L2.62074 24.7983H2.5483V30.5H0.758523V21.7727ZM12.6433 30.5H10.666L13.6788 21.7727H16.0566L19.0651 30.5H17.0879L14.9018 23.767H14.8336L12.6433 30.5ZM12.5197 27.0696H17.1901V28.5099H12.5197V27.0696ZM19.5156 30.5V21.7727H21.3607V28.9787H25.1022V30.5H19.5156ZM27.5693 21.7727V30.5H25.7241V21.7727H27.5693ZM35.7871 21.7727V30.5H34.1934L30.3965 25.0071H30.3326V30.5H28.4874V21.7727H30.1067L33.8738 27.2614H33.9505V21.7727H35.7871ZM44.7315 26.1364C44.7315 27.0881 44.5511 27.8977 44.1903 28.5653C43.8324 29.233 43.3438 29.7429 42.7244 30.0952C42.108 30.4446 41.4148 30.6193 40.6449 30.6193C39.8693 30.6193 39.1733 30.4432 38.5568 30.0909C37.9403 29.7386 37.4531 29.2287 37.0952 28.5611C36.7372 27.8935 36.5582 27.0852 36.5582 26.1364C36.5582 25.1847 36.7372 24.375 37.0952 23.7074C37.4531 23.0398 37.9403 22.5312 38.5568 22.1818C39.1733 21.8295 39.8693 21.6534 40.6449 21.6534C41.4148 21.6534 42.108 21.8295 42.7244 22.1818C43.3438 22.5312 43.8324 23.0398 44.1903 23.7074C44.5511 24.375 44.7315 25.1847 44.7315 26.1364ZM42.8608 26.1364C42.8608 25.5199 42.7685 25 42.5838 24.5767C42.402 24.1534 42.1449 23.8324 41.8125 23.6136C41.4801 23.3949 41.0909 23.2855 40.6449 23.2855C40.1989 23.2855 39.8097 23.3949 39.4773 23.6136C39.1449 23.8324 38.8864 24.1534 38.7017 24.5767C38.5199 25 38.429 25.5199 38.429 26.1364C38.429 26.7528 38.5199 27.2727 38.7017 27.696C38.8864 28.1193 39.1449 28.4403 39.4773 28.6591C39.8097 28.8778 40.1989 28.9872 40.6449 28.9872C41.0909 28.9872 41.4801 28.8778 41.8125 28.6591C42.1449 28.4403 42.402 28.1193 42.5838 27.696C42.7685 27.2727 42.8608 26.7528 42.8608 26.1364ZM47.1347 30.5L44.6376 21.7727H46.6532L48.0978 27.8366H48.1702L49.764 21.7727H51.4898L53.0793 27.8494H53.156L54.6006 21.7727H56.6163L54.1191 30.5H52.3208L50.6589 24.794H50.5907L48.933 30.5H47.1347ZM61.6562 24.2827C61.6221 23.9389 61.4758 23.6719 61.2173 23.4815C60.9587 23.2912 60.6079 23.196 60.1647 23.196C59.8636 23.196 59.6093 23.2386 59.4019 23.3239C59.1945 23.4062 59.0354 23.5213 58.9246 23.669C58.8167 23.8168 58.7627 23.9844 58.7627 24.1719C58.757 24.3281 58.7897 24.4645 58.8607 24.581C58.9346 24.6974 59.0354 24.7983 59.1633 24.8835C59.2911 24.9659 59.4388 25.0384 59.6065 25.1009C59.7741 25.1605 59.9531 25.2116 60.1434 25.2543L60.9275 25.4418C61.3082 25.527 61.6576 25.6406 61.9758 25.7827C62.294 25.9247 62.5695 26.0994 62.8025 26.3068C63.0354 26.5142 63.2158 26.7585 63.3437 27.0398C63.4744 27.321 63.5411 27.6435 63.544 28.0071C63.5411 28.5412 63.4048 29.0043 63.1349 29.3963C62.8678 29.7855 62.4815 30.0881 61.9758 30.304C61.4729 30.517 60.8664 30.6236 60.1562 30.6236C59.4516 30.6236 58.838 30.5156 58.3153 30.2997C57.7954 30.0838 57.3891 29.7642 57.0965 29.3409C56.8067 28.9148 56.6548 28.3878 56.6406 27.7599H58.4261C58.446 28.0526 58.5298 28.2969 58.6775 28.4929C58.8281 28.6861 59.0283 28.8324 59.2783 28.9318C59.5312 29.0284 59.8167 29.0767 60.1349 29.0767C60.4474 29.0767 60.7187 29.0312 60.9488 28.9403C61.1817 28.8494 61.3621 28.723 61.49 28.5611C61.6178 28.3991 61.6817 28.2131 61.6817 28.0028C61.6817 27.8068 61.6235 27.642 61.507 27.5085C61.3934 27.375 61.2258 27.2614 61.0042 27.1676C60.7854 27.0739 60.517 26.9886 60.1988 26.9119L59.2485 26.6733C58.5127 26.4943 57.9317 26.2145 57.5056 25.8338C57.0795 25.4531 56.8678 24.9403 56.8707 24.2955C56.8678 23.767 57.0085 23.3054 57.2925 22.9105C57.5795 22.5156 57.9729 22.2074 58.4729 21.9858C58.9729 21.7642 59.5411 21.6534 60.1775 21.6534C60.8252 21.6534 61.3906 21.7642 61.8735 21.9858C62.3593 22.2074 62.7371 22.5156 63.007 22.9105C63.2769 23.3054 63.4161 23.7628 63.4246 24.2827H61.6562ZM64.1851 30.5V21.7727H66.0303V25.6207H66.1453L69.2859 21.7727H71.4976L68.2589 25.6804L71.5359 30.5H69.3286L66.9379 26.9119L66.0303 28.0199V30.5H64.1851ZM73.7037 21.7727V30.5H71.8585V21.7727H73.7037ZM74.6218 30.5V21.7727H80.5025V23.294H76.467V25.3736H80.1999V26.8949H76.467V28.9787H80.5195V30.5H74.6218ZM87.1564 24.5938C87.0967 24.3864 87.0129 24.2031 86.905 24.044C86.797 23.8821 86.6649 23.7457 86.5087 23.6349C86.3553 23.5213 86.1791 23.4347 85.9803 23.375C85.7842 23.3153 85.5669 23.2855 85.3283 23.2855C84.8822 23.2855 84.4902 23.3963 84.1521 23.6179C83.8169 23.8395 83.5555 24.1619 83.368 24.5852C83.1805 25.0057 83.0868 25.5199 83.0868 26.1278C83.0868 26.7358 83.1791 27.2528 83.3638 27.679C83.5484 28.1051 83.8098 28.4304 84.1479 28.6548C84.4859 28.8764 84.8851 28.9872 85.3453 28.9872C85.7629 28.9872 86.1195 28.9134 86.4149 28.7656C86.7132 28.6151 86.9405 28.4034 87.0967 28.1307C87.2558 27.858 87.3354 27.5355 87.3354 27.1634L87.7104 27.2188H85.4604V25.8295H89.1124V26.929C89.1124 27.696 88.9504 28.3551 88.6266 28.9062C88.3027 29.4545 87.8567 29.8778 87.2885 30.1761C86.7203 30.4716 86.0697 30.6193 85.3368 30.6193C84.5186 30.6193 83.7999 30.4389 83.1805 30.0781C82.5612 29.7145 82.0783 29.1989 81.7317 28.5312C81.3879 27.8608 81.2161 27.0653 81.2161 26.1449C81.2161 25.4375 81.3183 24.8068 81.5229 24.2528C81.7303 23.696 82.02 23.2244 82.3922 22.8381C82.7643 22.4517 83.1976 22.1577 83.6919 21.956C84.1862 21.7543 84.7217 21.6534 85.2984 21.6534C85.7928 21.6534 86.253 21.7259 86.6791 21.8707C87.1053 22.0128 87.4831 22.2145 87.8126 22.4759C88.145 22.7372 88.4163 23.0483 88.6266 23.4091C88.8368 23.767 88.9717 24.1619 89.0314 24.5938H87.1564ZM97.9183 26.1364C97.9183 27.0881 97.7379 27.8977 97.3771 28.5653C97.0191 29.233 96.5305 29.7429 95.9112 30.0952C95.2947 30.4446 94.6015 30.6193 93.8316 30.6193C93.056 30.6193 92.36 30.4432 91.7435 30.0909C91.1271 29.7386 90.6398 29.2287 90.2819 28.5611C89.9239 27.8935 89.745 27.0852 89.745 26.1364C89.745 25.1847 89.9239 24.375 90.2819 23.7074C90.6398 23.0398 91.1271 22.5312 91.7435 22.1818C92.36 21.8295 93.056 21.6534 93.8316 21.6534C94.6015 21.6534 95.2947 21.8295 95.9112 22.1818C96.5305 22.5312 97.0191 23.0398 97.3771 23.7074C97.7379 24.375 97.9183 25.1847 97.9183 26.1364ZM96.0475 26.1364C96.0475 25.5199 95.9552 25 95.7705 24.5767C95.5887 24.1534 95.3316 23.8324 94.9992 23.6136C94.6668 23.3949 94.2776 23.2855 93.8316 23.2855C93.3856 23.2855 92.9964 23.3949 92.664 23.6136C92.3316 23.8324 92.0731 24.1534 91.8884 24.5767C91.7066 25 91.6157 25.5199 91.6157 26.1364C91.6157 26.7528 91.7066 27.2727 91.8884 27.696C92.0731 28.1193 92.3316 28.4403 92.664 28.6591C92.9964 28.8778 93.3856 28.9872 93.8316 28.9872C94.2776 28.9872 94.6668 28.8778 94.9992 28.6591C95.3316 28.4403 95.5887 28.1193 95.7705 27.696C95.9552 27.2727 96.0475 26.7528 96.0475 26.1364Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <StyledLink>Segments</StyledLink>
                <StyledLink>Map</StyledLink>
                <StyledLink>Technology</StyledLink>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  gap: "12px",
                }}
              >
                <Button
                  variant="contained"
                  onClick={handleClick}
                  sx={{
                    borderRadius: "9999px",
                    py: 1,
                    px: 2,
                    border: "1px solid #fff",
                    boxShadow: "none",
                    backgroundColor: "inherit",
                    "&:hover": {
                      boxShadow: "none",
                      backgroundColor: "inherit",
                    },
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      fontFamily: "Poppins",
                      py: 0.5,
                      pr: 0.5,
                    }}
                  >
                    Eng
                  </Typography>
                  <KeyboardArrowDownIcon
                    sx={{
                      fontSize: "19px",
                      stroke: "currentColor",
                      strokeWidth: 1,
                    }}
                  />
                </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  sx={{
                    mt: 1,
                    "& .MuiPaper-root": {
                      borderRadius: "12px",
                      boxShadow: "none",
                      py: 2,
                      px: 1.5,
                      width: "163px",
                    },
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <StyledButton>English</StyledButton>
                  <StyledButton>Polski</StyledButton>
                  <StyledButton>Español</StyledButton>
                  <StyledButton>Português</StyledButton>
                </Popover>
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "9999px",
                    p: "12px 28px",
                    fontFamily: "Poppins",
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#000",
                    boxShadow: "none",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 1)",
                      boxShadow: "none",
                    },
                  }}
                >
                  Contact us
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
