import React from 'react';
import Button from '@mui/material/Button';

import { styled } from '@mui/system';

const StyledComponent = styled(Button)({
    display: "-webkit-box!important",
    display: "-ms-flexbox!important",
    display: "flex!important",
    alignItems: "center!important",
    position: "relative!important",
    zIndex: "1!important",
    color: "#7e7e7e!important",
    textTransform: "uppercase!important",
    fontSize: "12px!important",
    fontWeight: "500!important",
    whiteSpace: "nowrap!important",
    transition: "color .3s cubic-bezier(.4,.44,.26,1.01)!important",
    fontFamily: "univia-pro,sans-serif!important",
    boxSizing: "inherit!important",
    "&:hover": {
      color: "white!important",
    }
})

export const StyledButton = ({ children, onClickHandler }) => {

  return (
    <StyledComponent 
        onClick={onClickHandler}
    >
      {children}
    </StyledComponent>
  );
}