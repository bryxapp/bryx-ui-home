import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/WorkOutline';

const CompanyContainer = styled('div')`
    padding: 2rem 0;
`;

const FounderButton = styled(Button)`
    margin: .5rem;
    font-size: 1em;
    padding: .5rem;
`;

const Company = () => {
    return (
        <CompanyContainer>
            <Container>
                <Typography variant="h2" align="center">
                    About Our Company
                </Typography>
                <div style={{ height: '5vh' }} />
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            Our Mission
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Our mission is to help businesses transform their quotes into professional and visually stunning documents, impressing their customers and increasing conversions.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>
                            About the Founder
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Bryan Thomas is the founder and of the bryx application and platform. He has over 4 years of experience in the field of software development and has a passion for creating reliable and innovative products.
                        </Typography>
                        <FounderButton href="https://www.linkedin.com/in/bryan-m-thomas/" variant="outlined" color="secondary">
                            <WorkIcon style={{ marginRight: '8px' }} /> LinkedIn
                        </FounderButton>
                        <FounderButton href="https://github.com/BryanMThomas" variant="outlined" color="secondary">
                            <CodeIcon style={{ marginRight: '8px' }} />GitHub
                        </FounderButton>
                        <FounderButton href="mailto:thomas.bryan.m@gmail.com" variant="outlined" color="secondary">
                            <EmailIcon style={{ marginRight: '8px' }} />Get in Touch
                        </FounderButton>
                    </Grid>
                </Grid>
            </Container>
        </CompanyContainer>
    );
};

export default Company;