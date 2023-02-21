import React from 'react';
// styled-components
import {
  AvatarSt,
  RecommendMyInfoArea,
  MyLogoName,
  RecommendNameWrapper,
  RecommendUserID,
  RecommendUserName,
  ChangeBtn,
} from '../../styles/components/UserInfoSt';
import { CustomLink } from '../../styles/Customs/CustomSt';

const RecommendListEntry = () => {
  return (
    <div>
      <RecommendMyInfoArea>
        <MyLogoName>
          <CustomLink href="/user/rarax_k">
            <AvatarSt size={38} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </CustomLink>
          <RecommendNameWrapper>
            <RecommendUserID>
              <CustomLink href="/user/rarax_k">rarax_k</CustomLink>
            </RecommendUserID>
            <RecommendUserName>yoon_tae_woo님외 1명이 팔로우 합니다.</RecommendUserName>
          </RecommendNameWrapper>
        </MyLogoName>
        <div>
          <ChangeBtn>팔로우</ChangeBtn>
        </div>
      </RecommendMyInfoArea>
    </div>
  );
};

export default RecommendListEntry;
