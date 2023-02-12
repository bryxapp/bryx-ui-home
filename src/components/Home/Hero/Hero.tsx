import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import HeroImage from '../../../assets/images/hero.jpg';
import { Grid } from '@mui/material';

const HeroContainer = styled('div')`
    background: url(${HeroImage}) no-repeat center center;
    background-size: cover;
    margin: 2rem;
    color: #808080;
    text-align: center;
    height: 40vh;
`;

const HeroButton = styled(Button)`
    margin: 1rem;
    font-size: 1.25em;
    padding: 1rem;
`;

const Hero = () => {
    return (
        <HeroContainer>
            <div style={{ height: "100%", width: "100%", backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div style={{ height: '10vh' }} />
                <Grid container direction="row" justifyContent={"flex-end"} alignItems="center" >
                    <Grid item xs={14} md={6}>
                        <Typography variant="h2" fontWeight="bold" color={"white"}>
                            Stand Out From The Rest
                        </Typography>
                        <Typography variant="h4" color={"white"}>
                            Impress your customers with professional and visually stunning quotes
                        </Typography>
                        <HeroButton href="https://dashboard.bryxapp.com/" variant="contained" color="primary">
                            Get Started
                        </HeroButton>
                    </Grid>
                </Grid>
            </div>
        </HeroContainer>
    );
};

export default Hero;