import React from 'react';
import { useState } from 'react';
import Logo from '../icons_assets/Logo.svg';
import { HiOutlineBars3 } from 'react-icons/hi2';
import {
    Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
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
            <HiOutlineBars3 onClick={() => setOpenMenu(!openMenu)} />
        </div>
        <Drawer isOpen={openMenu} placement="right" onClose={() => setOpenMenu(!openMenu)}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader fontFamily='Markazi Text' fontSize='30'>Little Lemon</DrawerHeader>
                <DrawerBody>
                    {menuOptions.map((item) => (
                        <div className="menu-item">
                            <div className="menu-item-icon">{item.icon}</div>
                            <div className="menu-item-text">{item.text}</div>
                        </div>
                    ))}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </nav>
    );
};

export default Navbar