import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { useCart } from '../Cart/Cart';
import ItemQuantityInput from '../ItemQuantityInput/ItemQuantityInput';
import './ProductCard.css';

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [itemCount, setItemCount] = useState(1);

  return (
    <Card
      className="product-card"
      variant="standard"
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia component="img" image={product.image} alt={product.title} />
      <CardContent
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          ${product.price}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBlockEnd: '1.2rem' }}
        >
          {product.title}
        </Typography>
        <CardActions
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBlockStart: 'auto',
          }}
        >
          <ItemQuantityInput
            itemCount={itemCount}
            setItemCount={setItemCount}
          />
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              addItem(product, itemCount);
              setItemCount(1);
            }}
            endIcon={<AddShoppingCart />}
          >
            ADD TO CART
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
