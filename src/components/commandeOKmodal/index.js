import React from "react";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import './style.css';
import { useTranslation } from 'react-i18next';





const Commandeok = ({ open, handleClose }) => {
  const { t } = useTranslation();
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            width: 400,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#3b438b",
            padding: "2em",
            borderRadius: "1em",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            
          }}
        >
          <h2 id="" className="modal-title" >{t("common.Your order is being prepared")}</h2>
          <p id="Commandeok" className="modal-message">{t("common.It will be delivered in 30 minutes")}</p>
          <NavLink to="/pizzaL" className="modal-link">{t("Return to order page")}</NavLink>
        </Box>
      </Modal>
    );
  };
  
  export default Commandeok;