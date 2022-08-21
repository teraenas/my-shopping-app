import React from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

function ItemQuantityInput({ itemCount, setItemCount }) {
  return (
    <ButtonGroup size="small">
      <Button
        variant="contained"
        disableElevation
        color="info"
        onClick={() =>
          itemCount > 1 ? setItemCount(itemCount - 1) : itemCount
        }
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
      >
        <Add />
      </Button>
    </ButtonGroup>
  );
}

export default ItemQuantityInput;
