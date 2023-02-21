import React from 'react';
// styled-components
import {
  PostCard,
  CardHeader,
  CerdInfo,
  PostCardImgWrapper,
  ClickEventBtnBox,
  LikeInfo,
  Content,
  CommentCount,
  CommentBox,
  CommentInputBox,
  CommentInput,
} from '../../styles/components/PostCardSt';
// antd
import { Avatar } from 'antd';
import { HeartOutlined, MessageOutlined, ShareAltOutlined } from '@ant-design/icons';

const PostCardEntry = () => {
  return (
    <PostCard>
      <CardHeader>
        <Avatar size={42} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <CerdInfo>
          <div>rarax__x</div>
          <span>위치</span>
        </CerdInfo>
      </CardHeader>
      <PostCardImgWrapper>
        <img src="https://image.yes24.com/goods/107995463/XL"></img>
      </PostCardImgWrapper>
      <ClickEventBtnBox>
        <span>
          <HeartOutlined style={{ fontSize: '21px' }} />
        </span>
        <span>
          <MessageOutlined style={{ fontSize: '21px' }} />
        </span>
        <span>
          <ShareAltOutlined style={{ fontSize: '21px' }} />
        </span>
      </ClickEventBtnBox>
      <LikeInfo>
        <span>rarax__w</span> 외에 <span>100명</span>의 사용자가 좋아합니다.
      </LikeInfo>
      <Content>
        <span>rarax__w</span> 날씨가 좋다
      </Content>
      <CommentCount>댓글 3개 모두보기</CommentCount>
      <CommentBox>
        <div>
          <span>rarax__w</span> <span>댓글을 답니다</span>
        </div>
        <div>
          <HeartOutlined style={{ fontSize: '11px' }} />
        </div>
      </CommentBox>
      <CommentInputBox>
        <CommentInput type="text" placeholder="댓글 달기..." />
      </CommentInputBox>
    </PostCard>
  );
};

export default PostCardEntry;
