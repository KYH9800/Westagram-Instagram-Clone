import React from 'react';
// styled-components
import {
  AvatarSt,
  UserInfoCardBox,
  MyInfoArea,
  MyLogoName,
  NameWrapper,
  UserID,
  UserName,
  ChangeBtn,
  RecommendImpormation,
  RecommendLists,
} from '../../styles/components/UserInfoSt';
import { CustomLink } from '../../styles/Customs/CustomSt';
// components
import RecommendListEntry from './RecommendListEntry';
import UserInfoFooter from './UserInfoFooter';

// 메인 화면에서의 사용자 정보 카드 컴포넌트
const UserInfoCard = () => {
  return (
    <UserInfoCardBox>
      <MyInfoArea>
        <MyLogoName>
          <CustomLink href="/user/kyh0506_">
            <AvatarSt size={57} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </CustomLink>
          <NameWrapper>
            <CustomLink href="/user/kyh0506_">
              <UserID>kyh0506_</UserID>
            </CustomLink>
            <UserName>고윤혁</UserName>
          </NameWrapper>
        </MyLogoName>
        <div>
          <ChangeBtn>전환</ChangeBtn>
        </div>
      </MyInfoArea>
      <RecommendImpormation>
        <h4>회원님을 위한 추천</h4>
        <h5>모두 보기</h5>
      </RecommendImpormation>
      <RecommendLists>
        <RecommendListEntry />
        <RecommendListEntry />
        <RecommendListEntry />
        <RecommendListEntry />
        <RecommendListEntry />
      </RecommendLists>
      <UserInfoFooter />
    </UserInfoCardBox>
  );
};

export default UserInfoCard;
