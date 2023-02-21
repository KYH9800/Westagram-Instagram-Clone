import React from 'react';
// styled-components
import { UserInfoFooterSt } from '../../styles/components/UserInfoSt';

const UserInfoFooter = () => {
  return (
    <UserInfoFooterSt>
      <div>
        <p>
          <a href="https://github.com/KYH9800/Westagram-Instagram-Clone" target="_blank">
            Github
          </a>
          ∙
          <a
            href="https://planet-aletopelta-fbc.notion.site/22-5-5-531-9b589df6dafb4797924f3cf2002b8c64"
            target="_blank">
            Notion 이력서
          </a>
          ∙<a href="tel:010-9800-5226">010-9800-5226</a>
          <br />
          <a href="mailto:sksgur3217@gmail.com">sksgur3217@gmail.com</a>
        </p>
      </div>
      <div>
        <p>© 2023 WESTAGRAM FROM 고윤혁</p>
      </div>
    </UserInfoFooterSt>
  );
};

export default UserInfoFooter;
