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
  UserInfoFooter,
} from '../../styles/components/UserInfoSt';
// components
import RecommendListEntry from './RecommendListEntry';

// 메인 화면에서의 사용자 정보 카드 컴포넌트
const UserInfoCard = () => {
  return (
    <UserInfoCardBox>
      <MyInfoArea>
        <MyLogoName>
          <AvatarSt size={57} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <NameWrapper>
            <UserID>kyh0506_</UserID>
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
      <UserInfoFooter>
        <div>
          <p>
            <span>Github</span>∙<span>Notion</span> <span>이력서</span>∙<span>010-9800-5226</span>∙
            <span>클론 프로젝트 소개</span>
          </p>
        </div>
        <div>
          <p>© 2023 WESTAGRAM FROM 고윤혁</p>
        </div>
      </UserInfoFooter>
    </UserInfoCardBox>
  );
};

export default UserInfoCard;
