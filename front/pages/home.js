import React from 'react';
// AppLayout
import AppLayout from '../components/AppLayout/AppLayout';
// components
import Stories from '../components/Home/Stories';
import PostCard from '../components/Home/PostCard';
// styled-components
import { HomeWrapper, GridWrapper, UserArea } from '../styles/pages/homePage';
import UserInfoCard from '../components/UserInfo/UserInfoCard';

// 메인 Home 화면 컴포넌트
const Home = () => {
  return (
    <AppLayout>
      <GridWrapper>
        <HomeWrapper>
          <label>인스타그램 쇼츠</label>
          <Stories />
          <label>인스타그램 피드</label>
          <PostCard />
        </HomeWrapper>
        <UserArea>
          <UserInfoCard />
        </UserArea>
      </GridWrapper>
    </AppLayout>
  );
};

export default Home;
