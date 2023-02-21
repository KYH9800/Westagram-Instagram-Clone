import React from 'react';
// styled-components
import {
  HeartOutlinedSt,
  MessageOutlinedSt,
  ShareAltOutlinedSt,
  PostCard,
  CardHeader,
  CerdInfo,
  PostCardImgWrapper,
  ClickEventBtnBox,
  LikeInfo,
  Content,
  UserName,
  ContentMore,
  CommentCount,
  CommentBox,
  CommentHeartOutlinedSt,
  CommentInputBox,
  CommentInput,
  CommentSubmitBtn,
} from '../../styles/components/PostCardSt';
// Avatar
import { AvatarSt } from '../../styles/components/UserInfoSt';

const PostCardEntry = () => {
  return (
    <PostCard>
      <CardHeader>
        <AvatarSt size={42} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
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
          <HeartOutlinedSt style={{ fontSize: '21px' }} />
        </span>
        <span>
          <MessageOutlinedSt style={{ fontSize: '21px' }} />
        </span>
        <span>
          <ShareAltOutlinedSt style={{ fontSize: '21px' }} />
        </span>
      </ClickEventBtnBox>
      <LikeInfo>
        <UserName>rarax__w</UserName> 외에 <span>100명</span>의 사용자가 좋아합니다.
      </LikeInfo>
      <Content>
        <UserName>rarax__w</UserName> 날씨가 좋다 <ContentMore>...더보기</ContentMore>
      </Content>
      <CommentCount>댓글 3개 모두보기</CommentCount>
      <CommentBox>
        <div>
          <UserName>rarax__w</UserName> <span>댓글을 답니다</span>
        </div>
        <div>
          <CommentHeartOutlinedSt />
        </div>
      </CommentBox>
      <CommentInputBox>
        <CommentInput type="text" placeholder="댓글 달기..." />
        <CommentSubmitBtn>게시</CommentSubmitBtn>
      </CommentInputBox>
    </PostCard>
  );
};

export default PostCardEntry;
