import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { AddShoppingCart, Favorite } from '@mui/icons-material'

export default function MultiActionAreaCard(props) {
  const [favorite, setFavorite] = React.useState(false)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.imagen}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.descrip}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <IconButton aria-label="favorite" onClick={() => setFavorite(!favorite)}>
          <Favorite color={favorite ? 'error' : 'inherit'} />
        </IconButton>
        <IconButton color="success" aria-label="add to shopping cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
}