import { Box } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';

// using Loader component to show while loading the page/component

const Loader = () => {
    return (
        <Box>
             <CircularProgress color="secondary" />
        </Box>
    );
};

export default Loader;