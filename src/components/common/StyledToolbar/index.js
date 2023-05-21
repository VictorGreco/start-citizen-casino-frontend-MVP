import Toolbar from '@mui/material/Toolbar';

import { styled } from '@mui/system';

const StyledComponent = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  minHeight: "36px"
})

export const StyledToolbar = ({children}) => {

  return (
        <StyledComponent disableGutters>
          {children}
        </StyledComponent>
  );
}
