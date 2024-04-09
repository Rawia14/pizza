import React from "react";
import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import './style.css';

const CongratulationsModal = ({ open, handleClose }) => {
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
        <h2 id="congratulations" className="modal-title" >Congratulations!</h2>
        <p id="congratulations" className="modal-message">You are ready to order.</p>
        <NavLink to="/pizzaL" className="modal-link">Place your first order</NavLink>
      </Box>
    </Modal>
  );
};

export default CongratulationsModal;
