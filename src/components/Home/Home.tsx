import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import styled from '@mui/material/styles/styled'
import Hero from './Hero/Hero';

const StyledDiv = styled('div')({
    flexGrow: 1,
    padding: 2,
});
const StyledCard = styled(Card)({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: 2 + 'rem',

});
const StyledCardMedia = styled(CardMedia)({
    paddingTop: '56.25%', // 16:9
});
const StyledCardContent = styled(CardContent)({
    flexGrow: 1,
});

const Home = () => {
    return (
        <StyledDiv>
            <Grid container spacing={4} justifyContent='center' >
                <Grid item xs={12}>
                    <Hero />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <StyledCard>
                        <StyledCardMedia
                            image="https://source.unsplash.com/8KfCR12oeUM"
                            title="Custom Templates"
                        />
                        <StyledCardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Custom Templates
                            </Typography>
                            <Typography>
                                Create visually stunning proposals in no time with our Custom Template Builder.
                                Choose from a variety of graphics, text, and shapes to design a template that accurately represents your brand.
                                Say goodbye to boring proposals and hello to professional presentations with Bryx.
                            </Typography>
                        </StyledCardContent>
                    </StyledCard>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <StyledCard>
                        <StyledCardMedia
                            image="https://source.unsplash.com/TXotsqdpX2g"
                            title="Create Estimates"
                        />
                        <StyledCardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Instantly Create Estimates
                            </Typography>
                            <Typography>
                                Streamline your proposal process with our Instant Estimate Generator.
                                Simply select a template, fill out the form with project details, and generate a stunning PDF proposal in seconds.
                                Say goodbye to manual inputs and hello to quick and accurate estimates with Bryx.
                            </Typography>
                        </StyledCardContent>
                    </StyledCard>
                </Grid>
            </Grid>
        </StyledDiv>
    );
};

export default Home;
