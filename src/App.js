import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  NavBar,
  Feed,
  ChannelDetail,
  VideoDetail,
  SearchFeed,
} from './Components';
const App = () => (
  <Router>
    <Box sx={{ backgroundColor: '#000' }}>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTearm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </Router>
);

export default App;
