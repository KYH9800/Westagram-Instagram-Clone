import React from 'react';
import Link from 'next/link';

import styled from 'styled-components';
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

const Navbar = () => {
  return (
    <NavWrapper>
      <MenuListWrapper>
        <div>
          <Link href="/home">
            <WestaLogo src="/images/Westagram.png" />
          </Link>
        </div>
        <MenuList>
          <div>
            <Link href="/home">
              <HomeOutlined />
              <span>홈</span>
            </Link>
          </div>
          <div>
            <Link href="/myPage">
              <SearchOutlined />
              <span>검색</span>
            </Link>
          </div>
          <div>
            <Link href="/myPage">
              <CompassOutlined />
              <span>탐색 탭</span>
            </Link>
          </div>
          <div>
            <Link href="/myPage">
              <PlaySquareOutlined />
              <span>릴스</span>
            </Link>
          </div>
          <div>
            <Link href="/myPage">
              <SendOutlined />
              <span>메세지</span>
            </Link>
          </div>
          <div>
            <Link href="/myPage">
              <HeartOutlined />
              <span>알림</span>
            </Link>
          </div>
          <div>
            <Link href="/myPage">
              <PlusCircleOutlined />
              <span>만들기</span>
            </Link>
          </div>
          <div>
            <Link href="/myPage">
              {1 ? (
                <Avatar size={22} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              ) : (
                <Avatar size={22} icon={<UserOutlined />} />
              )}
              <span>프로필</span>
            </Link>
          </div>
        </MenuList>
      </MenuListWrapper>
    </NavWrapper>
  );
};

export default Navbar;

// 메인 왼쪽 바
const NavWrapper = styled.div`
  width: 310px;
  height: 100vh;

  border-right: 1px solid #9b9b9b;
`;

// 메인 왼쪽 바 디테일
const MenuListWrapper = styled.div`
  margin-left: 20px;
  a {
    font-size: 17px;
    text-decoration: none;
    margin: 0 10px;
    color: black;
  }
`;

const MenuList = styled.div`
  div {
    margin-top: 20px;
  }
  span {
    margin-left: 10px;
  }
`;

// Westagram logo
const WestaLogo = styled.img`
  margin: 20px 0;
  height: 35px;
`;
