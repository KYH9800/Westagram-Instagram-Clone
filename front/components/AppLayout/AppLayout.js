import React from 'react';
import PropTypes from 'prop-types';

// components
import Navbar from '../NavbarList/Navbar';
import UserInfoCard from '../UserInfo/UserInfoCard';

// styled-components
import { GridWrapper, Main, Children, UserArea } from '../../styles/components/AppLayoutSt';

const AppLayout = ({ children }) => {
  // TODO...

  return (
    <GridWrapper>
      <Navbar />
      <Main>
        <Children>{children}</Children>
        <UserArea>
          <UserInfoCard />
        </UserArea>
      </Main>
    </GridWrapper>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
