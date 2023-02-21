import React from 'react';
import PropTypes from 'prop-types';

// components
import Navbar from '../NavbarList/Navbar';

// styled-components
import { Main, Children } from '../../styles/components/AppLayoutSt';

const AppLayout = ({ children }) => {
  // TODO...

  return (
    <>
      <Navbar />
      <Main>
        <Children>{children}</Children>
      </Main>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
