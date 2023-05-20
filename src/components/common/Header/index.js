import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CasinoIcon from '@mui/icons-material/Casino';

import styles from "../../../styles/global.module.css";

export const Header = () => {
  const [user, setUser] = useState(null);

  const pages = [
    { section: "Raffle", href: "/raffle" },
    { section: "Coinflip", href: "/coinflip" },
    { section: "Account", href: "/account"}
  ];

  return (
    <AppBar position="static" className={styles.customHeader}>
      <Container>
        <Toolbar disableGutters className={styles.customToolbar}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className={styles.cPlatformTitle}
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <CasinoIcon className={styles.logo} />
            RSI Great Luck
          </Typography>

          <Box className={styles.customSections} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages?.map(({ section, href }) => (
              <Typography
              key={section}
              variant="h6"
              noWrap
              component='a'
              href={href}
              className={styles.cPlatformTitle}
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
              >
                {section}
              </Typography>
            ))}
            <div className={`${styles.loggedAccount} ${user ? styles.loggedIn : styles.loggedOut} ${user ? styles.loggedInShadow : styles.loggedOutShadow}`}></div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}