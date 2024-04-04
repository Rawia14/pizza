import { useTranslation } from "react-i18next";
import Pizza from "../../models/pizza";
import { Card, CardMedia } from "@mui/material";

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
    
          
        </>
      );
    };
    
    export default PizzaCard;
       
