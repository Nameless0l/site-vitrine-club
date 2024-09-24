import React, { createContext, useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from "@/configs/api";

const PublicFamilyTreeContext = createContext();

export const PublicFamilyTreeProvider = ({ children }) => {
    const [publicTrees, setPublicTrees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadPublicTrees = async () => {
            try {
                setLoading(true);
                const response = await api.get('/trees/public');
                setPublicTrees(response.data);
                setError(null);
            } catch (err) {
                setError('Erreur lors de la récupération des arbres publics');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadPublicTrees();
    }, []);

    return (
        <PublicFamilyTreeContext.Provider value={{ publicTrees, loading, error }}>
            {children}
        </PublicFamilyTreeContext.Provider>
    );
};

PublicFamilyTreeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const usePublicFamilyTree = () => useContext(PublicFamilyTreeContext);
