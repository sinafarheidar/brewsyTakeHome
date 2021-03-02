import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Item({itemName, itemPrice, handleClick}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Product: {itemName}
        </Typography>
        <Typography variant="h5" component="h2">
          
        </Typography>

        <Typography variant="body2" component="p">
          Price: {itemPrice}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color='primary' variant='contained' onClick={handleClick}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
}