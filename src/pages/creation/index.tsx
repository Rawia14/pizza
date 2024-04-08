import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import { t } from "i18next";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import Client from "../../models/client";


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
  });

  const formik = useFormik({
    initialValues: {
      id: undefined,
      firstname: "",
      lastname: "",
      password: "",
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

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card
        elevation={2}
        sx={{ margin: "auto", marginTop: "3em", maxWidth: "50em" }}
      >
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Box className="input">
            <label>{t("lastname")}</label>
            <TextField
              placeholder={t("lastname")}
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="lastname"
              value={formik.values.lastname}
              error={formik.touched.lastname && Boolean(formik.errors.lastname)}
              helperText={formik.touched.lastname && formik.errors.lastname}
            />
          </Box>

          <Box className="input">
            <label>{t("firstname")}</label>
            <TextField
              placeholder={t("firstname")}
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
          </Box>

          <Box className="input">
            <label>{t("phoneNumber")}</label>
            <TextField
              placeholder={t("phoneNumber")}
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
          </Box>
          <Box className="input">
            <label>{t("Address")}</label>
            <TextField
              placeholder={t("Address")}
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
              sx={{ maxWidth: "50%" }}
            />
          </Box>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "flex-end", marginTop: "2em" }}
        >
          <Button
            type="reset"
            variant="outlined"
            onClick={() => navigate("/")}
            sx={{
              color: "var(--main-color)",
              borderColor: "var(--main-color)",
            }}
          >
            {t("Cancel")}
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "var(--main-color)" }}
          >
            {t("Save")}
          </Button>
        </CardActions>
      </Card>
      <Box sx={{ marginTop: "1em", textAlign: "center" }}>
        <NavLink to="/register">{t("common.createNewAccount")}</NavLink>
      </Box>
    </form>
  );
};

export default AddClient;
