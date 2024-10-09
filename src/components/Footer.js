import React from 'react';
import {Box, Container, Typography, Link, Divider, Grid, List, ListItem} from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const SectionDivider = () => (
    <Box sx={{ my: 6 }}>
        <Divider>
            <Box
                component="span"
                sx={{
                    width: 10,
                    height: 10,
                    bgcolor: 'primary.main',
                    borderRadius: '50%',
                    display: 'inline-block',
                }}
            />
        </Divider>
    </Box>
);

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: 'background.paper',
                py: 3,
                borderTop: '1px solid',
                borderColor: 'divider',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
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
                            <img src="/logo.png" alt="Logo" style={{ height: 100, marginLeft: 50, marginBottom: 10 }} />
                        </Typography>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            À propos d'Ancestrail
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Découvrez, préservez et partagez votre histoire familiale avec Ancestrail.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Liens rapides
                        </Typography>
                        <List sx={{ padding: 2 }}>
                            <ListItem sx={{ padding: 0 }}>
                                <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none' }}>Accueil</Link>
                            </ListItem>
                            <ListItem sx={{ padding: 0 }}>
                                <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none' }}>Créer un arbre</Link>
                            </ListItem>
                            <ListItem sx={{ padding: 0 }}>
                                <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none' }}>Livrets de récits</Link>
                            </ListItem>
                            <ListItem sx={{ padding: 0 }}>
                                <Link href="#" color="inherit" display="block" sx={{ textDecoration: 'none' }}>Contactez-nous</Link>
                            </ListItem>
                        </List>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Suivez-nous
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Link href="#" color="inherit">
                                <Facebook />
                            </Link>
                            <Link href="#" color="inherit">
                                <Twitter />
                            </Link>
                            <Link href="#" color="inherit">
                                <Instagram />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        © {new Date().getFullYear()} Ancestrail. Tous droits réservés.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export { Footer, SectionDivider };