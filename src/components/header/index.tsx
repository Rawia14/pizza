import { AppBar, Box } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
    isAuthenticated: boolean;
    setIsAuthenticated: Function;
}

const Header= ({ isAuthenticated, setIsAuthenticated }: Props) => {
    const { t, i18n } = useTranslation();
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: "auto" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        margin="0 1em"
      >
         </Box>
    </AppBar>
  );
};

export default Header;
