import { Link } from 'react-router-dom';

import React from 'react';

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      style={{
        color: 'inherit',
        textDecoration: 'none',
        fontWeight: '700',
        marginRight: '1rem',
      }}
    >
      {children}
    </Link>
  );
};

export default NavLink;
