import { useTranslation } from "react-i18next";
import Pizza from "../../models/pizza";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface props {
    pizza: Pizza;
  }
  
  const PizzaCard = ({ pizza }: props) => {
    const { t } = useTranslation();
    return (
        <>
          <Card className="pizzaCard" elevation={10}>
            
            <CardMedia
              component="img"
              image={pizza.image}
              alt={t("pizza." + pizza.id)}
            />
            
          </Card>
          <Box>
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pizza.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pizza.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pizza.price}
          </Typography>
        </CardContent>
        </Box>
          
        </>
      );
    };
    
    export default PizzaCard;
       
