import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Pizza from '../../models/pizza';
import './style.css';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Badge,
  IconButton,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface Props {
  pizza: Pizza;
}

const PizzaCard = ({ pizza }: Props) => {
  const { t } = useTranslation();
  const [quantity, setQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    setCartTotal(cartTotal + pizza.price);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      setCartTotal(cartTotal - pizza.price);
    }
  };

  return (
    <Card className="pizzaCard" elevation={15} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CardMedia
          component="img"
          image={pizza.image}
          alt={t('pizza.' + pizza.id)}
          sx={{ width: '200px', height: 'auto', marginRight: '10px' }}
        />
        <CardContent>
          <Typography variant="h5">{t('' + pizza.name)}</Typography>
          <Typography variant="body2" color="text.secondary">
            {pizza.description}
          </Typography>
        </CardContent>
      </Box>
      <Grid container direction="column" alignItems="flex-end" sx={{ marginLeft: 'auto' }}>
        <Grid item sx={{ textAlign: 'right' }}>
          <Typography variant="body2" color="text.secondary" sx={{ backgroundColor: '#008000', marginBottom: '5px', marginRight: '100px', color: '#FFFFFF', fontSize: '20px' }}>
            {pizza.price + '€'}
          </Typography>
        </Grid>
        <Grid item>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary" sx={{ marginRight: '10px' }}>
              {t('quantity')}
            </Typography>
            <CardActions>
              <Button size="small" onClick={handleDecrement}>
                -
              </Button>
              <Typography variant="body2" color="text.secondary">
                {quantity}
              </Typography>
              <Button size="small" onClick={handleIncrement}>
                +
              </Button>
            </CardActions>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default PizzaCard;
