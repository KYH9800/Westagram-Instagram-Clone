import React from 'react';

// styled-components
import {
  KakaoLoginBtnImg,
  NaverLoginBtnImg,
  NaverLogImg,
  NaverLogText,
  GoogleLoginBtnImg,
  GoogleLogImg,
  GoogleLogText,
} from '../../styles/loginPage';

const SocialLogin = () => {
  // TODO...

  return (
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
  );
};

export default SocialLogin;
