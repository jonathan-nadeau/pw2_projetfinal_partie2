import AuthService from '../../service/AuthService';
import { Button } from '@mui/material';
import { resetUser } from '../../authSlice/authSlice';
import { useDispatch } from 'react-redux';

const authService = new AuthService();

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    await authService.logout();
    dispatch(resetUser());
  };

  return (
    <Button variant='contained' color='secondary' onClick={handleClick}>
      Logout
    </Button>
  );
};

export default LogoutButton;
