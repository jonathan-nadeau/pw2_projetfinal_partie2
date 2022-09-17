import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../service/AuthService';
import { setUser } from '../../authSlice/authSlice';

const authService = new AuthService();

const AppContainer = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAuth = useCallback(
    (user) => {
      if (user) {
        console.log(`User is connected`);
        dispatch(setUser(user.email));
        navigate("/user")
      } else {
        navigate('/signup');
        console.log(`User is disconnected`);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    authService.onAuthChanged(onAuth);
  }, [onAuth]);

  return <>{children}</>;
};

export default AppContainer;
