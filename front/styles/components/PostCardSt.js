import styled from 'styled-components';

// PostCard
export const PostsBox = styled.div`
  margin-top: 20px;
`;

// PostCardEntry
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
    font-weight: 600;
  }

  span {
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
    font-weight: 600;
  }
`;

export const Content = styled.div`
  margin: 5px 0;
  font-size: 13px;
  span {
    margin-right: 5px;
  }
`;

// 댓글과 댓글 좋아요 표시
export const CommentBox = styled.div`
  margin: 5px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  font-size: 13px;
`;

// 댓글 3개 모두보기
export const CommentCount = styled.div`
  font-size: 13px;
  color: gray;
`;

// 댓글 input box
export const CommentInputBox = styled.div`
  margin: 5px 0;
`;

//
export const CommentInput = styled.input`
  width: 100%;

  outline: none;

  padding: 10px 5px;

  border: 0;
  border-bottom: 1px solid black;
`;
