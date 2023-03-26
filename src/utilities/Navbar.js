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
import {Routes, Route, Link} from 'react-router-dom'

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: 'Home',
            icon: <HomeIcon />,
            url: <Link to='/' className='nav-item'>Home</Link>
        },
        {
            text: 'Menu',
            icon: <MenuBookIcon />,
            url:  <Link to='/' className='nav-item'>Menu</Link>
        },
        {
            text: 'Reservations',
            icon: <BookOnlineIcon />,
            url: <Link to='/reservations' className='nav-item'>Reservations</Link>
        },
        {
            text: 'About',
            icon: <InfoIcon />,
            url: <Link to='/about' className='nav-item'>About</Link>
        },
        {
            text: 'Order Online',
            icon: <ShoppingCartIcon />,
            url: <Link to='/' className='nav-item'>Order Online</Link>
        },
        {
            text: 'Login',
            icon: <LoginIcon />,
            url: <Link to='/' className='nav-item'>Login</Link>
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
            <Link to='/' className='nav-item'>Home</Link>
            <Link to='/' className='nav-item'>Menu</Link>
            <Link to='/reservations' className='nav-item'>Reservations</Link>
            <Link to='/about' className='nav-item'>About</Link>
            <Link to='/' className='nav-item'>Order Online</Link>
            <Link to='/' className='nav-item'>Login</Link>
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
                        <div key = {item.text} className="menu-item">
                            <div className="menu-item-icon">{item.icon}</div>
                            <div className="menu-item-url">{item.url}</div>
                        </div>
                    ))}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </nav>
    );
};

export default Navbar