import React from 'react';
import Link from 'next/link';

// styled-components
import {
  LoginBox,
  LogoWrapper,
  WestaLogo,
  InputBox,
  Input,
  LoginBtn,
  Line,
  KakaoLoginBtnImg,
  NaverLoginBtnImg,
  NaverLogImg,
  NaverLogText,
  GoogleLoginBtnImg,
  GoogleLogImg,
  GoogleLogText,
  SingupBox,
  SingupBtn,
} from '../styles/signupPage';

// 회원가입 페이지 Component
const Signup = () => {
  return (
    <>
      <LoginBox>
        <label>Westagram Logo</label>
        <LogoWrapper>
          <WestaLogo src="/images/Westagram.png" />
        </LogoWrapper>

        <InputBox>
          <div>
            <label>이메일</label>
            <Input type="email" placeholder="이메일을 입력하세요" />
          </div>

          <div>
            <label>비밀번호 입력</label>
            <Input type="password" placeholder="비밀번호" />
          </div>

          <div>
            <LoginBtn>로그인</LoginBtn>
          </div>
        </InputBox>
        <Line>또는</Line>
        <div className="social-login-box">
          <div>
            <KakaoLoginBtnImg src="/images/kakao_login_medium_wide.png" />
          </div>
          <div>
            <NaverLoginBtnImg>
              <NaverLogImg src="/images/btnG_아이콘사각.png" />
              <NaverLogText>네이버 로그인</NaverLogText>
            </NaverLoginBtnImg>
          </div>
          <div>
            <GoogleLoginBtnImg>
              <GoogleLogImg src="/images/btn_google_light_normal_ios@2x.png" />
              <GoogleLogText>구글 로그인</GoogleLogText>
            </GoogleLoginBtnImg>
          </div>
        </div>
      </LoginBox>

      <SingupBox>
        <SingupBtn>
          계정이 없으신가요?
          <span>
            <Link href="/signup">가입하기</Link>
          </span>
        </SingupBtn>
      </SingupBox>
    </>
  );
};

export default Signup;
