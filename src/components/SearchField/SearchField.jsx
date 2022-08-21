import React, { useEffect, useState } from 'react';
import { Input, InputAdornment, FormControl } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import './SearchField.css';

function SearchField(props) {
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    props.setSearchTerm(searchInput);
  }, [searchInput]);

  return (
    <FormControl id="search-field">
      <Input
        id="search-input"
        sx={{ ml: 1 }}
        placeholder="Search Products"
        startAdornment={
          <InputAdornment position="start">
            <SearchOutlined />
          </InputAdornment>
        }
        value={searchInput}
        onChange={e => setSearchInput(e.target.value)}
      />
    </FormControl>
  );
}

export default SearchField;
