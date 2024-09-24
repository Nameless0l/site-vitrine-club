// src/app/page.js
'use client';
import React from 'react';
import {
    Container, Typography, Box, Button, useTheme, useMediaQuery, Grid,
} from '@mui/material';
import {SectionDivider} from "@/app/components/Footer";
import AboutSection from "@/app/components/AboutSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import PublicTreesSection from "@/app/components/PublicTreesSection";
import FeaturesSection from "@/app/components/FeaturesSection";
import HeroSection from "@/app/components/HeroSection";


export default function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container maxWidth="lg">
            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <FeaturesSection />

            {/* CTA Section */}
            <Box sx={{ my: 4, textAlign: 'center' }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Prêt à explorer votre histoire familiale ?
                </Typography>
                <Button variant="outlined" color="primary" size="large" sx={{ mt: 2 }}>
                    Créer mon arbre généalogique
                </Button>
            </Box>

            <SectionDivider />

            {/*Arbres Publics Section */}
            <PublicTreesSection />

            <SectionDivider />

            {/*Livrets Section */}
            <Box sx={{ my: 6, textAlign: 'center' }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                    Livrets de récits : L'histoire de votre famille prend vie
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

            <SectionDivider />

            {/* Temoignages Section */}
            <TestimonialsSection />

            <SectionDivider />

            {/* About Section */}
            <AboutSection />
        </Container>
    );
}
