import { StyledLogo } from "../StyledLogo";
import { StyledTitleTypography } from "../StyledTitleTypography";
import { StyledToolbar } from "../StyledToolbar";

import { styled } from '@mui/system';

const StyledComponent = styled("footer")({
  display: "flex",
  justifyContent: "center",
  boxSizing: "border-box",
  backgroundColor: "#1a252d",
  height: "85px"
})

export const StyledFooter = () => {

  return (
    <StyledComponent >
        <StyledToolbar disableGutters>
          <StyledTitleTypography>
            <StyledLogo />
            RSI Great Luck
            <copy> © 2012-2023</copy>
          </StyledTitleTypography>
        </StyledToolbar>
    </StyledComponent>
  );
}
