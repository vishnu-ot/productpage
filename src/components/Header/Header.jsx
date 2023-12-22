import {
  AppBar,
  styled,
  Box,
  Typography,
  IconButton,
  InputBase,
  Button,
} from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
function Header() {
  const StyledIconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // margin: theme.spacing(0, 5),
    [theme.breakpoints.down(`sm`)]: {
      display: `none`,
    },
  }));
  const StyledTypography = styled(Typography)(({ theme }) => ({
    cursor: "default",
  }));
  const StyledToolbar = styled(Box)(({ theme }) => ({
    cursor: "default",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "red",
    cursor: "default",
    height: "40px",

    "& .MuiInputBase-input": {
      // padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    height: "40px",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(0, 1),
    cursor: "default",
  }));

  const StyledLogo = styled(Box)(({ theme }) => ({
    display: "none",
    backgroundColor: "",
    width: "45px",
    height: "40px",
    [theme.breakpoints.down(`sm`)]: {
      display: `block`,
    },
  }));
  const StyledSearchBox = styled(Box)(({ theme }) => ({
    minWidth: "50%",
    height: "40px",
    backgroundColor: "#DDA0DD",
    cursor: "default",
    [theme.breakpoints.down(`sm`)]: {
      minWidth: "100%",
    },
  }));
  const StyledButton = styled(Button)(({ theme }) => ({
    variant: "contained",
    // backgroundColor: "white",
    color: "black",
    "&:hover": {
      backgroundColor: "#0275d8",
      boxShadow: "none",
    },
    [theme.breakpoints.down(`sm`)]: {
      display: "none",
    },
  }));

  return (
    <AppBar sx={{ color: "red", backgroundColor: "white" }}>
      <StyledToolbar>
        <Box>
          <StyledTypography
            minWidth="200px"
            variant="h5"
            color="#DDA0DD"
            sx={{
              // marginRight: "50px",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            Mobile Kings
          </StyledTypography>
          <StyledLogo>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </StyledLogo>
        </Box>

        <StyledSearchBox>
          <SearchIconWrapper>
            <SearchIcon fontSize="medium" />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" fullWidth size="medium" />
        </StyledSearchBox>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ marginLeft: "30px" }}>
            <StyledButton
              startIcon={<AccountCircleIcon />}
              endIcon={<ExpandLessIcon />}
            >
              Login
            </StyledButton>
          </Box>
          <StyledIconBox>
            <IconButton>
              <ShoppingCartCheckoutIcon fontSize="large" />
            </IconButton>
            <StyledTypography variant="span">Cart</StyledTypography>
          </StyledIconBox>
          <StyledIconBox>
            <IconButton>
              <StorefrontIcon fontSize="large" />
            </IconButton>
            <StyledTypography variant="span">Become a seller</StyledTypography>
          </StyledIconBox>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;
