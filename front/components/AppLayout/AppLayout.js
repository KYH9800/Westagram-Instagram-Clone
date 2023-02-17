import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import Navbar from '../NavbarList/Navbar';

const AppLayout = ({ children }) => {
  return (
    <GridWrapper>
      <Navbar />
      <Main>
        <Children>{children}</Children>
        <UserArea>User</UserArea>
      </Main>
    </GridWrapper>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;

// 전체 그리드
const GridWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

// main component 부분
const Main = styled.main`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
`;

const Children = styled.div`
  background-color: yellow;

  margin-right: 60px;

  width: 500px;
`;

const UserArea = styled.div`
  background-color: gray;

  width: 280px;
  height: 45vh;
`;
