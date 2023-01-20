import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
const Support = () => {
    return (
        <Container>
            <Typography variant="h2" align="center">
                Support
            </Typography>
            <div style={{ height: '5vh' }} />
            <Typography variant="h4" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom>
                If you have any questions or concerns, please feel free to contact us at <a href="mailto:thomas.bryan.m@gmail.com">thomas.bryan.m@gmail.com</a>
            </Typography>
        </Container>
    );
};

export default Support;