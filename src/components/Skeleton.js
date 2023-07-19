import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonNews() {
  return (
    <Box sx={{ width: '100%' }}>
      <Skeleton variant="rectangular" height={200} />
      <Skeleton />
      <Skeleton />
    </Box>
  );
}
