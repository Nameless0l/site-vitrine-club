import React from 'react';
import {
    Container, Typography, Box, Grid, Card, CardContent,
    CardMedia, Button, useTheme, useMediaQuery, CircularProgress
} from '@mui/material';
import {usePublicFamilyTree} from "@/contexts/PublicFamilyTreeContext";


export default function Home() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const { publicTrees, loading, error } = usePublicFamilyTree();

    return (
        <Container maxWidth="lg">
            {/* Public Trees Section */}
            <Box sx={{ my: 6 }}>
                <Typography variant="h4" component="h2" gutterBottom textAlign="center">
                    Arbres généalogiques publics
                </Typography>
                {loading ? (
                    <Box display="flex" justifyContent="center">
                        <CircularProgress />
                    </Box>
                ) : error ? (
                    <Typography color="error" textAlign="center">{error}</Typography>
                ) : (
                    <Grid container spacing={4}>
                        {publicTrees.map((tree) => (
                            <Grid item xs={12} sm={6} md={4} key={tree.id}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            {tree.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Créé par: {tree.created_by}
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            size="small"
                                            sx={{ mt: 2 }}
                                            href={`/tree/${tree.id}`}
                                        >
                                            Voir l'arbre
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
                {!loading && !error && publicTrees.length === 0 && (
                    <Typography variant="body1" textAlign="center">
                        Aucun arbre public n'est disponible pour le moment.
                    </Typography>
                )}
            </Box>

            {/* ... (le reste du code reste inchangé) */}
        </Container>
    );
}