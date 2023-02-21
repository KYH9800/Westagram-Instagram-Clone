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

const RecommendListEntry = () => {
  return (
    <div>
      <RecommendMyInfoArea>
        <MyLogoName>
          <AvatarSt size={38} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <RecommendNameWrapper>
            <RecommendUserID>rarax_k</RecommendUserID>
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
