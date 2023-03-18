import React from 'react';
import { useState } from 'react';
import Logo from '../icons_assets/Logo.svg';
import { HiOutlineBars3 } from 'react-icons/hi2';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: 'Home',
            icon: <HomeIcon />
        },
        {
            text: 'Menu',
            icon: <MenuBookIcon />
        },
        {
            text: 'Reservations',
            icon: <BookOnlineIcon />
        },
        {
            text: 'About',
            icon: <InfoIcon />
        },
        {
            text: 'Order Online',
            icon: <ShoppingCartIcon />
        },
        {
            text: 'Login',
            icon: <LoginIcon />
        },
    ];

    return (
    <nav>
        <div className="nav-logo-container">
            <img src={Logo} alt="logo" />
        </div>
        <div className="nav-links-container">
            <a href="">Home</a>
            <a href="">Menu</a>
            <a href="">Reservations</a>
            <a href="">About</a>
            <a href="">Order Online</a>
            <a href="">Login</a>
        </div>
        <div className="nav-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
            <Box sx={{ width: 250 }}
                role="presentation"
                onClick={() => setOpenMenu(false)}
                onKeyDown={() => setOpenMenu(false)}
                >
                <List>
                {menuOptions.map((item) => (
                    <ListItem key={item.text} disablePadding >
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                                <ListItemText primary={item.text} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                ))}
                </List>
            </Box>
        </Drawer>
    </nav>
    );
};

export default Navbar