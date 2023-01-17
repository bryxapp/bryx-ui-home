import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';
import Logo from './Logo/Logo';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
  return (
    <AppBar
      position="static"
      color='transparent'
      elevation={0}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Logo />
        <Typography variant="h3" fontWeight="bold" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          BRYX
        </Typography>
        <nav>
          <Link 
            className={styles.nav_link}
            variant="button"
            color="text.primary"
            underline='none'
            href="/features"
          >
            Features
          </Link>
          <Link className={styles.nav_link}
            variant="button"
            color="text.primary"
            underline='none'
            href="/company"
          >
            Company
          </Link>
          <Link className={styles.nav_link}
            variant="button"
            color="text.primary"
            underline='none'
            href="/support"
          >
            Support
          </Link>
        </nav>
        <Button variant="text" color="secondary" className={styles.nav_button}>
          Sign In
        </Button>
        <Button href="#" variant="contained" color="secondary" className={styles.nav_button}>
          Get Started
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavigationBar;