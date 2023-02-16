import React from 'react';

import styled from 'styled-components';

const Login = () => {
  return (
    <LoginBox>
      <label>Westagram Logo</label>
      <LogoWrapper>
        <WestaLogo src="/images/Westagram.png" />
      </LogoWrapper>

      <div>
        <div>
          <label>이메일</label>
          <span>email</span>
          <input type="email" placeholder="이메일을 입력해주세요" />
        </div>

        <div>
          <label>비밀번호 입력</label>
          <span>password</span>
          <input type="password" placeholder="비밀번호를 입력해주세요" />
        </div>
      </div>

      <div>
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </LoginBox>
  );
};

export default Login;

const LoginBox = styled.div`
  label {
    display: none;
  }

  border: 1px solid #9b9b9b;
  border-radius: 3px;

  width: 400px;
  height: 50vh;

  margin: 8% auto;
`;

const LogoWrapper = styled.div`
  text-align: center;
`;

// Westagram logo
const WestaLogo = styled.img`
  margin: 10px 0;
  height: 40px;
`;
