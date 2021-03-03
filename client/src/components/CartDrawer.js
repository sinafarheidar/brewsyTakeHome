import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CartItem from './CartItem';
import Item from './Item';

const useStyles = makeStyles({
    list: {
        width: '75%',
    },
    fullList: {
        width: '80%',
    },
});

export default function CartDrawer({ cartItems }) {
    const classes = useStyles();

    const [items, setItems] = useState([])

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
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
        toggleDrawer('right', false)
    }

    const addToCart = (name, price) => {
        console.log('Added')
        cartItems.concat({name, price})
    }

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)} 
        >
            <Typography>Your Cart!</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    {cartItems.map(item => (
                        <Grid item xs={12}>
                            <br />
                            <CartItem itemName={item.name} itemPrice={item.price} handleClick={() => handleDelete(item.name)}/>
                            <br />
                        </Grid>
                    ))}
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
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
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)} style={{ color: 'white' }}>Open Cart</Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}