import styled from 'styled-components';

// 전체 그리드
export const GridWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

// main component 부분
export const Main = styled.main`
  display: flex;
  justify-content: space-between;

  margin: 22px auto 0 auto;
`;

export const Children = styled.div`
  background-color: gray;

  margin-right: 45px;

  width: 450px;
`;

export const UserArea = styled.div`
  background-color: gray;

  width: 320px;
  height: 43vh;
`;
