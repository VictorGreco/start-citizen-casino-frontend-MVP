import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CasinoIcon from '@mui/icons-material/Casino';

import styles from "../../../styles/global.module.css";


export const Footer = () => {

  return (
    <footer className={styles.customFooter} >
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
            <copy> © 2012-2023</copy>
          </Typography>
        </Toolbar>
    </footer>
  );
}
