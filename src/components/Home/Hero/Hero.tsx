import { Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

    /* background: url(../../assets/images/hero.jpg) no-repeat center center; */

const HeroContainer = styled('div')`
    background-size: cover;
    margin: 2rem;
    color: #808080;
    text-align: center;
`;

const HeroButton = styled(Button)`
    margin: 1rem;
    font-size: 1.25em;
    padding: 1rem;
`;


export const Hero = () => {
    return (
        <Container>
            <HeroContainer>
                <Typography variant="h2" fontWeight="bold">
                    Transform Your Quotes
                </Typography>
                <Typography variant="h3">
                    Impress your customers with professional and visually stunning quotes
                </Typography>
                <HeroButton href="https://dashboard.bryxapp.com/" variant="contained" color="secondary">
                    Get Started
                </HeroButton>
            </HeroContainer>
        </Container>
    );
};