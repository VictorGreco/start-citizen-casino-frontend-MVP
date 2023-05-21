import { StyledLogo } from "../StyledLogo";
import { StyledTitleTypography } from "../StyledTitleTypography";
import { StyledToolbar } from "../StyledToolbar";

import { styled } from '@mui/system';

const StyledComponent = styled("footer")({
  display: "flex!important",
  justifyContent: "center!important",
  boxSizing: "border-box!important",
  backgroundColor: "#1a252d!important",
  height: "85px!important"
})

export const StyledFooter = () => {

  return (
    <StyledComponent >
        <StyledToolbar disableGutters>
          <StyledTitleTypography href="/">
            <StyledLogo />
            RSI Great Luck
            <copy> © 2012-2023</copy>
          </StyledTitleTypography>
        </StyledToolbar>
    </StyledComponent>
  );
}
