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
  SingupBox,
  SingupBtn,
} from '../styles/pages/loginPage';

// components
import SocialLogin from '../components/SocialLogin/SocialLogin';

// 로그인 페이지 Component
const Login = () => {
  // TODO...

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
            <Link href="/home" style={{ 'text-decoration': 'none' }}>
              <LoginBtn>로그인</LoginBtn>
            </Link>
          </div>
        </InputBox>

        <label>소셜 로그인 컴포넌트</label>
        <Line>또는</Line>
        <SocialLogin />
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

export default Login;
