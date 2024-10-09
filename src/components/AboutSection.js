// src/components/AboutSection.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const AboutSection = () => {
    return (
        <Box sx={{ my: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                À Propos d'Ancestrail
            </Typography>
            <Typography variant="body1">
                Ancestrail est né de la volonté de préserver et de célébrer la riche histoire familiale du Cameroun. Notre plateforme vous permet de créer facilement votre arbre généalogique, de partager des histoires, des évènements et des photos, et de connecter les générations passées, présentes et futures.
            </Typography>
            <Button variant="text" color="primary">
                En savoir plus
            </Button>
        </Box>
    );
};

export default AboutSection;
