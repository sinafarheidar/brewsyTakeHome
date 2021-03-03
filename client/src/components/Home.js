import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';

import Nav from './Nav'
import Item from './Item'

function Home() {

    const [cartItems, setCartItems] = useState([])

    const handleClick = (name, price) => {
        setCartItems(cartItems.concat({name, price}))
    }

    return (
        <div>
            <Nav items={cartItems}/>

            <br />

            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
                    <Item itemName={'iPhone 13'} itemPrice={1100.99} handleClick={() => handleClick('iPhone 13', 1100.99)}/>
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
                    <Item itemName={'Xbox Series X'} itemPrice={499.99} handleClick={() => handleClick('Xbox Series X', 499.99)}/>
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
                    <Item itemName={'Hot Sauce'} itemPrice={5.00} handleClick={() => handleClick('Hot Sauce', 5.00)}/>
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
                    <Item itemName={'PS5'} itemPrice={499.99} handleClick={() => handleClick('PS5', 499.99)}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home
