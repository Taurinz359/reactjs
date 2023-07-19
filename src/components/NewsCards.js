import Box from '@mui/material/Box';
import SkeletonNews from './Skeleton';
import NewsCard from './NewsCard';
import { useEffect, useState } from 'react';
import { newsStore } from '../stores';
import { observer } from 'mobx-react';

const NewsCards = observer(() => {
  const [skeleton, setSkeleton] = useState(true);
  const newsCount = 9;

  useEffect(() => {
    newsStore.loadNews().then(() => {
      setSkeleton(false);
    });
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
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 900,
          padding: '0 30px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          marginTop: '10px',
        }}
      >
        {skeleton
          ? Array.from(Array(newsCount).keys()).map((_, index) => <SkeletonNews key={index} />)
          : newsStore.newsList.map((item) => <NewsCard key={item.id} data={item} />)}
      </Box>
    </Box>
  );
});

export default NewsCards;
