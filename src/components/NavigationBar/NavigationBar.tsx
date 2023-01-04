import styles from './NavigationBar.module.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import logoSvg from '../../assets/bryx_logo.svg';

export const NavigationBar = () => {
  return (
    <Navbar className={styles.navbar}>
    <Container>
      <Navbar.Brand href="/" className={styles.navbarBrand}>
        <img
          alt=""
          src = {logoSvg}
          className="d-inline-block align-top"
        />{' '}
        BRYX
      </Navbar.Brand>
      <Button variant="outline-dark">Login</Button>
    </Container>
  </Navbar>
  );
};