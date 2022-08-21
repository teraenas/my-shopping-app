import React, { useEffect, useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  ButtonGroup,
} from '@mui/material';
import { AddShoppingCart, Add, Remove } from '@mui/icons-material';
import { useCart } from '../Cart/Cart';
import './ProductCard.css';

function ProductCard(props) {
  const { addItem } = useCart();
  const [itemCount, setItemCount] = useState(1);

  return (
    <Card
      className="product-card"
      variant="standard"
      sx={{ display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="img"
        image={props.product.image}
        alt={props.product.title}
      />
      <CardContent
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          ${props.product.price}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBlockEnd: '1.2rem' }}
        >
          {props.product.title}
        </Typography>
        <CardActions
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginBlockStart: 'auto',
          }}
        >
          <ButtonGroup size="small">
            <Button
              variant="contained"
              disableElevation
              color="info"
              onClick={() =>
                itemCount > 1 ? setItemCount(itemCount - 1) : itemCount
              }
              sx={{ padding: 0 }}
            >
              <Remove />
            </Button>
            <Button sx={{ color: 'var(--clr-text-dark) !important' }} disabled>
              {itemCount}
            </Button>
            <Button
              variant="contained"
              disableElevation
              color="info"
              onClick={() => setItemCount(itemCount + 1)}
              sx={{ padding: 0 }}
            >
              <Add />
            </Button>
          </ButtonGroup>
          <Button
            variant="contained"
            fullWidth
            onClick={() => addItem(props.product, itemCount)}
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
