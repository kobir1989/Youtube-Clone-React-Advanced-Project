import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../Utils/Constants';
const selectedCategory = 'New';
const Sidebar = () => (
  <Stack
    direction='row'
    sx={{
      overflowY: 'auto',
      height: { sx: 'auto', md: '92vh' },
      flexDirection: { md: 'column' },
    }}
  >
    {categories.map((categorie) => (
      <button
        className='category-btn'
        style={{
          background: categorie.name === selectedCategory && '#FC1503',
          color: 'white',
        }}
        key={categorie.name}
      >
        <span
          style={{
            color: categorie.name === selectedCategory ? 'white' : 'red',
            marginRight: '15px',
          }}
        >
          {categorie.icon}
        </span>
        <span
          style={{ opacity: categorie.name === selectedCategory ? '1' : '0.8' }}
        >
          {categorie.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
