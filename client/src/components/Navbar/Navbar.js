import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, IconButton, makeStyles, Menu, MenuItem } from '@material-ui/core';

import { AccountCircle } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')] : {
            display: 'block',
        }
    },
    AppBar: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'black'
    }
}))

const menuId = 'primary-search-account-menu';







export default function Navbar() {
    const classes = useStyles();
    
    const handleMenuClose = () => {
        setMobileMoreAnchorEl(null)
    }

    const handleProfileMenuOpen = event => {
        setAnchorEl(event.currentTarget);
      };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Log out</MenuItem>
        </Menu>
    
    )
    
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar className={classes.AppBar}>
                    <Typography variant="h6" className={classes.title}>
                        Otis Lab
                    </Typography>
                    <MenuItem onClick={handleProfileMenuOpen}>
                        <IconButton 
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            color="inherit"
                            >
                                <AccountCircle />
                            
                        </IconButton>
                    </MenuItem>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </React.Fragment>
    );
}