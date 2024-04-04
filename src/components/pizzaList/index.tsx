import { useTranslation } from "react-i18next";
import Pizza from "../../models/pizza";
import { Box, Typography } from "@mui/material";
import PizzaCard from "../pizzaCard";

interface Props {
    pizzas: Pizza[] | undefined;
  }
  
  const PizzaList = ({ pizzas }: Props) => {
    // zone pour faire des trucs
    const { t } = useTranslation();
  
    // Ici on construit l'interface
    return (
      <Box className="pizzaList">
        <Typography variant="h5">
          Sélectionnez vos pizzas
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          gap="20px"
          justifyContent="space-around"
          id="list"
          flexDirection={"column"}
          width={"200px"}
        >
          {pizzas?.map((pizza: Pizza) => (
            <PizzaCard pizza={pizza} />
          ))}
        </Box>
      </Box>
    );
  };
  
  export default PizzaList;