import { useSelector } from 'react-redux';
import { AppBar, Toolbar } from '@mui/material';
import NavLink from '../NavLink/NavLink';
import LogoutButton from '../../auth/components/LogoutButton/LogoutButton';

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <AppBar>
      <Toolbar sx={{ width: '100%' }}>
        {user ? (
          <LogoutButton />
        ) : (
          <>
            <NavLink to='/signin'>Sign In</NavLink>
            <NavLink to='signup'>Sign Up</NavLink>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
