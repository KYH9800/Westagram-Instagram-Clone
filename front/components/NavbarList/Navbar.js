import React, { useState } from 'react';
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
import { NavWrapper, MenuList, WestaLogo, MakeButton } from '../../styles/components/NavbarSt';
import { ModalSt } from '../../styles/components/AddPostModalSt';

// 게시글 생성 모달창
import AddPostModal from '../AddPost/AddPostModal';

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
        <Link href="/search">
          <SearchOutlined />
          <span>검색</span>
        </Link>
        <Link href="/explore">
          <CompassOutlined />
          <span>탐색 탭</span>
        </Link>
        <Link href="/reels">
          <PlaySquareOutlined />
          <span>릴스</span>
        </Link>
        <Link href="/direct">
          <SendOutlined />
          <span>메세지</span>
        </Link>
        <Link href="/myPage">
          <HeartOutlined />
          <span>알림</span>
        </Link>

        <MakeButton onClick={() => setOpen(true)}>
          <PlusCircleOutlined />
          <span>만들기</span>
        </MakeButton>
        <ModalSt
          title="새 게시물 만들기"
          centered
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={1000}>
          <AddPostModal />
        </ModalSt>

        <Link href="/user/kyh0506_">
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
