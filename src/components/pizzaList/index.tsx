import { useTranslation } from "react-i18next";
import Pizza from "../../models/pizza";
import { Box, IconButton, Typography } from "@mui/material";
import PizzaCard from "../pizzaCard";
import { useState } from "react";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface Props {
  pizzas: Pizza[] | undefined;
}

const PizzaList = ({ pizzas }: Props) => {
  const { t } = useTranslation();

  const [totalPrice, setTotalPrice] = React.useState(0);

  const updateTotalPrice = (price: number) => {
    setTotalPrice(totalPrice + price);
  };

  return (
    <Box className="pizzaList" sx={{ paddingTop: "64px" }}>
      <Box mb={5}></Box>
      <Box mb={5}>
        <Typography variant="h3" color={"#3b438b"} sx={{ textAlign: "left" }}>
          {t("common.Sélectionnez vos pizzas")}
        </Typography>
      </Box>
      <Box
        mb={5}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography variant="h5" color="#000000">
          Total Price: {totalPrice} €
        </Typography>
        <IconButton aria-label="add to shopping cart" sx={{ color: 'black' }}>
          <ShoppingCartIcon />
        </IconButton>
      </Box>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="20px"
        justifyContent="space-around"
        id="list"
        flexDirection={"column"}
      >
        {pizzas?.map((pizza: Pizza) => (
          <article>
            <PizzaCard pizza={pizza} updateTotalPrice={updateTotalPrice} />
          </article>
        ))}
      </Box>
    </Box>
  );
};

export default PizzaList;
