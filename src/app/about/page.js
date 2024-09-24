import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { AccountTree, Security, Speed, Devices } from '@mui/icons-material';

const AboutPage = () => {
    const features = [
        {
            icon: <AccountTree />,
            title: "Arbre généalogique numérique",
            description: "Créez et gérez facilement votre arbre généalogique, en préservant l'histoire de votre famille pour les générations futures."
        },
        {
            icon: <Security />,
            title: "Sécurité et confidentialité",
            description: "Vos données familiales sont protégées grâce à notre gestion sécurisée des accès et au chiffrement des informations sensibles."
        },
        {
            icon: <Speed />,
            title: "Performance optimisée",
            description: "Profitez d'une expérience fluide, même avec de grands arbres généalogiques, grâce à nos temps de chargement optimisés."
        },
        {
            icon: <Devices />,
            title: "Compatibilité multiplateforme",
            description: "Accédez à votre arbre généalogique depuis n'importe quel appareil grâce à notre application web responsive."
        },
    ];

    return (
        <Container maxWidth="lg">
            <Box sx={{ my: 4 }}>
                <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                    À Propos d'Ancestrail
                </Typography>
                <Typography variant="h5" align="justify" color="text.secondary">
                    Préserver l'héritage culturel et renforcer les liens familiaux
                </Typography>

                <Box sx={{ my: 4 }}>
                    <Typography variant="body1" align={"justify"}>
                        <strong>Ancestrail</strong> est né de la volonté de préserver et de célébrer la riche histoire
                        familiale du Cameroun.
                        Créé par un groupe de jeunes étudiants passionnés de l'École Polytechnique de Yaoundé, notre
                        plateforme est le fruit d'une collaboration
                        entre des esprits créatifs et déterminés, désireux de reconnecter les générations.
                    </Typography>
                    <Typography variant="body1" align={"justify"}>
                        Dans un monde en constante évolution, où l'urbanisation rapide et la modernisation peuvent
                        parfois créer des distances entre les générations,
                        <strong>Ancestrail</strong> vise à maintenir les liens intergénérationnels et à transmettre
                        l'histoire familiale aux générations futures.
                        Nous croyons fermement que chaque famille a une histoire unique à raconter, et notre mission est
                        de faciliter cette exploration
                        et cette documentation à travers des outils accessibles et intuitifs.
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Paper elevation={3} sx={{ p: 2, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                <Box sx={{ mb: 2, color: 'primary.main' }}>
                                    {feature.icon}
                                </Box>
                                <Typography variant="h6" component="h3" gutterBottom>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2">
                                    {feature.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ my: 4 }}>
                    <Typography variant="h3" component="h2" gutterBottom>
                        Notre Mission
                    </Typography>
                    <Typography variant="body1" >
                        <strong>Ancestrail</strong> s'engage à fournir une plateforme intuitive et accessible à tous, quel que soit le niveau d'éducation
                        ou de familiarité avec la technologie. Notre objectif est de vous aider à :
                    </Typography>
                    <ul>
                        <li>Préserver l'héritage culturel de votre famille</li>
                        <li>Renforcer les liens familiaux malgré la distance géographique</li>
                        <li>Maintenir un sens de l'identité pour les générations futures</li>
                        <li>Adapter la transmission de l'histoire familiale aux réalités de la société camerounaise moderne</li>
                    </ul>
                </Box>
            </Box>
        </Container>
    );
};

export default AboutPage;