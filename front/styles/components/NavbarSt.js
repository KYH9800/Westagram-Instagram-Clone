import styled from 'styled-components';

// 메인 왼쪽 바
export const NavWrapper = styled.div`
  width: 310px;
  height: 100vh;

  border-right: 1px solid #9b9b9b;
`;

// 메인 왼쪽 바 디테일
export const MenuListWrapper = styled.div`
  margin-left: 20px;
`;

export const MenuList = styled.div`
  span {
    font-size: 17px;
    margin-left: 10px;
  }
  a {
    display: block;
    font-size: 17px;
    text-decoration: none;
    margin: 0 10px;
    padding: 15px 0;
    color: black;
    border-radius: 30px;
    :hover {
      background-color: #e6e6e68f;
    }
  }
`;

// Westagram logo
export const WestaLogo = styled.img`
  margin: 30px 0 20px 0;
  height: 30px;
`;
