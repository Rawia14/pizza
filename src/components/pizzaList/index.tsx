import { useTranslation } from "react-i18next";
import Pizza from "../../models/pizza";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import PizzaCard from "../pizzaCard";
import { useState } from "react";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import Commandeok from "../commandeOKmodal";

interface Props {
  pizzas: Pizza[] | undefined;
}

const PizzaList = ({ pizzas }: Props) => {
  const { t } = useTranslation();

  const [totalPrice, setTotalPrice] = React.useState(0);

  const updateTotalPrice = (price: number) => {
    setTotalPrice(totalPrice + price);
  };
 


const [open, setOpen] = useState(false);
const handleOpen = () => {
setOpen(true);
};
const handleClose = () => {
setOpen(false);
};
const [openModal, setOpenModal] = useState(false);

const handleOpenModal = () => {
setOpenModal(true);
};

const handleCloseModal = () => {
setOpenModal(false);
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
        
      <IconButton aria-label="add to shopping cart" sx={{ color: 'black' }} onClick={handleOpenModal}>
        <ShoppingCartIcon />
      </IconButton>
      <Commandeok open={openModal} handleClose={handleCloseModal} />
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
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="Commandeok"
          aria-describedby="Commandeok"
        >
          <Box sx={{ width: 400 }}>
            <h2 id="Commandeok">Your order is being prepared</h2>
            <p id="Commandeok">It will be delivered in 30 minutes.</p>
            <NavLink to="/pizzaL">Retour à la page de commande</NavLink>
          </Box>
        </Modal>
    </Box>
  );
};

export default PizzaList;
