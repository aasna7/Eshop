import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/eshoplogo.png';
import useStyles from './styles';


const Navbar = () => {
    const classes= useStyles();
  return (
    <>
        <AppBar position='fixed' className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography variant='h6' className={classes.appBar} color="inherit">
                    <img src={logo} alt="EShop" height="25px" className={classes.image} />
                    Eshop
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label='Show cart item' color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Navbar