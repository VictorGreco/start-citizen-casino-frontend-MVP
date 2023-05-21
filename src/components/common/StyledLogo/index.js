import CasinoIcon from '@mui/icons-material/Casino';

import { styled } from '@mui/system';

const StyledComponent = styled(CasinoIcon)({
  fontSize: "12px",
  marginRight: "10px"
})

export const StyledLogo = () => {

  return (
    <StyledComponent />
  );
}
