import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../Utils/Constants';
import SearchBar from './SearchBar';
const NavBar = () => (
  <Stack
    direction='row'
    alignitems='center'
    p={2}
    sx={{
      position: 'sticky',
      background: '#000',
      top: 0,
      justifyContent: 'space-between',
    }}
  >
    <Link to='/home' style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt='' height={45} />
    </Link>
    <SearchBar />
    {/* <Link></Link> */}
  </Stack>
);

export default NavBar;
