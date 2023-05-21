import CasinoIcon from '@mui/icons-material/Casino';

import { styled } from '@mui/system';

const StyledComponent = styled(CasinoIcon)({
  fontSize: "12px!important",
  marginRight: "10px!important"
})

export const StyledLogo = () => {

  return (
    <StyledComponent />
  );
}
