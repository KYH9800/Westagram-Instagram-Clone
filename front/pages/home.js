import React from 'react';
// AppLayout
import AppLayout from '../components/AppLayout/AppLayout';
// components
import Stories from '../components/Home/Stories';
import PostCard from '../components/Home/PostCard';
// styled-components
import { HomeWrapper } from '../styles/pages/homePage';

// 메인 Home 화면 컴포넌트
const Home = () => {
  return (
    <AppLayout>
      <HomeWrapper>
        <label>인스타그램 쇼츠</label>
        <Stories />
        <label>인스타그램 피드</label>
        <PostCard />
      </HomeWrapper>
    </AppLayout>
  );
};

export default Home;
