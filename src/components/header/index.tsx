import { AppBar, Box, MenuItem, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";
import { NavLink } from "react-router-dom";

interface Props {
  isAuthenticated: boolean;
  setIsAuthenticated: Function;
}

const Header = ({ isAuthenticated, setIsAuthenticated }: Props) => {
  const { t, i18n } = useTranslation();

  return (
    <AppBar
      position="absolute"
      sx={{ top: 0, bottom: "auto", backgroundColor: "#3b438b" }}
    >
      <Box
        className="header"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        margin="0 1em"
      >
        <Box display="flex" alignItems="center">
          <img
            src="/assets/logo.png"
            alt=""
            style={{ width: "10em" }}
          />
          <Typography variant="h1" sx={{ marginLeft: "1em" }}>
            {t("common.Chez Mario")}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center">
          <NavLink to="/">{t("Our pizzas")}</NavLink>
          <MenuItem>
            <NavLink to={"/pizzaL/"}>Pizza</NavLink>
          </MenuItem>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
