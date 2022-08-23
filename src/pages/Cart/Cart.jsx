import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Stack,
} from '@mui/material';
import { DeleteForever, ShoppingCartCheckout } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../components/CartProvider/CartProvider';
import { useUser } from '../../user/UserProvider';
import requireLogin from '../../util/requireLogin';
import CartItem from '../../components/CartItem/CartItem';
import './Cart.css';

function Cart() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useUser();
  const { cart, clearCart } = useCart();

  const TAX_RATE = 0.19;

  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }

  function priceRow(qty, unit) {
    return qty * unit;
  }

  function createRow(id, image, title, desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { id, image, title, desc, qty, unit, price };
  }

  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }

  const rows = cart.map(({ product, quantity }) =>
    createRow(
      product.id,
      product.image,
      product.title,
      product.description,
      quantity,
      product.price
    )
  );

  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  const handleCheckout = () => {
    if (!user) {
      requireLogin(location, navigate);
    } else {
      //send cart to server, await response, pass response to state
      //if success, clear cart
      clearCart();
      navigate('/checkout', { state: { success: true }, replace: true });
    }
  };

  if (cart.length === 0 || !cart)
    return (
      <section className="cart-page">
        <div className="container">
          <h1>Your Cart is empty</h1>
        </div>
      </section>
    );

  return (
    <section className="cart-page">
      <div className="container">
        <h1>Your Cart</h1>
        <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={4}>
                  Details
                </TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Desc</TableCell>
                <TableCell align="center">Qty.</TableCell>
                <TableCell align="right">Unit</TableCell>
                <TableCell align="right">Sum</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <CartItem key={row.id} item={row} ccyFormat={ccyFormat} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer sx={{ marginBottom: '2rem' }}>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell sx={{ width: 175 }} align="right">
                  {ccyFormat(invoiceSubtotal)}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Tax</TableCell>
                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                  0
                )} %`}</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>
                  <h2>Total</h2>
                </TableCell>
                <TableCell align="right">
                  <h2>{ccyFormat(invoiceTotal)}</h2>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Stack
          direction="row"
          justifyContent="space-between"
          align-items="center"
          flexWrap="wrap"
          gap="0.6rem"
          padding="2rem 0"
        >
          <Button
            variant="outlined"
            startIcon={<DeleteForever />}
            color="warning"
            onClick={clearCart}
          >
            CLEAR CART
          </Button>
          <Button
            size="large"
            variant="contained"
            endIcon={<ShoppingCartCheckout />}
            color="primary"
            onClick={() => handleCheckout()}
            sx={{ width: 220 }}
          >
            CHECKOUT
          </Button>
        </Stack>
      </div>
    </section>
  );
}

export default Cart;
