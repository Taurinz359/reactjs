import * as React from 'react';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import axios from 'axios';

export default function NewsCards() {
  const loadNews = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
      })
      .then((res) => console.log(res.data))
      .catch(console.log);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <Box
      sx={{
        marginTop: '6px',
        flexGrow: 1,
        display: 'flex',
        width: '100%',
        justifyContent: 'space-around',
      }}
    ></Box>
  );
}
