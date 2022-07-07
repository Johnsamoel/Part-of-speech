import { Typography , Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const WordContainer = ({children}) => {
    return (
        <Box sx={{ width:{lg:"400px" , md:'400px' , sm:'400px' , xs:'200px'} , height:{lg:"250px" , md:'250px' , sm:'250px' , xs:'150px'} ,  backgroundColor:'grey' , color:'black' , borderRadius:'15px' }}>
           <Stack sx={{width:"100%" , height:'100%'}} justifyContent='center' alignItems='center'>
           <Typography sx={{fontSize:'2rem'}} >{children}</Typography>
           </Stack>

        </Box>
    );
};

export default WordContainer;