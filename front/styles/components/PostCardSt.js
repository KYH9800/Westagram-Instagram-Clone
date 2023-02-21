import styled from 'styled-components';
import { HeartOutlined, MessageOutlined, ShareAltOutlined } from '@ant-design/icons';

/********************************
 * 좋아요/댓글/공유하기 아이콘 버튼 커스텀
 ********************************/
export const HeartOutlinedSt = styled(HeartOutlined)`
  cursor: pointer;
  font-size: 21px;
`;

export const MessageOutlinedSt = styled(MessageOutlined)`
  cursor: pointer;
  font-size: 21px;
`;

export const ShareAltOutlinedSt = styled(ShareAltOutlined)`
  cursor: pointer;
  font-size: 21px;
`;

/********************************
 * PostCard
 ********************************/
export const PostsBox = styled.div`
  margin-top: 20px;
`;

/********************************
 * PostCardEntry
 ********************************/
export const PostCard = styled.div`
  label {
    display: none;
  }
  margin: 35px 0;
  /* height: 67vh; */
`;

export const CardHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const CerdInfo = styled.div`
  font-size: 15px;
  margin-top: 6px;

  div {
    cursor: pointer;
    font-weight: 600;
    :hover {
      color: gray;
    }
  }

  span {
    cursor: pointer;
    font-size: 12px;
  }
`;

// 카드의 피드/이미지
export const PostCardImgWrapper = styled.div`
  img {
    width: 470px;
  }
`;

// 하트 / 댓글 / 공유 버튼 박스
export const ClickEventBtnBox = styled.div`
  margin: 5px 0;
  span {
    margin-right: 5px;
  }
`;

// testuser__w 외에 100명의 사용자가 좋아합니다.
export const LikeInfo = styled.div`
  margin: 5px 0;
  font-size: 13px;
  span {
    cursor: pointer;
    font-weight: 700;
  }
`;

// 게시글
export const Content = styled.div`
  margin: 5px 0;
  font-size: 13px;
`;

// 작성자 이름
export const UserName = styled.span`
  cursor: pointer;
  margin-right: 5px;
  font-weight: 700;
`;

// 게시글 더보기 버튼
export const ContentMore = styled.span`
  cursor: pointer;
  color: gray;
  font-size: 12px;
  font-weight: 500;
`;

// 댓글과 댓글 좋아요 표시
export const CommentBox = styled.div`
  margin: 5px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  font-size: 13px;
`;

export const CommentHeartOutlinedSt = styled(HeartOutlined)`
  cursor: pointer;
  font-size: 11px;
`;

// 댓글 3개 모두보기
export const CommentCount = styled.div`
  cursor: pointer;
  font-size: 13px;
  color: gray;
`;

// 댓글 input box
export const CommentInputBox = styled.div`
  position: relative;
  display: flex;
  margin: 5px 0;
`;

// 게시글 input 창
export const CommentInput = styled.input`
  width: 100%;

  outline: none;

  padding: 10px 5px;

  border: 0;
  border-bottom: 1px solid black;
`;

// 댓글 게시하기 버튼
export const CommentSubmitBtn = styled.a`
  cursor: pointer;
  position: absolute;
  right: -22px;
  bottom: 0;
  width: 50px;
  font-size: 13px;
  color: rgb(0 150 246);
  font-weight: 700;
  line-height: 35px;

  :hover {
    color: rgb(66 115 146);
  }

  :active {
    color: rgb(0 150 246);
  }
`;
