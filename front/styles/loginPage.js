import styled from 'styled-components';

// 로그인 박스
export const LoginBox = styled.div`
  text-align: center;

  label {
    display: none;
  }

  border: 1px solid #9b9b9b;
  border-radius: 3px;

  width: 400px;
  height: 47vh;

  margin: 8% auto 0 auto;
`;

// 로고
export const LogoWrapper = styled.div`
  text-align: center;
`;

// Westagram logo
export const WestaLogo = styled.img`
  margin: 20px 0 0 0;
  height: 50px;
`;

// 로그인 입력창, 로그인 버튼
export const InputBox = styled.div`
  text-align: center;
  margin-top: 5%;
`;

// Input 창 디자인
export const Input = styled.input`
  border: 1px solid #dedede;
  outline: none;

  width: 230px;
  height: 27px;

  margin-bottom: 2%;
  padding: 0 7px;

  list-style: none;
`;

// 로그인 버튼
export const LoginBtn = styled.div`
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

// '또는' 경계선
export const Line = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: rgba(0, 0, 0, 0.35);
  font-size: 14px;
  font-weight: 600;
  margin: 20px auto;
  width: 280px;

  :before {
    content: '';
    flex-grow: 1;
    margin: 0px 16px;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }

  :after {
    content: '';
    flex-grow: 1;
    margin: 0px 16px;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
  }
`;

// 카카오 로그인 버튼 이미지
export const KakaoLoginBtnImg = styled.img`
  cursor: pointer;
  height: 38px;

  :hover {
    box-shadow: 1px 1px 3.3px -1px;
  }
`;

// 네이버 로그인 버튼 이미지
export const NaverLoginBtnImg = styled.div`
  cursor: pointer;
  text-align: start;
  background-color: #03c75a;

  border-radius: 4.5px;

  width: 253px;
  margin: auto;

  display: flex;

  :hover {
    box-shadow: 1px 1px 3.3px -1px;
  }
`;

// 네이버 로고 이미지
export const NaverLogImg = styled.img`
  height: 30px;
  margin: 5px;
`;

// 네이버 로그인 글자
export const NaverLogText = styled.span`
  color: #fff;
  font-size: 13px;
  line-height: 40px;
  padding-left: 63px;
`;

// 구글 로그인 버튼 이미지
export const GoogleLoginBtnImg = styled.div`
  cursor: pointer;

  box-shadow: 1px 1px 3.3px -1px;

  text-align: start;
  background-color: #ffffff;

  border-radius: 4.5px;

  width: 253px;
  margin: 5.3px auto;

  display: flex;

  :hover {
    box-shadow: 1px 1px 3.3px;
  }
`;

// 구글 로고 이미지
export const GoogleLogImg = styled.img`
  height: 30px;
  margin: 5px;
`;

// 구글 로그인 글자
export const GoogleLogText = styled.span`
  color: black;
  font-size: 13px;
  line-height: 40px;
  padding-left: 63px;
`;

// 회원가입 박스
export const SingupBox = styled.div`
  text-align: center;

  border: 1px solid #9b9b9b;
  border-radius: 3px;

  width: 400px;
  height: 5vh;

  margin: 1.3% auto;
`;

// 가입하기 버튼
export const SingupBtn = styled.p`
  font-weight: 600;
  font-size: 15px;

  a {
    text-decoration: none;
    margin-left: 5px;
    color: #5e68fb;
  }
`;
