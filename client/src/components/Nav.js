import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import CartModal from './CartModal'
import CartDrawer from './CartDrawer'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Nav({items}) {
    const classes = useStyles();


 
  return (
    <div className={classes.root} >
      <AppBar position="static" style={{borderRadius: '25px'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Cool Project!
          </Typography>
          <CartModal cartItems={items} />
            <Badge badgeContent={items.length}>
            <AddShoppingCartIcon />
          </Badge>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav
