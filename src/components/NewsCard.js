import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { newsStore } from 'stores';

function NewsCard({ data: { id, title, body } }) {
  const onDelete = () => {
    newsStore.deleteNews(id);
  };

  return (
    <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: 'auto', marginLeft: 'auto' }}>
        <Button size="small" onClick={onDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

NewsCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
export default NewsCard;
