import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Videos from './Videos';
import ChannelCard from './ChannelCard';
import { fetchFromApi } from '../Utils/fetchFromApi';
const ChannelDetail = () => {
  const [channelDetail, setChannelDetails] = useState(null);
  const [] = useState();
  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetails(data?.items[0])
    );
    fetchFromApi(`channels?channelId=${id}&part=snippet&order=data`).then(
      (data) => setChannelDetails(data?.items[0])
    );
  }, [id]);
  return <div>ChannelDetail</div>;
};

export default ChannelDetail;
