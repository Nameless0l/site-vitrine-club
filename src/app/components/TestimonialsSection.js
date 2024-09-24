// src/components/TestimonialsSection.js
import React from 'react';
import {Box, Typography, Button, Card, CardContent} from '@mui/material';

const TestimonialsSection = () => {
    return (
        <Box sx={{ my: 4, textAlign: 'center' }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                Témoignages
            </Typography>
            <Card sx={{ bgcolor: 'background.default', boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                    <Typography
                        variant="h6"
                        component="p"
                        gutterBottom
                        sx={{ fontStyle: 'italic' }}
                    >
                        "Grâce à Ancestrail, j'ai pu retracer l'histoire de ma famille sur cinq générations et découvrir des ancêtres dont je n'avais jamais entendu parler. C'est une expérience incroyable !"
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        sx={{ textAlign: 'right', fontWeight: 'bold' }}
                    >
                        - Natacha Fonkou, Yaoundé, Cameroun.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};

export default TestimonialsSection;
