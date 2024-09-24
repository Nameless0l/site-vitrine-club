// src/app/layout.js
'use client';
import { useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createCustomTheme } from '../configs/theme';
import Header from '@/app/components/Header';
import Head from "next/head";
import AppProviders from "@/contexts/AppProviders";
import {Footer} from "@/app/components/Footer"; // Importation du Header

export default function RootLayout({ children }) {
    const [mode, setMode] = useState('light'); // Gestion du mode clair/sombre

    const theme = useMemo(() => createCustomTheme(mode), [mode]);

    const toggleDarkMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    const trees = [
        { id: 1, name: 'Arbre Généalogique Principal' },
        { id: 2, name: 'Arbre des Ancêtres' },
        // Ajoute d'autres arbres ici
    ];

    return (
        <html lang="fr">
        <Head>
            {/* Google Fonts import */}
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
                  rel="stylesheet"/>
            <title>Ancestrail - Découvrez votre histoire familiale</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <body>
        <AppProviders>
        <ThemeProvider theme={theme}>
                <CssBaseline />
                {/* Utilisation du Header */}
                <Header mode={mode} toggleDarkMode={toggleDarkMode} trees={trees} />
                {children}
                <Footer />
            </ThemeProvider>
        </AppProviders>
        </body>
        </html>
    );
}
