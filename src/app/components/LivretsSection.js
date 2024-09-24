// src/components/LivretsSection.js
import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';

const LivretsSection = () => {
    return (
        <Box sx={{ my: 6, textAlign: 'center' }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                Livrets de récits : L'histoire de votre famille prend vie !
            </Typography>
            <Grid container spacing={4} sx={{ mt: 4 }}>
                <Grid item xs={12} md={6}>
                    <img
                        src="/images/livret-recits.jpg"
                        alt="Exemple de livret de récits"
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" paragraph align="left">
                        Avec Ancestrail, transformez les histoires de votre famille en véritables trésors. Nos livrets de récits vous permettent de :
                    </Typography>
                    <ul style={{ textAlign: 'left' }}>
                        <li>Compiler les anecdotes, traditions et souvenirs familiaux</li>
                        <li>Intégrer des photos, documents et témoignages</li>
                        <li>Partager facilement avec tous les membres de la famille</li>
                        <li>Créer un héritage tangible pour les générations futures</li>
                    </ul>
                    <Button variant="contained" color="primary" size="large" sx={{ mt: 2 }}>
                        Commencer mon livret de récits
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LivretsSection;
