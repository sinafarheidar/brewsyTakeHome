import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

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

function Nav({cartItems}) {
    const classes = useStyles();


 
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Cool Project!
          </Typography>
          {cartItems ? (
            <Badge badgeContent={cartItems.length}>
            <AddShoppingCartIcon />
          </Badge>
          ) : (
            <Badge badgeContent={100} >
            <AddShoppingCartIcon />
          </Badge>
          )}
          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav
