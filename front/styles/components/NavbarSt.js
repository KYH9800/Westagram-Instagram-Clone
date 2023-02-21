import styled from 'styled-components';

// 메인 왼쪽 바
export const NavWrapper = styled.div`
  position: fixed;
  top: 0;

  z-index: 999;
  background-color: #fff;

  width: 310px;
  height: 100vh;

  border-right: 1px solid #9b9b9b;
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
  margin: 20px 0 20px 12px;
  height: 30px;
`;
