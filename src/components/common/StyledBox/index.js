import React, { useState } from 'react';
import Box from '@mui/material/Box';

import { styled } from '@mui/system';

const StyledComponent = styled(Box)({
    justifyContent: "flex-end!important"
})

export const StyledBox = ({children}) => {

  return (
    <StyledComponent sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {children}
    </StyledComponent>
  );
}