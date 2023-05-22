import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

import { StyledLogo } from "../StyledLogo";
import { StyledTitleTypography } from "../StyledTitleTypography";
import { StyledToolbar } from "../StyledToolbar";
import { LogginLight } from "../LogginLight";
import { StyledBox } from "../StyledBox";
import { StyledDrawer } from '../StyledDrawer';

import { styled } from '@mui/system';
import { StyledButton } from '../StyledButton';

const StyledComponent = styled(AppBar)({
  backgroundColor: "#131a21!important",
  height: "37px!important"
})

export const StyledHeader = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { section: "Raffle", href: "/raffle" },
    { section: "Coinflip", href: "/coinflip" },
    { section: "Account" }
  ];

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <StyledComponent position="static">
      <Container>
        <StyledToolbar disableGutters>
          <StyledTitleTypography>
            <StyledLogo />
            RSI Great Luck
          </StyledTitleTypography>

          <StyledBox>
            {pages?.map(({ section, href }) => {

              return href ?
              <StyledTitleTypography
                key={section}
                href={href}
              >
                {section}
              </StyledTitleTypography>
              :
              <StyledButton
                key={section}
                onClickHandler={toggleDrawer}
              >
                {section}
              </StyledButton>
            })}
            <LogginLight user={user} isOpen={isOpen} />
          </StyledBox>

          <StyledDrawer isOpen={isOpen} toggleDrawer={toggleDrawer}>
            div
          </StyledDrawer>
        </StyledToolbar>
      </Container>
    </StyledComponent>
  );
}