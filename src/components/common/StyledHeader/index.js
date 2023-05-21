import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

import { StyledLogo } from "../StyledLogo";
import { StyledTitleTypography } from "../StyledTitleTypography";
import { StyledToolbar } from "../StyledToolbar";
import { LogginLight } from "../LogginLight";
import { StyledBox } from "../StyledBox";

import { styled } from '@mui/system';

const StyledComponent = styled(AppBar)({
  backgroundColor: "#131a21!important",
  height: "37px!important"
})

export const StyledHeader = () => {
  const [user, setUser] = useState(null);

  const pages = [
    { section: "Raffle", href: "/raffle" },
    { section: "Coinflip", href: "/coinflip" },
    { section: "Account", href: "/account"}
  ];

  return (
    <StyledComponent position="static">
      <Container>
        <StyledToolbar disableGutters>
          <StyledTitleTypography>
            <StyledLogo />
            RSI Great Luck
          </StyledTitleTypography>

          <StyledBox>
            {pages?.map(({ section, href }) => (
              <StyledTitleTypography
              key={section}
              href={href}
              >
                {section}
              </StyledTitleTypography>
            ))}
            <LogginLight user={user} />
          </StyledBox>
        </StyledToolbar>
      </Container>
    </StyledComponent>
  );
}