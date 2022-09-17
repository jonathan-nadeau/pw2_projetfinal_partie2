import { Container, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const User = () => {
  const user = useSelector((state) => state.auth.user);
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
          Welcome {user}
        </Typography>
      </Box>
    </Container>
  );
};

export default User;
