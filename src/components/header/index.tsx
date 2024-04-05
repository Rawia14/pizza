import { AppBar, Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import "./style.css";


const Header= () => {
    const { t, i18n } = useTranslation();


  return (
    <AppBar position="absolute"  sx={{ top: 0, bottom: "auto", backgroundColor: "#3b438b"}}>
        
        <Box
         className="header"
         display="flex" 
         alignItems="center"
         justifyContent="space-between" 
         margin="0 1em"
         >
        
         <Box display="flex" alignItems="center" className="menu">
            <img
              src="/assets/logo.png"
              alt=""
              style={{ width: "10em" }}
            /> 

          <Typography variant="h1" sx={{ textAlign: "justify" }}>{t("common.Chez Mario")}</Typography>
          
          </Box>
          
          <Box>
            
          </Box>
        </Box>
      </AppBar>
  );
};

export default Header;
