import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import Logo from './Logo/Logo';
import { styled } from '@mui/material/styles';

const NavLink = styled(Link)`
  font-size: 1.25em;
  margin: 0 1em;
`;

const NavButton = styled(Button)`
  font-size: 1.25em;
  margin: 0 1em;
`;

const NavigationBar = () => {
  return (
    <AppBar
      position="static"
      color='transparent'
      elevation={0}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Link href="/" underline='none'>
          <Logo />
        </Link>
        <Typography variant="h3" fontWeight="bold" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          BRYX
        </Typography>
        <nav>
          <NavLink
            variant="button"
            color="text.primary"
            underline='none'
            href="/features"
          >
            Features
          </NavLink>
          <NavLink
            variant="button"
            color="text.primary"
            underline='none'
            href="/company"
          >
            Company
          </NavLink>
          <NavLink
            variant="button"
            color="text.primary"
            underline='none'
            href="/support"
          >
            Support
          </NavLink>
        </nav>
        <NavButton variant="text" color="primary">
          Sign In
        </NavButton>
        <NavButton href="https://dashboard.bryxapp.com/" variant="contained" color="primary">
          Get Started
        </NavButton>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;