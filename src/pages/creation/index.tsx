import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import Client from "../../models/client";
import "./style.css";
import { useState } from "react";
import CongratulationsModal from "../../components/congratulations";


interface props {
  addClient: Function;
}
const AddClient = ({ addClient }: props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const validationSchema = yup.object().shape({
    firstname: yup
      .string()
      .required(t("required").toString())
      .min(3, t("atLeast", { count: 3 })),
      
    lastname: yup
      .string()
      .required(t("required").toString())
      .min(3, t("atLeast", { count: 3 })),
    address: yup
      .string()
      .required(t("required").toString())
      .min(20, t("atLeast", { count: 20 })),
    phoneNumber: yup
      .string()
      .required(t("required").toString())
      .length(10, t("exactly", { count: 10 })),
    password: yup
      .string()
      .required(t("required").toString())
      .min(3, t("atLeast", { count: 3 })),
      confirmPassword: yup
      .string()
      .required(t("required"))
      .oneOf([yup.ref("password")],
       t("passwordsMustMatch")),
  });

  const formik = useFormik({
    initialValues: {
      id: undefined,
      firstname: "",
      lastname: "",
      password: "",
      confirmPassword: "",
      address: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //transform form values to a new Client
      let cli = new Client();
      cli.lastname = values.lastname.toUpperCase();
      cli.firstname = values.firstname;
      cli.password = values.password;
      cli.phoneNumber = values.phoneNumber;
      cli.address = values.address;

      if (addClient(cli)) {
        navigate("/login");
      }
    },
    
  });
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
    
    <form onSubmit={formik.handleSubmit} className="addClientForm">
<Box mb={5}>
                <Typography variant="h4" color= "#3b438b" >
                {t("Create your account")}
                </Typography>
            </Box>
      <Card
        elevation={2}
        sx={{ margin: "auto", marginTop: "3em", maxWidth: "50em" }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Grid className="formRow" container spacing={2}>
          <Grid item xs={12} sm={6}>
            <label>{t("Lastname")}</label>
            <TextField
            className="formField" 
              
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="lastname"
              value={formik.values.lastname}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />
          </Grid>

          <Grid item xs={12} sm={6} className="formRow">
            <label>{t("Firstname")}</label>
            <TextField
              
              className="formField" 
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="firstname"
              value={formik.values.firstname}
              error={
                formik.touched.firstname && Boolean(formik.errors.firstname)
              }
              helperText={formik.touched.firstname && formik.errors.firstname}
            />
          </Grid>
          <Grid item xs={12} sm={6} className="formRow">
            <label>{t("mot de passe")}</label>
            <TextField
              
              className="formField" 
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="mot de passe"
              value={formik.values.password}
              error={
                formik.touched.password && Boolean(formik.errors.password)
              }
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item xs={12} sm={6} className="formRow">
            <label>{t("Confirmation")}</label>
            <TextField
              
              className="formField"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="mot de passe"
              value={formik.values.password}
              error={
                formik.touched.password && Boolean(formik.errors.password)
              }
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>



          
          <Grid item xs={12} className="formRow">
            <label>{t("Address")}</label>
            <TextField
             
             
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="address"
              value={formik.values.address}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
              multiline
              rows={3}
              maxRows={3}
              fullWidth
              sx={{ maxWidth: "60%" }}
            />
           </Grid>
          <Grid item xs={12} className="formRow">
            <label>{t("PhoneNumber")}</label>
            <TextField
              
               
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="phoneNumber"
              value={formik.values.phoneNumber}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            />
          </Grid>
          </Grid>
        
        <CardActions
          sx={{ display: "flex", justifyContent: "flex-end", marginTop: "2em" }}
        >
          <Button
          onClick={handleOpenModal}
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "#fbc02c", color: "#3b438b"  }}
          >
            {t("Create")}
          </Button>
          <CongratulationsModal open={openModal} handleClose={handleCloseModal} />
        </CardActions>
        </CardContent>
      </Card>
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="congratulations"
          aria-describedby="congratulations"
        >
          <Box sx={{ width: 400 }}>
            <h2 id="congratulations">Congratulations!</h2>
            <p id="congratulations">You are ready to order.</p>
            <NavLink to="/pizzaL">Place your first order</NavLink>
          </Box>
        </Modal>
        
      
    
    </form>

    
    
  );
};

export default AddClient;
