// src/theme.js
import { createTheme } from '@mui/material/styles';

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: '#00a533',
                },
                background: {
                    default: '#f5f5f5',
                },
            }
            : {
                primary: {
                    main: '#686868',
                },
                background: {
                    default: '#121212',
                },
            }),
    },
    typography: {
        fontFamily: '"Montserrat", sans-serif',
    },
});

export const createCustomTheme = (mode) => createTheme(getDesignTokens(mode));
