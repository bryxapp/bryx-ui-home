import styles from './Hero.module.css';
import { Button, Container, Typography } from '@mui/material';

export const Hero = () => {
    return (
        <Container>
            <div className={styles.hero}>
                    <Typography variant="h4" fontWeight="bold">
                        Transform Your Quotes
                    </Typography>
                    <Typography variant="h5">
                        Impress your customers with professional and visually stunning quotes
                    </Typography>
                    <Button href="#" variant="contained" color="secondary" className={styles.hero_button}>
                        Get Started
                    </Button>
            </div>
        </Container>
    );
};