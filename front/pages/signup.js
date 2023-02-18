import React from 'react';
import Link from 'next/link';

// styled-components
import { SingupBoxWrapper, SignupBtn, LoginBox, LoginBtn, GuideTag } from '../styles/pages/signupPage';
import { LogoWrapper, WestaLogo, InputBox, Input, Line } from '../styles/pages/loginPage';

// components
import SocialLogin from '../components/SocialLogin/SocialLogin';

// 회원가입 페이지 Component
const Signup = () => {
  // TODO...

  return (
    <>
      <SingupBoxWrapper>
        <label>Westagram Logo</label>
        <LogoWrapper>
          <WestaLogo src="/images/Westagram.png" />
        </LogoWrapper>

        <GuideTag>
          <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>
        </GuideTag>

        <label>소셜 로그인 컴포넌트</label>
        <SocialLogin />
        <Line>또는</Line>

        <InputBox>
          <div>
            <label>이메일</label>
            <Input type="email" placeholder="이메일을 입력하세요" />
          </div>

          <div>
            <label>성명</label>
            <Input type="text" placeholder="성명" />
          </div>

          <div>
            <label>사용자 이름</label>
            <Input type="text" placeholder="사용자 이름" />
          </div>

          <div>
            <label>비밀번호 입력</label>
            <Input type="password" placeholder="비밀번호" />
          </div>

          <div>
            <SignupBtn>가입</SignupBtn>
          </div>
        </InputBox>

        <GuideTag>
          <p>
            가입하시면 Westargram의 <span>약관</span>, <span>데이터 정책</span>
          </p>
          <p>
            및 <span>쿠키 정책</span>에 동의하게 됩니다.
          </p>
        </GuideTag>
      </SingupBoxWrapper>

      <LoginBox>
        <LoginBtn>
          계정이 있으신가요?
          <span>
            <Link href="/">로그인</Link>
          </span>
        </LoginBtn>
      </LoginBox>
    </>
  );
};

export default Signup;
