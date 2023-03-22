import React from 'react';
import { useState } from 'react';
import Logo from '../icons_assets/Logo.svg';
import { HiOutlineBars3 } from 'react-icons/hi2';
import {
    Drawer,
  DrawerBody,
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
import { VStack, HStack, useMediaQuery } from '@chakra-ui/react';

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

    const [isSmallerThan900] = useMediaQuery("(max-width: 900px)");
    const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

    return (
    <nav>
       <HStack  alignItems='center' spacing='40' justify='center' justifyContent='center' padding='2rem 0 2rem 0'>
            <img src={Logo} alt="logo" />
            <HStack justify='center' 
            fontFamily='karla' spacing={5}  
            fontWeight='extrabold' 
            fontSize={isSmallerThan900 ? '16px' : '18px'} display={isSmallerThan800 ? 'none' : 'flex'} 
            justifyContent='space-around' >
            <a href="">Home</a>
            <a href="">Menu</a>
            <a href="">Reservations</a>
            <a href="">About</a>
            <a href="">Order Online</a>
            <a href="">Login</a>
            </HStack>
            <div className="nav-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(!openMenu)} />
        </div>
        </HStack>
       
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