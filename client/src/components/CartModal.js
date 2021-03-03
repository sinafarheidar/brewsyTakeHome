import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Item from './Item'
import CartItem from './CartItem'

const useStyles = makeStyles((theme) => ({
  modal: {
    width: '75%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function CartModal({cartItems}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (name) => {
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i]) {
        if (cartItems[i].name === name) {

            delete cartItems[i]
            return
        }
    }
    }
}

const addToCart = (name, price) => {
    cartItems.concat({name, price})
}

  return (
    <div>
      <Button type="button" onClick={handleOpen} style={{color: 'white'}}>
        Open Cart
      </Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper} style={{width: '75%'}}>
            <h2>Welcome To Your Cart</h2>
            
            <Typography>Your Cart!</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    {cartItems.map(item => (
                        <Grid item xs={12}>
                            <br />
                            <CartItem itemName={item.name} itemPrice={item.price} handleClick={() => handleDelete(item.name)}/>
                            <br />
                        </Grid>
                    ))}
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Typography>Add More Stuff!</Typography>

                    <Grid item xs={12}>
                            <br />
                            <Item itemName={'iPhone 13'} itemPrice={1100.99} handleClick={() => addToCart('iPhone 13', 1100.99)}/>
                            <br />
                        </Grid>

                        <Grid item xs={12}>
                            <br />
                            <Item itemName={'Xbox Series X'} itemPrice={499.99} handleClick={() => addToCart('Xbox Series X', 499.99)} />
                            <br />
                        </Grid>

                        <Grid item xs={12}>
                            <br />
                            <Item itemName={'Hot Sauce'} itemPrice={5.00} />
                            <br />
                        </Grid>

                        <Grid item xs={12}>
                            <br />
                            <Item itemName={'PS5'} itemPrice={499.99} />
                            <br />
                        </Grid>
                </Grid>

            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}