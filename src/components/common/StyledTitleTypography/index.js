import Typography from '@mui/material/Typography';

import { styled } from '@mui/system';

const StyledComponent = styled(Typography)({
  display: "-webkit-box",
  display: "-ms-flexbox",
  display: "flex",
  alignItems: "center",
  position: "relative",
  zIndex: "1",
  color: "#7e7e7e!important",
  textTransform: "uppercase",
  fontSize: "12px",
  fontWeight: "500",
  whiteSpace: "nowrap",
  transition: "color .3s cubic-bezier(.4,.44,.26,1.01)",
  fontFamily: "univia-pro,sans-serif",
  boxSizing: "inherit",
})

export const StyledTitleTypography = ({ children }) => {

  return (
    <StyledComponent
    variant="h6"
    noWrap
    component="a"
    href="/"
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
