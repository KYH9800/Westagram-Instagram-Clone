import styled from 'styled-components';

// 로그인 박스
export const SingupBoxWrapper = styled.div`
  text-align: center;

  label {
    display: none;
  }

  border: 1px solid #9b9b9b;
  border-radius: 3px;

  width: 400px;
  height: 62vh;

  margin: 8% auto 0 auto;
`;

// 로고
export const LogoWrapper = styled.div`
  text-align: center;
`;

// 회원가입 버튼
export const SignupBtn = styled.div`
  cursor: pointer;
  width: 250px;
  height: 36px;
  line-height: 36px;

  margin: auto;

  background-color: #008ce7;
  color: #fff;

  font-weight: 500;
  font-size: 15px;

  border: #008ce7;
  border-radius: 3px;

  :hover {
    background-color: #0685d9;
  }
`;

// 회원가입 박스
export const LoginBox = styled.div`
  text-align: center;

  border: 1px solid #9b9b9b;
  border-radius: 3px;

  width: 400px;
  height: 5vh;

  margin: 1.3% auto;
`;

// 가입하기 버튼
export const LoginBtn = styled.p`
  font-weight: 600;
  font-size: 15px;

  a {
    text-decoration: none;
    margin-left: 5px;
    color: #5e68fb;
  }
`;

export const GuideTag = styled.div`
  color: gray;
  font-size: 15px;
  font-weight: 400;
  span {
    font-weight: 700;
  }
`;
