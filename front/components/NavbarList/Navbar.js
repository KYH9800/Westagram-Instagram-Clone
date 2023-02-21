import React from 'react';
import Link from 'next/link';

import { Avatar } from 'antd';
import {
  HomeOutlined,
  SearchOutlined,
  CompassOutlined,
  PlaySquareOutlined,
  SendOutlined,
  HeartOutlined,
  PlusCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';

// styled-components
import { NavWrapper, MenuListWrapper, MenuList, WestaLogo } from '../../styles/components/NavbarSt';

const Navbar = () => {
  return (
    <NavWrapper>
      <Link href="/home">
        <div>
          <WestaLogo src="/images/Westagram.png" />
        </div>
      </Link>
      <MenuList>
        <Link href="/home">
          <HomeOutlined />
          <span>홈</span>
        </Link>
        <Link href="/myPage">
          <SearchOutlined />
          <span>검색</span>
        </Link>
        <Link href="/myPage">
          <CompassOutlined />
          <span>탐색 탭</span>
        </Link>
        <Link href="/myPage">
          <PlaySquareOutlined />
          <span>릴스</span>
        </Link>
        <Link href="/myPage">
          <SendOutlined />
          <span>메세지</span>
        </Link>
        <Link href="/myPage">
          <HeartOutlined />
          <span>알림</span>
        </Link>
        <Link href="/myPage">
          <PlusCircleOutlined />
          <span>만들기</span>
        </Link>
        <Link href="/myPage">
          {1 ? (
            <Avatar size={22} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          ) : (
            <Avatar size={22} icon={<UserOutlined />} />
          )}
          <span>프로필</span>
        </Link>
      </MenuList>
    </NavWrapper>
  );
};

export default Navbar;
