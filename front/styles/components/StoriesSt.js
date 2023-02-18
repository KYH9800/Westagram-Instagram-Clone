import styled from 'styled-components';

// Stories
export const StoriesWrapper = styled.div`
  display: flex;
  overflow: auto;
  white-space: nowrap;
  // 스크롤바 숨기기
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
// StoriesEntry
export const IconWrapper = styled.div`
  margin: 5px 5px;
`;
// StoriesEntry
export const UserNickname = styled.div`
  font-size: 12px;
  margin-top: 8px;
`;
