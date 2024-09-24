// src/components/HeroSection.js
import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

const HeroSection = () => {
    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4, textAlign: 'center' }}>
                <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Bienvenue sur Ancestrail !
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
                    Découvrez, préservez et partagez votre histoire familiale ...
                </Typography>
                <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
                    Commencer votre voyage
                </Button>
            </Box>
        </Container>
    );
};

export default HeroSection;
