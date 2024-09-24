import React from 'react';
import {PublicFamilyTreeProvider} from './PublicFamilyTreeContext';

const AppProviders = ({ children }) => {
    return (
        <PublicFamilyTreeProvider>
            {children}
        </PublicFamilyTreeProvider>
    );
};

export default AppProviders;
