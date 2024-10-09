// src/components/FeaturesSection.js
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { AccountTree, PhotoLibrary, EmojiEvents, MenuBook } from '@mui/icons-material';

const features = [
    {
        title: "Créez votre arbre généalogique",
        description: "Construisez et visualisez facilement votre histoire familiale.",
        icon: <AccountTree fontSize="large" />,
    },
    {
        title: "Partagez des souvenirs",
        description: "Ajoutez des photos, des documents et des anecdotes à votre arbre.",
        icon: <PhotoLibrary fontSize="large" />,
    },
    {
        title: "Préservez vos traditions",
        description: "Documentez et transmettez vos coutumes familiales uniques.",
        icon: <EmojiEvents fontSize="large" />,
    },
    {
        title: "Créez des livrets de récits de votre famille",
        description: "Compilez et partagez des histoires uniques de votre famille.",
        icon: <MenuBook fontSize="large" />,
    },
];

const FeaturesSection = () => {
    return (
        <Grid container spacing={4} sx={{ my: 4 }}>
            {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                            {feature.icon}
                            <Typography gutterBottom variant="h5" component="h3" sx={{ mt: 2 }}>
                                {feature.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {feature.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default FeaturesSection;
