import { useFormik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import AuthenticationService from "../../services/AuthenticationService";
import {
  Box,
  Button,
  Card,
  CardActions,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import "./style.css";

interface Props {
  setIsAuthenticated: Function;
}

const Login = ({ setIsAuthenticated }: Props) => {
  const { t } = useTranslation();

  const [error, setError] = useState<boolean>(false);

  const schema = yup.object().shape({
    login: yup
      .string()
      .required(
        t("error.required", {
          field: t("common.loginPlaceholder"),
        }).toUpperCase()
      )
      .test(
        "3Len",
        t("error.minLen", { field: "3" }),
        (value: string) => value.length >= 3
      ),
    password: yup
      .string()
      .required(t("error.required", { field: t("common.passwordPlaceholder") }))
      .test(
        "4Len",
        t("error.minLen", { field: "4" }),
        (value: string) => value.length >= 4
      ),
  });

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      AuthenticationService.login(values.login, values.password).then(
        (response) => {
          setIsAuthenticated(response);
          setError(!response);
        }
      );
    },
  });
  

  return (
    <Card className="login" elevation={10} sx={{
      backgroundColor: "#3b438b",
    }} >
      {error && <Typography color="red">{t("common.loginError")}</Typography>}
      <form onSubmit={formik.handleSubmit}>
        <Typography
          variant="h6"
          style={{ color: "#fbc02c", textAlign: "left" }}
        >
          Identifiant
        </Typography>
        <TextField
          placeholder=""
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.login}
          name="login"
          error={formik.touched.login && Boolean(formik.errors.login)}
          helperText={formik.touched.login && formik.errors.login}
          style={{backgroundColor: "#FFFFFF"}}
        />
        <Box role="menubar" display="flex" justifyContent="center">
          <MenuItem>
            <NavLink to="/PizzaL"> </NavLink>
          </MenuItem>
        </Box>
        <Typography
          variant="h6"
          style={{ color: "#fbc02c", textAlign: "left" }}
        >
          Mot de passe
        </Typography>
        <TextField
          placeholder=""
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          name="password"
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          style={{backgroundColor: "#FFFFFF"}}
        />
        
<CardActions
          sx={{ display: "flex", justifyContent: "flex-end", marginTop: "2em" }}
        >
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "#fbc02c"  }}
          >
            <NavLink to="/add">{t("common.AddClient")}</NavLink>
          </Button>
          </CardActions>
        <Button
          variant="contained"
          type="submit"
          sx={{
            backgroundColor: "#fbc02c",
            color: "#3b438b",
          }}
        >
          {t("common.connect")}
        </Button>
        
          
            
          
      </form>
    </Card>
  );
};

export default Login;
