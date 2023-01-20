import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const Features = () => {
    return (
        <Container>
            <Grid container>
                <Typography variant="h2" align="center">
                    Features
                </Typography>
                <div style={{ height: '8vh' }} />
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Templates Creation
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Create graphical templates that can be repeatedly filled in with generated forms to create estimates that set you apart from the competition. Our app allows you to easily design and save templates that can be used again and again, saving you time and effort while making your estimates stand out.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Create Estimates
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Easily access forms that you or your employees can fill out quickly to generate unique estimates from the templates created. Our app streamlines the estimate creation process, allowing you to create professional estimates in just a few minutes.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Past Estimates
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Keep track of all of your past estimates in one place. Our app allows you to easily access and view all of your past estimates, allowing you to easily find and edit them as needed.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" gutterBottom>
                        Sharing
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Easily share estimates with your clients. Our app allows you to easily share estimates with your clients, allowing you to send them to them via email or text message.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Features;