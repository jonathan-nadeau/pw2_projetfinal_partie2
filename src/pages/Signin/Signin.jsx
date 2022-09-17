import { Container, Typography, Box } from '@mui/material';
import SigninForm from '../../auth/components/SigninForm/SigninForm';

const Signup = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box component='div' sx={{ width: '50%' }}>
        <Typography component='h1' variant='h4' gutterBottom>
          Sign In
        </Typography>
        <SigninForm />
      </Box>
    </Container>
  );
};

export default Signup;
