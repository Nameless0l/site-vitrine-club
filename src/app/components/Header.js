import React, { useState } from 'react';
import {
    AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar,
    Button, useMediaQuery, Drawer, List, ListItem, ListItemText, Box
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Brightness4, Brightness7, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import Link from 'next/link';

const pages = [
    { name: 'Accueil', path: '/' },
    { name: 'Ma famille', path: '/family' },
    { name: 'Galerie', path: '/galerie' },
    { name: 'À Propos', path: '/about' },
];

export default function Header({ mode, toggleDarkMode, trees }) {
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorElTrees, setAnchorElTrees] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
    const handleCloseUserMenu = () => setAnchorElUser(null);
    const handleOpenTreeMenu = (event) => setAnchorElTrees(event.currentTarget);
    const handleCloseTreeMenu = () => setAnchorElTrees(null);
    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    const menuItems = (
        <>
            {pages.map((page) => (
                <Link href={page.path} key={page.name} passHref>
                    <Button color="inherit" sx={{ color: 'white' }}>{page.name}</Button>
                </Link>
            ))}
            <Button color="inherit" onClick={handleOpenTreeMenu}>
                Mes Arbres
            </Button>
        </>
    );

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 700,
                        letterSpacing: '0.05em'
                    }}
                >
                    <img src="/logo.png" alt="Logo" style={{ height: 50, marginRight: 10 }} />
                    Ancestrail
                </Typography>

                {isMobile ? (
                    <>
                        <IconButton color="inherit" onClick={toggleMobileMenu}>
                            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </IconButton>
                        <Drawer anchor="right" open={mobileMenuOpen} onClose={toggleMobileMenu}>
                            <Box sx={{ width: 250 }} role="presentation" onClick={toggleMobileMenu}>
                                <List>
                                    {pages.map((page) => (
                                        <ListItem button key={page.name} component={Link} href={page.path}>
                                            <ListItemText primary={page.name} />
                                        </ListItem>
                                    ))}
                                    <ListItem button onClick={handleOpenTreeMenu}>
                                        <ListItemText primary="Mes Arbres" />
                                    </ListItem>
                                </List>
                            </Box>
                        </Drawer>
                    </>
                ) : (
                    menuItems
                )}

                <IconButton onClick={toggleDarkMode} color="inherit">
                    {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
                </IconButton>

                <IconButton onClick={handleOpenUserMenu} color="inherit">
                    <Avatar alt="User Profile" src="/profile-pic.jpg" />
                </IconButton>

                <Menu
                    anchorEl={anchorElUser}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    <MenuItem onClick={handleCloseUserMenu}>Profil</MenuItem>
                    <MenuItem onClick={handleCloseUserMenu}>Déconnexion</MenuItem>
                </Menu>

                <Menu
                    anchorEl={anchorElTrees}
                    open={Boolean(anchorElTrees)}
                    onClose={handleCloseTreeMenu}
                >
                    {trees.map((tree) => (
                        <MenuItem key={tree.id} onClick={handleCloseTreeMenu}>
                            {tree.name}
                        </MenuItem>
                    ))}
                </Menu>
            </Toolbar>
        </AppBar>
    );
}