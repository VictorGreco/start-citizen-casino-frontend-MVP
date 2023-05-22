import React from 'react';
import Drawer from '@mui/material/Drawer';

import { styled } from '@mui/system';

const StyledComponent = styled(Drawer)({
  zIndex: -1,
})

export const StyledDrawer = ({ user, isOpen, toggleDrawer, children }) => {

  return (
    <StyledComponent 
      anchor="right"
      open={isOpen}
      onClose={toggleDrawer}
    >
      {children}
    </StyledComponent>
  );
}