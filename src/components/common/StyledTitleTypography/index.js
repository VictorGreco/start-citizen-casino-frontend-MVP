import Typography from '@mui/material/Typography';

import { styled } from '@mui/system';

const StyledComponent = styled(Typography)({
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

export const StyledTitleTypography = ({ children, href }) => {

  return (
    <StyledComponent
    variant="h6"
    noWrap
    component="a"
    href={href}
    sx={{
        mr: 2,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
    }}
    >
    {children}
    </StyledComponent>

  );
}
