import { useTranslation } from "react-i18next";
import Pizza from "../../models/pizza";
import "./style.css";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface props {
  pizza: Pizza;
}

const PizzaCard = ({ pizza }: props) => {
  const { t } = useTranslation();
  return (
    <>
      <Card
        className="pizzaCard"
        elevation={15}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          
        }}
      >
        <CardMedia
          component="img"
          image={pizza.image}
          alt={t("pizza." + pizza.id)}
        />
      
      
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "normal",
          }}
        > 
          <Box>
            <Typography variant="h5" >
              {t("" + pizza.name)}
            </Typography>
            </Box>
            
            <Box>
            <Typography variant="body2" color="text.secondary">
              {pizza.description}
            </Typography>
            </Box>
          <Box>
          
            <Typography variant="body2" color="text.secondary" sx={{backgroundColor: "#008000"}} >
            {pizza.price+ "€"}
            </Typography>
          </Box>
          <CardActions>
            <Box>
            <Typography variant="body2" color="text.secondary">
              Quantité
            </Typography>
            <Button size="small">-</Button>

            <Button size="small">+</Button>
            </Box>
          </CardActions>
        </CardContent>
        </Card>
      
    </>
  );
};

export default PizzaCard;
