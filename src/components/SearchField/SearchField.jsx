import React, { useEffect } from 'react';
import { Input, InputAdornment, FormControl } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { useSearch } from '../SearchProvider/SearchProvider';
import './SearchField.css';

function SearchField() {
  const { searchTerm, setSearchTerm } = useSearch();

  useEffect(() => setSearchTerm(''), []);

  return (
    <FormControl id="search-field">
      <Input
        id="search-input"
        placeholder="Search Products"
        startAdornment={
          <InputAdornment position="start">
            <SearchOutlined />
          </InputAdornment>
        }
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </FormControl>
  );
}

export default SearchField;
