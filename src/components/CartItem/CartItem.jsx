import React, { useState, useEffect } from 'react';
import { Stack, TableCell, TableRow, IconButton } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import { useCart } from '../Cart/Cart';
import ItemQuantityInput from '../ItemQuantityInput/ItemQuantityInput';

function CartItem({ item, ccyFormat }) {
  const { updateItemCount, removeItem } = useCart();
  const [itemCount, setItemCount] = useState(item.qty);

  useEffect(() => {
    updateItemCount(item.id, itemCount);
  }, [itemCount]);

  return (
    <TableRow>
      <TableCell>
        <img
          className="cart-page__item-thumb"
          src={item.image}
          alt={item.desc}
        />
      </TableCell>
      <TableCell>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
      </TableCell>
      <TableCell align="center">
        <Stack direction="row" spacing={1}>
          <ItemQuantityInput
            itemCount={itemCount}
            setItemCount={setItemCount}
          />
          <IconButton
            color="warning"
            onClick={() => removeItem(item.id)}
            aria-label="remove item"
          >
            <DeleteForever />
          </IconButton>
        </Stack>
      </TableCell>
      <TableCell align="right">{item.unit}</TableCell>
      <TableCell align="right">{ccyFormat(item.price)}</TableCell>
    </TableRow>
  );
}

export default CartItem;
