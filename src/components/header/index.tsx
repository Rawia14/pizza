import { AppBar, Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";


const Header= () => {
    const { t, i18n } = useTranslation();
  return (
    <AppBar position="static">
        <Box className="header"  display="flex" alignItems="center" 
        margin="0 1em">
          <img src="/assets/logo.png" alt="" style={{ width: "6.5em" }} />
          <Typography variant="h1" className="h1" style={{ textAlign: "center" }}>Chez Mario</Typography>
        </Box>
      </AppBar>
  );
};

export default Header;
